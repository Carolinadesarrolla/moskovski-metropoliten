import sharp from 'sharp';

const input = 'src/assets/images/blok 3 slaid 10/vdnkh_fuente_amistad_de_los_pueblos.jpg';

const output = 'src/assets/images/blok 3 slaid 10/vdnkh_fuente_amistad_de_los_pueblos.webp';

await sharp(input)
  .rotate()
  .resize({
    width: 2400,
    height: 2400,
    fit: 'inside',
    withoutEnlargement: true,
  })
  .webp({
    quality: 82,
    effort: 5,
  })
  .toFile(output);

console.log('Imagen optimizada correctamente');