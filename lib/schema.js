export const saudiBranchSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  'name': 'Sigma Machines - سیجما لماكينات الـ CNC',
  'image': 'https://sigmamachines.net/images/logo.png',
  '@id': 'https://sigmamachines.net/#saudi-branch',
  'url': 'https://sigmamachines.net',
  'telephone': '+966569745955',
  'priceRange': '$$$$',
  'address': {
    '@type': 'PostalAddress',
    'streetAddress': ' 8053 شارع سلمان الفارسي /  حي النهضة',
    'addressLocality': 'الرياض',
    'addressRegion': 'منطقة الرياض',
    'postalCode': '12345',
    'addressCountry': 'SA',
  },
  'geo': {
    '@type': 'GeoCoordinates',
    'latitude': 24.758229,
    'longitude': 46.813462, 
  },
  'openingHoursSpecification': [
    {
      '@type': 'OpeningHoursSpecification',
      'dayOfWeek': [
        'Saturday',
        'Sunday',
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday'
      ],
      'opens': '09:00',
      'closes': '18:00',
    },
  ],
  'sameAs': [
    'https://www.facebook.com/share/177NhW552u',
    'https://www.instagram.com/sigma_machines?igsh=MWRlMmc4OTMyanJwZQ==',
    'https://www.linkedin.com/company/sigma-machines/',
  ],
  'areaServed': {
    '@type': 'Country',
    'name': 'Saudi Arabia',
  },
  'description': 'توريد وصيانة ماكينات الـ CNC وماكينات قص المعادن بالفايبر ليزر وقطع الغيار في المملكة العربية السعودية و خارج المملكة.',
};