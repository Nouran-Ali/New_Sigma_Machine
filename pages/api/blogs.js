import fs from 'fs';
import path from 'path';

export default async function handler(req, res) {
    // 1. السماح فقط بطلبات POST
    if (req.method !== 'POST') {
        return res.status(405).json({ message: 'Method Not Allowed' });
    }

    // 2. حماية الـ API بمفتاح سري (Secret Token)
    const { authorization } = req.headers;
    const SECRET_KEY = process.env.N8N_API_SECRET || "MY_SUPER_SECRET_KEY_123";

    if (authorization !== `Bearer ${SECRET_KEY}`) {
        return res.status(401).json({ message: 'Unauthorized' });
    }

    try {
        const newBlog = req.body;

        // قراءة وتفكيك البيانات بدون require لتفادي الـ Cache
        let fileContent = fs.readFileSync(filePath, 'utf8');

        // مسار ملف blogs.js المحلي
        const filePath = path.join(process.cwd(), 'lib', 'blogs.js');

        // استخراج نص الـ JSON فقط بدون كلمة "export const blogs = "
        const jsonContent = fileContent.replace('export const blogs = ', '').replace(/;\s*$/, '');
        const blogs = JSON.parse(jsonContent);

        const newId = blogs.length > 0 ? Math.max(...blogs.map(b => b.id)) + 1 : 1;
        const blogToAdd = { id: newId, ...newBlog };

        const updatedBlogs = [blogToAdd, ...blogs];
        const updatedFileContent = `export const blogs = ${JSON.stringify(updatedBlogs, null, 2)};\n`;

        fs.writeFileSync(filePath, updatedFileContent, 'utf8');

        return res.status(200).json({
            message: 'Blog added successfully!',
            blog: blogToAdd
        });

    } catch (error) {
        console.error('Error adding blog:', error);
        return res.status(500).json({ message: 'Internal Server Error', error: error.message });
    }
}