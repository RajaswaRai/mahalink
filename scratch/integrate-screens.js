const fs = require('fs');
const path = require('path');

const mappings = [
  { file: 'archives.html', route: 'archives', name: 'Archives' },
  { file: 'blog.html', route: 'blog', name: 'Blog' },
  { file: 'dashboard.html', route: 'dashboard', name: 'Dashboard' },
  { file: 'dues-tracking.html', route: 'dues', name: 'Dues' },
  { file: 'events-agenda.html', route: 'events', name: 'Events' },
  { file: 'finance-cash.html', route: 'finance', name: 'Finance' },
  { file: 'inventory.html', route: 'inventory', name: 'Inventory' },
  { file: 'login.html', route: 'login', name: 'Login' },
  { file: 'member-directory.html', route: 'members', name: 'Members' }
];

const sourceDir = path.join(__dirname, '..', '.stitch', 'designs');
const appDir = path.join(__dirname, '..', 'src', 'app');

mappings.forEach(map => {
  const filePath = path.join(sourceDir, map.file);
  if (!fs.existsSync(filePath)) {
    console.log(`Skipping ${map.file} - not found`);
    return;
  }
  
  let html = fs.readFileSync(filePath, 'utf8');
  const bodyMatch = html.match(/<body[^>]*>([\s\S]*?)<\/body>/);
  if (!bodyMatch) {
    console.log(`Skipping ${map.file} - no body found`);
    return;
  }

  let jsx = bodyMatch[1];
  
  // Basic JSX conversions
  jsx = jsx.replace(/class=/g, 'className=');
  jsx = jsx.replace(/(<img[^>]*?[^\/])>/g, '$1 />');
  jsx = jsx.replace(/(<(?:input|hr|br)[^>]*?[^\/])>/g, '$1 />');
  jsx = jsx.replace(/<!--[\s\S]*?-->/g, '');

  const routeDir = path.join(appDir, map.route);
  if (!fs.existsSync(routeDir)) {
    fs.mkdirSync(routeDir, { recursive: true });
  }

  const componentStr = `import Image from "next/image";
import Link from "next/link";

export default function ${map.name}Page() {
  return (
    <div className="bg-background text-on-background font-body-md min-h-screen flex flex-col pt-20">
      ${jsx}
    </div>
  );
}
`;

  fs.writeFileSync(path.join(routeDir, 'page.tsx'), componentStr);
  console.log(`Generated route /${map.route}`);
});
