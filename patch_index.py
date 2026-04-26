import re

with open('osaka_pulse/index.html', 'r') as f:
    content = f.read()

# Fix grid-cols to 3 because we removed one column
content = re.sub(r'grid-cols-1 md:grid-cols-4 gap-8', 'grid-cols-1 md:grid-cols-3 gap-8', content)
content = re.sub(r'<div class="md:col-span-1">\n<a', '<div class="md:col-span-1">\n<a', content)

with open('osaka_pulse/index.html', 'w') as f:
    f.write(content)
