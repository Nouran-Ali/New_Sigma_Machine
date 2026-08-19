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

    // مسار ملف blogs.js المحلي
    const filePath = path.join(process.cwd(), 'lib', 'blogs.js');

    // قراءة الملف الحالي كـ Text
    let fileContent = fs.readFileSync(filePath, 'utf8');

    // جلب البيانات الحالية من الملف
    const { blogs } = require('@/lib/blogs');

    // إضافة ID تلقائي
    const newId = blogs.length > 0 ? Math.max(...blogs.map(b => b.id)) + 1 : 1;
    const blogToAdd = { id: newId, ...newBlog };

    // مصفوفة المقالات الجديدة
    const updatedBlogs = [blogToAdd, ...blogs];

    // إعادة كتابة الملف بنفس التنسيق
    const updatedFileContent = `export const blogs = ${JSON.stringify(updatedBlogs, null, 2)};\n`;

    // حفظ الملف
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