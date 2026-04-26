import re

with open('osaka_pulse/news.html', 'r') as f:
    content = f.read()

# Fix grid-cols to 3
content = re.sub(r'grid-cols-1 md:grid-cols-4 gap-8', 'grid-cols-1 md:grid-cols-3 gap-8', content)

# Remove Sitemap
content = re.sub(r'<li><a[^>]*href="#"[^>]*>Sitemap</a></li>\s*', '', content)

# Remove Legal block
content = re.sub(r'<div>\s*<h4[^>]*>Legal</h4>\s*<ul[^>]*>\s*<li><a[^>]*>Privacy Policy</a></li>\s*<li><a[^>]*>Terms of Service</a></li>\s*</ul>\s*</div>\s*', '', content)

# Remove Contact Support
content = re.sub(r'<li><a[^>]*href="#"[^>]*>Contact Support</a></li>\s*', '', content)

with open('osaka_pulse/news.html', 'w') as f:
    f.write(content)
