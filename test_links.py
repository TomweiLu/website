import os
import re

files = ['osaka_pulse/index.html', 'osaka_pulse/food.html', 'osaka_pulse/news.html', 'osaka_pulse/planning.html', 'osaka_pulse/sights.html']

for file in files:
    with open(file, 'r') as f:
        content = f.read()

    assert "Privacy Policy" not in content, f"{file} still contains 'Privacy Policy'"
    assert "Terms of Service" not in content, f"{file} still contains 'Terms of Service'"
    assert "Contact Support" not in content, f"{file} still contains 'Contact Support'"
    assert "Sitemap" not in content, f"{file} still contains 'Sitemap'"

print("Tests passed!")
