const fs = require('fs');
const https = require('https');
const path = require('path');

const downloads = [
  { name: 'archives', html: 'https://contribution.usercontent.google.com/download?c=CgthaWRhX2NvZGVmeBJ8Eh1hcHBfY29tcGFuaW9uX2dlbmVyYXRlZF9maWxlcxpbCiVodG1sXzAwMDY1YTAwYzM1MGI2NGYwNWMyYzNlNTc0MzNhZGE3EgsSBxDM8_ahzAMYAZIBJAoKcHJvamVjdF9pZBIWQhQxNDk3MzM5MzAzODI3MDA4MzY4Mg&filename=&opi=89354086', img: 'https://lh3.googleusercontent.com/aida/AEtjO1WK524_7kuzDo3q5HbhWYFX7799Nh4SM-1dPHpue4C_8kOS-pDgRRms7MtNSzUKy3eQwfJx7YwbgwuadEnIf_OsE4X4ZcgPy8shBnVYbHOn8Z8AHp76SJ8NTQ3cS2TiBhTg77sFy6m-ukPJ0UnliK0BaZYmXJyQDRTIE_wLRACOdPUKTjum_wwX8tl7dgIcQTcNumxSn1UwrHsxYgREoly4rs0T14hR4AEVC6HAicLnuY1Ah8vDgAEGaz7b=w780' },
  { name: 'inventory', html: 'https://contribution.usercontent.google.com/download?c=CgthaWRhX2NvZGVmeBJ8Eh1hcHBfY29tcGFuaW9uX2dlbmVyYXRlZF9maWxlcxpbCiVodG1sXzAwMDY1YTAwYzM4YTkyNWUwMzMyZWQyZjRiMmFkZTVhEgsSBxDM8_ahzAMYAZIBJAoKcHJvamVjdF9pZBIWQhQxNDk3MzM5MzAzODI3MDA4MzY4Mg&filename=&opi=89354086', img: 'https://lh3.googleusercontent.com/aida/AEtjO1V67X93Hb4oArqbBpD5aLnXeOiN_5g99oFQa0PLGWZ3o2DGNK6kEwvi4Tcz4b9k2Pxl2tr39VskUrrat72mpo7UKqcfKlkZ9o-fONEyQzdIjKLT4R2TxMTyy2XEUKO8eGpwQ92ZFMhKF8LGsUNUcTaiedhhkeHZK5y2rMJe9-SW7-GAbpeVm0NS6I5i0o0BPaY8H2jxHgQu2GZZnwEksXdFmeMuCRxQwTFPl-N74N8TT5baVAnN_Mv9ENdC=w780' },
  { name: 'dashboard', html: 'https://contribution.usercontent.google.com/download?c=CgthaWRhX2NvZGVmeBJ8Eh1hcHBfY29tcGFuaW9uX2dlbmVyYXRlZF9maWxlcxpbCiVodG1sXzAwMDY1YTAwYzM2N2JiOTkwMzM4NGJmZjIyMjllNGYzEgsSBxDM8_ahzAMYAZIBJAoKcHJvamVjdF9pZBIWQhQxNDk3MzM5MzAzODI3MDA4MzY4Mg&filename=&opi=89354086', img: 'https://lh3.googleusercontent.com/aida/AEtjO1U94YEQ0AJz9HSzU0aZdckuccAQn-AS6_kFUlUFaBgSu8v1x_g-EUg4RtdRYQ8N1fSXqugKLa2v0PZZNDH7P3G9KKXiP3a1mXqIN5rt_116xCLR52LMxSglSKvp_Fy82KTtif3FgKU6MCw3DAQnZ4NKOkPrmBRaStnv8cOWWOsBdRpVbzB-sJZV-sv6l3y3AdXaxDKFXtz0urzixsh-gsr5DrFqFOqpZm0ezB0j0wLwXG3LLj6hdjizu2A=w780' },
  { name: 'login', html: 'https://contribution.usercontent.google.com/download?c=CgthaWRhX2NvZGVmeBJ8Eh1hcHBfY29tcGFuaW9uX2dlbmVyYXRlZF9maWxlcxpbCiVodG1sXzAwMDY1YTAwYzMxYTUwY2MwOTI1YzdiNjM4MDQxMWEwEgsSBxDM8_ahzAMYAZIBJAoKcHJvamVjdF9pZBIWQhQxNDk3MzM5MzAzODI3MDA4MzY4Mg&filename=&opi=89354086', img: 'https://lh3.googleusercontent.com/aida/AEtjO1Wik3AXcfan3KEfqsn95RYMd_RA-h3HHKv-dOAtql8quEqI5y_iNXKCH0etrD63h8os2RAumBDg-SmtCcjiSroFBR08ZfpojjuaFnosQgVRdm4labtW6Nm5d0JoEGVlRbKuYQ4Tk2IupNdZnD7dZfwOoWjGi8B4fiZZbTUbH_lxjUr34SZcKKzilDW8oLK7QY3IMijuC7W6y4fln_zJKUpa5g1YN18KiXMXUvQI7CewXZmYNBhomo-2ShY8=w780' },
  { name: 'member-directory', html: 'https://contribution.usercontent.google.com/download?c=CgthaWRhX2NvZGVmeBJ8Eh1hcHBfY29tcGFuaW9uX2dlbmVyYXRlZF9maWxlcxpbCiVodG1sXzAwMDY1YTAwYzJkNGQzZGEwNGVhYTdjYTFkMTZkY2IxEgsSBxDM8_ahzAMYAZIBJAoKcHJvamVjdF9pZBIWQhQxNDk3MzM5MzAzODI3MDA4MzY4Mg&filename=&opi=89354086', img: 'https://lh3.googleusercontent.com/aida/AEtjO1Wu2OmEIy1vdeeI0NF6k4_PUdX3dCb0nMM45Ng-9MpKsUU76haYNoNnbEMd-1uXZDcSBIns0Ca9WvXbtkTgImxC_jIezmFBryWl-5J1UZnncz6q_0mjhW-0NPdr8w4b5PM45P8owxUNRIM4ptXLjF_nGTcRHMS3JghbJ4pJsxPkF7fDkcpNIvBEeYm5sNRYDburp0ZXicNQi-DnQCP7IbALfWHbKHGThqX1SQrwOiHpD65A3llkTdrAlVz8=w798' },
  { name: 'events-agenda', html: 'https://contribution.usercontent.google.com/download?c=CgthaWRhX2NvZGVmeBJ8Eh1hcHBfY29tcGFuaW9uX2dlbmVyYXRlZF9maWxlcxpbCiVodG1sXzAwMDY1YTAwYzJmNDk2MGYwMWE2MTFkNDg0MTgzZDBhEgsSBxDM8_ahzAMYAZIBJAoKcHJvamVjdF9pZBIWQhQxNDk3MzM5MzAzODI3MDA4MzY4Mg&filename=&opi=89354086', img: 'https://lh3.googleusercontent.com/aida/AEtjO1Xm48BVFHoadPMv177UKHHcTtkFkdzBlCxRsOdFmEGtSp0vXPVvpOd2uNnB7A-ECU1dHtJyk1ufr6LwShJeqPTHthi5wHZsL63RL_CqdMc0PKWrMZQXr4EQvUvvQU-2HXsILX4S8-EOducVe0KbL3Bin33xIcTjibkzr3IhkYeq7pOJ8RAE4Ha6Q8yBkG9708OqEFlYsnwR5h7y9WGVfEOOmqKKYXmwSkoyBUnTSbC2JCRlbRroBjpbuWjG=w780' },
  { name: 'blog', html: 'https://contribution.usercontent.google.com/download?c=CgthaWRhX2NvZGVmeBJ8Eh1hcHBfY29tcGFuaW9uX2dlbmVyYXRlZF9maWxlcxpbCiVodG1sXzAwMDY1YTAwYzJlYjEzODAwNzllN2MyNzljMWE1MWRmEgsSBxDM8_ahzAMYAZIBJAoKcHJvamVjdF9pZBIWQhQxNDk3MzM5MzAzODI3MDA4MzY4Mg&filename=&opi=89354086', img: 'https://lh3.googleusercontent.com/aida/AEtjO1XKKHb3IY3Cd_QSt6ujueqVPgfv6TKWDGQJPjkzNt03JWyagzUtpm93d8ukRD2egZiVi0edQM8xuYoMXPT43QCKyo_kww2GCaiF-yxyn0l43uzYPz3l82epe3n-SEMX1ZZpwwlXVe5WeqENUSIzduvsruO4wKTBuRBdXQZ_MccS0y-HnfHMGAm56X561kRptDEo1FvSPm8YbwviFW5mOThNL0af7ZR0XidJC-5mPE4DcO8q3d2PpjuSHYk=w780' },
  { name: 'finance-cash', html: 'https://contribution.usercontent.google.com/download?c=CgthaWRhX2NvZGVmeBJ8Eh1hcHBfY29tcGFuaW9uX2dlbmVyYXRlZF9maWxlcxpbCiVodG1sXzAwMDY1YTAwYzMxMGFjZjUwMWE2MTFkNDg0MTgzZDBhEgsSBxDM8_ahzAMYAZIBJAoKcHJvamVjdF9pZBIWQhQxNDk3MzM5MzAzODI3MDA4MzY4Mg&filename=&opi=89354086', img: 'https://lh3.googleusercontent.com/aida/AEtjO1WhI7d8TzM-UJ3AgLzNoWypjITo14FgWp396y1-x2_WVbP1aA43tkQ_JQL8imqx1RvX-wTc2omeKwP3nfeS2V5PMFfb9HJ8RMY7tyeHv7nZKyqcdNxojyftNJULf1jFx_J5IU0Suc9yPYnL2YTrIr0SRf3TYXMwmihVKKwlfHsR78o8TLURvv5wQwRDyPumOxGJK5zjcJXTlBIfwhGGNMuBTU2f_ZeLaLcgloktYUyW9CXUc34x65Ro_xDS=w780' },
  { name: 'dues-tracking', html: 'https://contribution.usercontent.google.com/download?c=CgthaWRhX2NvZGVmeBJ8Eh1hcHBfY29tcGFuaW9uX2dlbmVyYXRlZF9maWxlcxpbCiVodG1sXzAwMDY1YTA4ODc2Mjg5OTkwMjJkNGE2NTVmMDYxOWI3EgsSBxDM8_ahzAMYAZIBJAoKcHJvamVjdF9pZBIWQhQxNDk3MzM5MzAzODI3MDA4MzY4Mg&filename=&opi=89354086', img: 'https://lh3.googleusercontent.com/aida/AEtjO1UeiadhRsYTfP3b1lA3iaCpJQpJtyIicwX4iEcOQzFbqYrCL6C1JbI4c9L9EUURKuuPRbYAQaPkSv7jxU5-CC0eU50FnXi0n12sCKY_kayfvMKkNlJojin0Bm_cnusiO5rrVudtrBTG7xZSR0aqTBBKcJ929ArtzZbUaO_6nRZKnqVDBlNbhe5rWOWgag6A9ZSiYQh36Mh6JB5yPjPd5impq4LKifZmevDKchP6GbDfj3hHL5Eoifn38w6Q=w780' }
];

const downloadFile = (url, dest) => {
  return new Promise((resolve, reject) => {
    https.get(url, (response) => {
      // Handle redirects
      if (response.statusCode === 301 || response.statusCode === 302) {
        return downloadFile(response.headers.location, dest).then(resolve).catch(reject);
      }
      
      const file = fs.createWriteStream(dest);
      response.pipe(file);
      file.on('finish', () => {
        file.close();
        resolve();
      });
    }).on('error', (err) => {
      fs.unlink(dest, () => {});
      reject(err);
    });
  });
};

const dir = path.join(__dirname, '..', '.stitch', 'designs');
if (!fs.existsSync(dir)) {
  fs.mkdirSync(dir, { recursive: true });
}

async function main() {
  for (const item of downloads) {
    console.log(`Downloading ${item.name}...`);
    try {
      await downloadFile(item.html, path.join(dir, `${item.name}.html`));
      await downloadFile(item.img, path.join(dir, `${item.name}.png`));
      console.log(`Finished ${item.name}`);
    } catch (err) {
      console.error(`Failed ${item.name}:`, err);
    }
  }
}

main();
