const fs = require('fs');
const html = fs.readFileSync('.stitch/designs/landing-page.html', 'utf8');
const match = html.match(/tailwind\.config = (\{[\s\S]*?\})\s*<\/script>/);

if (match) {
    const config = eval('(' + match[1] + ')');
    let css = '\n/* Stitch Theme Colors */\n@theme inline {\n';
    
    // Add colors
    for (const [key, val] of Object.entries(config.theme.extend.colors)) {
        css += `  --color-${key}: ${val};\n`;
    }
    
    // Add spacing
    for (const [key, val] of Object.entries(config.theme.extend.spacing)) {
        css += `  --spacing-${key}: ${val};\n`;
    }
    
    css += '}\n';
    
    const globals = fs.readFileSync('src/app/globals.css', 'utf8');
    fs.writeFileSync('src/app/globals.css', globals + css);
    console.log('Successfully appended theme to globals.css');
} else {
    console.log('No tailwind config found');
}
