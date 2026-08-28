const fs = require('fs');
let html = fs.readFileSync('.stitch/designs/landing-page.html', 'utf8');

// Extract body content
const bodyMatch = html.match(/<body[^>]*>([\s\S]*?)<\/body>/);
if (!bodyMatch) {
    console.error('Body not found');
    process.exit(1);
}

let jsx = bodyMatch[1];

// Convert class to className
jsx = jsx.replace(/class=/g, 'className=');

// Self-close img tags
jsx = jsx.replace(/(<img[^>]*?[^\/])>/g, '$1 />');

// Handle other self-closing tags like input, hr, br, meta, link (though most shouldn't be in body)
jsx = jsx.replace(/(<(?:input|hr|br)[^>]*?[^\/])>/g, '$1 />');

// Fix inline styles if any (Stitch rarely uses them, but just in case)
jsx = jsx.replace(/style="([^"]*)"/g, (match, styles) => {
    // Basic conversion for style string to object, very rudimentary
    return match; // Better to leave and manually fix if it fails
});

// Remove comments
jsx = jsx.replace(/<!--[\s\S]*?-->/g, '');

const componentStr = `import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-background text-on-background font-body-md min-h-screen flex flex-col pt-20">
      ${jsx}
    </div>
  );
}
`;

fs.writeFileSync('src/app/page.tsx', componentStr);
console.log('Successfully updated page.tsx');
