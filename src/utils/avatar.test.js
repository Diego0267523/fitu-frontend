import { getAvatarFallback, getSafeAvatarSrc } from './avatar';

const decode = (uri) => decodeURIComponent(uri.split(',')[1]);

describe('getAvatarFallback', () => {
  test('devuelve un SVG en data URI con la inicial en mayúscula', () => {
    const uri = getAvatarFallback('diego');
    expect(uri.startsWith('data:image/svg+xml')).toBe(true);
    expect(decode(uri)).toContain('>D</text>');
  });

  test('usa "U" cuando el nombre está vacío o es nulo', () => {
    expect(decode(getAvatarFallback(''))).toContain('>U</text>');
    expect(decode(getAvatarFallback(null))).toContain('>U</text>');
  });
});

describe('getSafeAvatarSrc', () => {
  test('respeta una URL de avatar válida', () => {
    expect(getSafeAvatarSrc('https://cdn.test/a.png', 'Ana')).toBe('https://cdn.test/a.png');
  });

  test('cae al avatar generado si la fuente no es válida', () => {
    expect(getSafeAvatarSrc('   ', 'Ana')).toBe(getAvatarFallback('Ana'));
    expect(getSafeAvatarSrc(undefined, 'Ana')).toBe(getAvatarFallback('Ana'));
  });
});
