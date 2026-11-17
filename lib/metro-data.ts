import type { StaticImageData } from 'next/image';

// Слайд 1: Главный титульный экран
import heroVestibuleImg from '@/src/assets/images/hero_sokolniki_vestibule_1794710667471.jpg';

// =========================================================================
// БЛОК 2 (История) — Слайды 2–5
// =========================================================================
// Слайд 02 · Истоки и рождение (1935)
import s2VestibuloKomsomolskayaImg from '@/src/assets/images/blok 2 slaid 2/vestibulo_komsomolskaya_1935.jpg';
import s2AperturaPrimeraLineaImg from '@/src/assets/images/blok 2 slaid 2/apertura_primera_linea_1935.png';
import s2ManifestacionInauguracionImg from '@/src/assets/images/blok 2 slaid 2/manifestacion_inauguracion_1935.png';

// Слайд 03 · Сталин и идеология
import s3MarmolImg from '@/src/assets/images/blok 2 slaid 3/marmol_palacios_subterraneos.jpg';
import s3GranitoImg from '@/src/assets/images/blok 2 slaid 3/granito_monumental.jpg';
import s3BronceImg from '@/src/assets/images/blok 2 slaid 3/bronce_decorativo.jpg';
import s3MolduraMonumentalImg from '@/src/assets/images/blok 2 slaid 3/moldura_monumental.jpg';

// Слайд 04 · Великая Отечественная война (1941–1945)
import s4RefugioMaternidadBibliotecaImg from '@/src/assets/images/blok 2 slaid 4/refugio_maternidad_biblioteca.jpg';
import s4RefugioBombardeosImg from '@/src/assets/images/blok 2 slaid 4/refugio_bombardeos.jpg';
import s4BunkerStalinImg from '@/src/assets/images/blok 2 slaid 4/bunker_stalin.jpg';

// Слайд 05 · Послевоенный триумф
import s5TriunfoPatriaImg from '@/src/assets/images/blok 2 slaid 5/triunfo_de_la_patria.jpg';

// =========================================================================
// БЛОК 3 (Архитектурные жемчужины и линии) — Слайды 6–15
// =========================================================================
// Слайд 06 · «Комсомольская»
import s6KomsomolskayaSalaPrincipalImg from '@/src/assets/images/blok 3 slaid 6/komsomolskaya_sala_principal.jpg';
import s6KomsomolskayaMosaicoBovedaImg from '@/src/assets/images/blok 3 slaid 6/komsomolskaya_mosaico_boveda.jpg';
import s6KomsomolskayaVestibuloExteriorImg from '@/src/assets/images/blok 3 slaid 6/komsomolskaya_vestibulo_exterior.jpg';

// Слайд 07 · «Маяковская»
import s7MayakovskayaSalaPrincipalImg from '@/src/assets/images/blok 3 slaid 7/mayakovskaya_sala_principal.jpg';
import s7MayakovskayaMosaicoAvionesImg from '@/src/assets/images/blok 3 slaid 7/mayakovskaya_mosaico_aviones.jpg';
import s7MayakovskayaVestibuloBustoImg from '@/src/assets/images/blok 3 slaid 7/mayakovskaya_vestibulo_busto.jpg';

// Слайд 08 · «Площадь Революции»
import s8PloshchadRevolyutsiiSalaCentralImg from '@/src/assets/images/blok 3 slaid 8/ploshchad_revolyutsii_sala_central.png';
import s8PloshchadRevolyutsiiGuardiaPerroImg from '@/src/assets/images/blok 3 slaid 8/ploshchad_revolyutsii_guardia_con_perro.jpg';
import s8PloshchadRevolyutsiiHocicoPerroImg from '@/src/assets/images/blok 3 slaid 8/ploshchad_revolyutsii_hocico_perro_suerte.jpg';
import s8PloshchadRevolyutsiiGaleriaEsculturasImg from '@/src/assets/images/blok 3 slaid 8/ploshchad_revolyutsii_galeria_esculturas.jpg';
import s8PloshchadRevolyutsiiEsculturasHistoriaImg from '@/src/assets/images/blok 3 slaid 8/ploshchad_revolyutsii_esculturas_historia.jpg';

// Слайд 09 · «Электрозаводская»
import s9ElektrozavodskayaSalaPlafonesImg from '@/src/assets/images/blok 3 slaid 9/elektrozavodskaya_sala_plafones.jpg';
import s9ElektrozavodskayaPlaca1944Img from '@/src/assets/images/blok 3 slaid 9/elektrozavodskaya_placa_conmemorativa_1944.jpg';
import s9ElektrozavodskayaVestibuloImg from '@/src/assets/images/blok 3 slaid 9/elektrozavodskaya_vestibulo.jpg';
import s9ElektrozavodskayaSello1947Img from '@/src/assets/images/blok 3 slaid 9/elektrozavodskaya_sello_1947.jpg';

// Слайд 10 · «ВДНХ»
import s10VdnkhSalaPrincipalImg from '@/src/assets/images/blok 3 slaid 10/vdnkh_sala_principal.jpg';
import s10VdnkhPerspectivaAndenImg from '@/src/assets/images/blok 3 slaid 10/vdnkh_perspectiva_anden.jpg';
import s10VdnkhMonumentoEspacioImg from '@/src/assets/images/blok 3 slaid 10/vdnkh_monumento_conquistadores_espacio.png';
import s10VdnkhFuenteAmistadPueblosImg from '@/src/assets/images/blok 3 slaid 10/vdnkh_fuente_amistad_de_los_pueblos.webp';
import s10VdnkhPabellonRusiaImg from '@/src/assets/images/blok 3 slaid 10/vdnkh_pabellon_rusia.jpg';
import s10VdnkhPabellonUcraniaImg from '@/src/assets/images/blok 3 slaid 10/vdnkh_pabellon_ucrania.jpg';
import s10VdnkhDetallesArquitecturaImg from '@/src/assets/images/blok 3 slaid 10/vdnkh_detalles_arquitectura.jpg';

// Слайд 11 · «Марксистская»
import s11MarksistskayaSalaColumnasRojasImg from '@/src/assets/images/blok 3 slaid 11/marksistskaya_sala_columnas_rojas.jpg';
import s11MarksistskayaLamparaEspiralImg from '@/src/assets/images/blok 3 slaid 11/marksistskaya_lampara_espiral.jpg';
import s11MarksistskayaOrnamentoEntradaImg from '@/src/assets/images/blok 3 slaid 11/marksistskaya_ornamento_entrada.jpg';
import s11MarksistskayaOrnamentoTransitoImg from '@/src/assets/images/blok 3 slaid 11/marksistskaya_ornamento_transito.jpg';

// Слайд 12 · «Новослободская»
import s12NovoslobodskayaVitralesSalaImg from '@/src/assets/images/blok 3 slaid 12/novoslobodskaya_vitrales_sala.jpg';
import s12NovoslobodskayaAndenPilonesImg from '@/src/assets/images/blok 3 slaid 12/novoslobodskaya_anden_pilones.jpg';
import s12NovoslobodskayaVestibuloAccesoImg from '@/src/assets/images/blok 3 slaid 12/novoslobodskaya_vestibulo_acceso.jpg';

// Слайд 13 · «Пушкинская»
import s13PushkinskayaSalaMarmolBlancoImg from '@/src/assets/images/blok 3 slaid 13/pushkinskaya_sala_marmol_blanco.jpg';
import s13PushkinskayaMedallonPoemaImg from '@/src/assets/images/blok 3 slaid 13/pushkinskaya_medallon_poema_moscu.jpg';

// Слайд 14 · «Ленинский проспект»
import s14LeninskyProspektAndenModernistaImg from '@/src/assets/images/blok 3 slaid 14/leninsky_prospekt_anden_modernista.jpg';
import s14LeninskyProspektVestibuloImg from '@/src/assets/images/blok 3 slaid 14/leninsky_prospekt_vestibulo.jpg';
import s14LeninskyProspektSello1965Img from '@/src/assets/images/blok 3 slaid 14/leninsky_prospekt_sello_1965.jpg';

// Слайд 15 · Большая кольцевая линия (БКЛ)
import s15BklSavyolovskayaImg from '@/src/assets/images/blok 3 slaid 15/bkl_savyolovskaya.jpg';
import s15BklMapaAnilloImg from '@/src/assets/images/blok 3 slaid 15/bkl_mapa_anillo_linea_11.png';
import s15BklCskaImg from '@/src/assets/images/blok 3 slaid 15/bkl_cska.jpg';
import s15BklAviamotornayaImg from '@/src/assets/images/blok 3 slaid 15/bkl_aviamotornaya.jpg';
import s15BklMichurinskyProspektImg from '@/src/assets/images/blok 3 slaid 15/bkl_michurinsky_prospekt.jpg';
import s15BklVorontsovskayaImg from '@/src/assets/images/blok 3 slaid 15/bkl_vorontsovskaya.jpg';
import s15BklAminyevskayaImg from '@/src/assets/images/blok 3 slaid 15/bkl_aminyevskaya.jpg';
import s15BklMnyovnikiImg from '@/src/assets/images/blok 3 slaid 15/bkl_mnyovniki.jpg';
import s15BklNarodnoeOpolchenieImg from '@/src/assets/images/blok 3 slaid 15/bkl_narodnoe_opolchenie.jpg';
import s15BklPetrovskyParkImg from '@/src/assets/images/blok 3 slaid 15/bkl_petrovsky_park.jpg';
import s15BklKhoroshevskayaImg from '@/src/assets/images/blok 3 slaid 15/bkl_khoroshevskaya.jpg';
import s15BklTekstilshchikiTrenImg from '@/src/assets/images/blok 3 slaid 15/bkl_tekstilshchiki_tren.jpg';

// =========================================================================
// БЛОК 5 (Гранд-финал) — Слайд 20 («Кольцевая линия»)
// =========================================================================
import s20KoltsevayaKomsomolskayaImg from '@/src/assets/images/blok 5 slaid 20/koltsevaya_komsomolskaya_sala_boveda.jpg';
import s20KoltsevayaMapaAnilloImg from '@/src/assets/images/blok 5 slaid 20/koltsevaya_mapa_anillo_linea_5.png';
import s20KoltsevayaBelorusskayaImg from '@/src/assets/images/blok 5 slaid 20/koltsevaya_belorusskaya_sala.jpg';
import s20KoltsevayaTaganskayaImg from '@/src/assets/images/blok 5 slaid 20/koltsevaya_taganskaya_mayolica.jpg';
import s20KoltsevayaProspektMiraImg from '@/src/assets/images/blok 5 slaid 20/koltsevaya_prospekt_mira_relieve.jpg';
import s20KoltsevayaParkKulturyImg from '@/src/assets/images/blok 5 slaid 20/koltsevaya_park_kultury_anden.jpg';
import trojka from '@/src/assets/images/trojka.png';


export interface MetroLineBadge {
  number: string;
  name: string;
  color: string;
  textColor?: string;
}

export interface MetroPhoto {
  src: StaticImageData | string;
  alt: string;
  caption: string;
}

export interface MetroChapter {
  id: string;
  slideNumber: number;
  blockLabel: string;
  indexLabel: string;
  navShortLabel: string;
  title: string;
  subtitle: string;
  quote?: string;
  line: MetroLineBadge;
  metadata: string;
  keyPoints: string[];
  architecturalNote: string;
  photos: MetroPhoto[];
  layoutVariant: 'bottom-left' | 'bottom-right' | 'center-left' | 'center-right';
}

export const OFFICIAL_METRO_LOGO_SRC = '/assets/aistudio/______________b1b55682.svg';

export const HERO_MEDIA = {
  videoSrc: '/assets/metro-intro.mp4',
  posterSrc: '/assets/metro-intro-poster.jpg',
  image: heroVestibuleImg,
  alt: 'Исторический наземный вестибюль Московского метрополитена с мраморной колоннадой и светящейся буквой М',
  caption: 'Наземный павильон станции первой очереди · Идеология «Дворцы для народа»',
};

// Слайды 2–15 (Блок 2 «История» и Блок 3 «Архитектурные жемчужины и линии»).
// Чтобы добавить или заменить фото для любого слайда, просто обновите массив `photos` ниже:
// photos[0] отображается за текстом информационного слайда и далее как 1-е чистое фото;
// photos[1], photos[2] и последующие автоматически раскрываются как полноэкранные фото после слайда.
export const METRO_CHAPTERS: MetroChapter[] = [
  // =========================================================================
  // БЛОК 2 (История) — Слайды 2–5
  // =========================================================================
  {
    id: 'origins-1935',
    slideNumber: 2,
    blockLabel: 'Блок 2 · История',
    indexLabel: 'Слайд 02 · Истоки',
    navShortLabel: '1935',
    title: 'Истоки и рождение (1935)',
    subtitle: 'Первая очередь столичного метрополитена',
    line: {
      number: '1',
      name: 'Сокольническая линия',
      color: '#D92B2B',
    },
    metadata: '15 мая 1935 года · 11 км пути · 13 станций',
    keyPoints: [
      '15 мая 1935 года: открытие первой Сокольнической линии.',
      '11 километров, 13 станций.',
      'Решение транспортного кризиса и символ социалистической индустриализации.',
    ],
    architecturalNote: 'Исторический рубеж · От «Сокольников» до «Парка культуры» и «Смоленской»',
    photos: [
      {
        src: s2VestibuloKomsomolskayaImg,
        alt: 'Исторический наземный павильон станции метро «Комсомольская» Сокольнической линии (1935 г.)',
        caption: 'Фото 1 — Наземный вестибюль станции «Комсомольская» первой очереди (арх. А. М. Рухлядев, В. Ф. Кринский, 1935 г.)',
      },
      {
        src: s2AperturaPrimeraLineaImg,
        alt: 'Торжественный пуск и первые пассажиры на открытии первой линии Московского метрополитена 15 мая 1935 года',
        caption: 'Фото 2 — Открытие первой линии Московского метрополитена (15 мая 1935 г.)',
      },
      {
        src: s2ManifestacionInauguracionImg,
        alt: 'Праздничная демонстрация москвичей в честь пуска первой линии метро «Сокольники» — «Парк Культуры» (1935 г.)',
        caption: 'Фото 3 — Демонстрация в честь запуска участка «Сокольники» — «Парк Культуры» (1935 г.)',
      },
    ],
    layoutVariant: 'bottom-left',
  },
  {
    id: 'stalin-ideology',
    slideNumber: 3,
    blockLabel: 'Блок 2 · История',
    indexLabel: 'Слайд 03 · Идеология',
    navShortLabel: 'Идеология',
    title: 'Сталин и идеология',
    subtitle: 'Концепция подземных дворцов советской эпохи',
    line: {
      number: 'М',
      name: 'Архитектурный манифест',
      color: '#B91C1C',
    },
    metadata: '1930-е годы · «Дворцы для рабочего класса»',
    keyPoints: [
      'Метро как идеологический проект и «дворцы для рабочего класса».',
      'Роль И. В. Сталина и руководства партии в концепции подземного искусства.',
      'Архитектура как демонстрация триумфа советской мощи.',
    ],
    architecturalNote: 'Символика пространства · Мрамор, гранит, бронза и монументальная лепнина',
    photos: [
      {
        src: s3MarmolImg,
        alt: 'Мраморная облицовка подземных дворцов Московского метрополитена',
        caption: 'Фото 1 — Благородный мрамор: концепция подземных дворцов для народа',
      },
      {
        src: s3GranitoImg,
        alt: 'Гранитные элементы отделки и монументальная основа станций',
        caption: 'Фото 2 — Гранитная прочность и монументальный размах',
      },
      {
        src: s3BronceImg,
        alt: 'Бронзовые светильники и декоративные элементы сталинской эпохи',
        caption: 'Фото 3 — Бронзовые детали и торжественное оформление',
      },
      {
        src: s3MolduraMonumentalImg,
        alt: 'Монументальная лепнина и барельефы на сводах залов метро',
        caption: 'Фото 4 — Монументальная лепнина и триумфальные своды',
      },
    ],
    layoutVariant: 'bottom-right',
  },
  {
    id: 'wartime-1941-1945',
    slideNumber: 4,
    blockLabel: 'Блок 2 · История',
    indexLabel: 'Слайд 04 · Военные годы',
    navShortLabel: '1941–1945',
    title: 'Великая Отечественная война (1941–1945)',
    subtitle: 'Подземный щит и непрерывная стройка в годы испытаний',
    line: {
      number: '2',
      name: 'Линия обороны',
      color: '#2E8B57',
    },
    metadata: '1941–1945 гг. · Бомбоубежища, штабы и госпитали',
    keyPoints: [
      '1941–1945 гг.: станции как бомбоубежища, штабы и госпитали.',
      'Рождение детей под землей во время бомбежек.',
      'Строительство продолжалось даже в годы войны (открытие станций в 1943–1944 гг.).',
    ],
    architecturalNote: 'Хроника стойкости · Новые очереди открывались в разгар войны (1943–1944)',
    photos: [
      {
        src: s4RefugioMaternidadBibliotecaImg,
        alt: 'Станция метро в годы войны: бомбоубежище, роддом и библиотека для москвичей',
        caption: 'Фото 1 — Станция метро как бомбоубежище, роддом и библиотека (1941–1945)',
      },
      {
        src: s4RefugioBombardeosImg,
        alt: 'Москвичи укрываются от ночных авианалётов на платформе и путях метро',
        caption: 'Фото 2 — Жители столицы укрываются от бомбёжек на станции метро',
      },
      {
        src: s4BunkerStalinImg,
        alt: 'Подземный командный пункт и бункер Сталина в системе Московского метрополитена',
        caption: 'Фото 3 — Подземный командный пункт и штаб обороны Москвы',
      },
    ],
    layoutVariant: 'bottom-left',
  },
  {
    id: 'postwar-triumph',
    slideNumber: 5,
    blockLabel: 'Блок 2 · История',
    indexLabel: 'Слайд 05 · Послевоенная эпоха',
    navShortLabel: 'Триумф',
    title: 'Послевоенный триумф',
    subtitle: 'Имперский масштаб сталинского ампира',
    line: {
      number: '5',
      name: 'Послевоенная архитектура',
      color: '#9A6324',
    },
    metadata: 'Конец 1940-х — 1950-е · Сталинский ампир',
    keyPoints: [
      'Победный стиль и имперский масштаб сталинского ампира.',
      'Прославление победы, труда и советской культуры в мозаиках и барельефах.',
      'Завершение строительства ключевых радиальных направлений.',
    ],
    architecturalNote: 'Вершина монументализма · Бронзовые люстры, смальта и триумфальные арки',
    photos: [
      {
        src: s5TriunfoPatriaImg,
        alt: 'Монументальное панно «Триумф победившей Родины» в стиле сталинского ампира',
        caption: 'Фото 1 — Монументальное панно «Триумф победившей Родины»',
      },
    ],
    layoutVariant: 'center-left',
  },

  // =========================================================================
  // БЛОК 3 (Архитектурные жемчужины и линии) — Слайды 6–15
  // =========================================================================
  {
    id: 'komsomolskaya',
    slideNumber: 6,
    blockLabel: 'Блок 3 · Архитектурные жемчужины и линии',
    indexLabel: 'Слайд 06 · Кольцевая линия',
    navShortLabel: 'Комсомольская',
    title: '«Комсомольская»',
    subtitle: 'Барочное великолепие и парадные ворота трёх вокзалов',
    line: {
      number: '5',
      name: 'Кольцевая линия',
      color: '#9A6324',
    },
    metadata: 'Открыта в 1952 г. · Арх. А. В. Щусев · Мозаики П. Корина',
    keyPoints: [
      'Кольцевая линия, открыта в 1952 году (архитектор А. В. Щусев).',
      'Барочное великолепие, мозаики из смальты работы Павла Корина.',
      'Ворота Москвы: связь трех вокзалов (Казанский, Ярославский, Ленинградский).',
    ],
    architecturalNote: 'Художественная доминанта · Золочёные своды и 8 смальтовых панно П. Д. Корина',
    photos: [
      {
        src: s6KomsomolskayaSalaPrincipalImg,
        alt: 'Центральный зал станции «Комсомольская» Кольцевой линии с жёлтыми сводами и люстрами',
        caption: 'Фото 1 — Главный зал станции «Комсомольская» Кольцевой линии (арх. А. В. Щусев)',
      },
      {
        src: s6KomsomolskayaMosaicoBovedaImg,
        alt: 'Смальтовое мозаичное панно Павла Корина на своде станции «Комсомольская»',
        caption: 'Фото 2 — Мозаичное панно из смальты работы Павла Корина на своде станции',
      },
      {
        src: s6KomsomolskayaVestibuloExteriorImg,
        alt: 'Наземный вестибюль станции «Комсомольская» с белой колоннадой на Комсомольской площади',
        caption: 'Фото 3 — Парадный наземный вестибюль станции на площади трёх вокзалов',
      },
    ],
    layoutVariant: 'bottom-left',
  },
  {
    id: 'mayakovskaya',
    slideNumber: 7,
    blockLabel: 'Блок 3 · Архитектурные жемчужины и линии',
    indexLabel: 'Слайд 07 · Ар-деко',
    navShortLabel: 'Маяковская',
    title: '«Маяковская»',
    subtitle: 'Шедевр раннего сталинского ар-деко и стальных арок',
    line: {
      number: '2',
      name: 'Замоскворецкая линия',
      color: '#2E8B57',
    },
    metadata: 'Открыта в 1938 г. · Арх. Алексей Душкин · Мозаики А. Дейнеки',
    keyPoints: [
      'Замоскворецкая линия (1938 г.), арх. Алексей Душкин.',
      'Ранний сталинский ар-деко, арки из нержавеющей стали.',
      'Мозаики Александра Дейнеки «День советского неба», роль штаба ПВО в войну.',
    ],
    architecturalNote: 'Инженерная элегантность · Нержавеющая сталь, родонит и 34 купольных плафона',
    photos: [
      {
        src: s7MayakovskayaSalaPrincipalImg,
        alt: 'Перспектива центрального зала станции «Маяковская» с арками из нержавеющей стали',
        caption: 'Фото 1 — Центральный зал станции «Маяковская» (арх. А. Н. Душкин)',
      },
      {
        src: s7MayakovskayaMosaicoAvionesImg,
        alt: 'Мозаичный плафон Александра Дейнеки «Два самолёта» в куполе свода станции «Маяковская»',
        caption: 'Фото 2 — Мозаика Александра Дейнеки «Два самолёта» из цикла «Сутки советского неба»',
      },
      {
        src: s7MayakovskayaVestibuloBustoImg,
        alt: 'Вестибюль станции «Маяковская» со скульптурным бюстом поэта Владимира Маяковского',
        caption: 'Фото 3 — Вестибюль станции «Маяковская» с бюстом поэта',
      },
    ],
    layoutVariant: 'center-left',
  },
  {
    id: 'ploshchad-revolyutsii',
    slideNumber: 8,
    blockLabel: 'Блок 3 · Архитектурные жемчужины и линии',
    indexLabel: 'Слайд 08 · Живая бронза',
    navShortLabel: 'Пл. Революции',
    title: '«Площадь Революции»',
    subtitle: 'Бронзовая скульптурная галерея в сердце столицы',
    line: {
      number: '3',
      name: 'Арбатско-Покровская линия',
      color: '#1D5FA7',
    },
    metadata: 'Открыта в 1938 г. · Арх. А. Душкин · Скульптор М. Манизер',
    keyPoints: [
      'Арбатско-Покровская линия (1938 г.), арх. Алексей Душкин.',
      '76 бронзовых скульптур Матвея Манизера (солдаты, матросы, рабочие).',
      'Популярная студенческая примета: потереть нос собаке пограничника на счастье.',
    ],
    architecturalNote: 'Скульптурный ансамбль · 76 бронзовых образов в арочных проёмах из красного мрамора',
    photos: [
      {
        src: s8PloshchadRevolyutsiiSalaCentralImg,
        alt: 'Перспектива центрального зала станции «Площадь Революции» с арочными проходами из красного мрамора',
        caption: 'Фото 1 — Перспектива центрального зала станции «Площадь Революции» (арх. А. Н. Душкин)',
      },
      {
        src: s8PloshchadRevolyutsiiGuardiaPerroImg,
        alt: 'Бронзовая скульптура пограничника с собакой скульптора Матвея Манизера',
        caption: 'Фото 2 — Знаменитая бронзовая скульптура «Пограничник с собакой» (скульптор М. Г. Манизер)',
      },
      {
        src: s8PloshchadRevolyutsiiHocicoPerroImg,
        alt: 'Натёртый до золотого блеска нос собаки пограничника — студенческая примета на удачу',
        caption: 'Фото 3 — Натёртый до блеска нос собаки — легендарная московская примета на счастье',
      },
      {
        src: s8PloshchadRevolyutsiiGaleriaEsculturasImg,
        alt: 'Бронзовые фигуры революционных матросов и рабочих в арочных нишах пилонов',
        caption: 'Фото 4 — Бронзовые образы матросов, солдат и тружеников в пилонах станции',
      },
      {
        src: s8PloshchadRevolyutsiiEsculturasHistoriaImg,
        alt: 'Архивная летопись создания 76 бронзовых скульптур станции «Площадь Революции»',
        caption: 'Фото 5 — Историческая летопись бронзового ансамбля Матвея Манизера',
      },
    ],
    layoutVariant: 'center-right',
  },
  {
    id: 'elektrozavodskaya',
    slideNumber: 9,
    blockLabel: 'Блок 3 · Архитектурные жемчужины и линии',
    indexLabel: 'Слайд 09 · Созвездие света',
    navShortLabel: 'Электрозаводская',
    title: '«Электрозаводская»',
    subtitle: 'Гимн советским инженерам и сияющий свод из 319 кессонов',
    line: {
      number: '3',
      name: 'Арбатско-Покровская линия',
      color: '#1D5FA7',
    },
    metadata: 'Открыта в 1944 г. · 319 круглых кессонов · Тематические барельефы',
    keyPoints: [
      'Арбатско-Покровская линия (1944 г.).',
      'Уникальный потолок: 319 круглых кессонов с лампами (в честь лампового завода).',
      'Тематические барельефы, прославляющие трудовой подвиг советских инженеров.',
    ],
    architecturalNote: 'Архитектурный свет · Шесть рядов светящихся круглых плафонов на своде',
    photos: [
      {
        src: s9ElektrozavodskayaSalaPlafonesImg,
        alt: 'Свод станции «Электрозаводская» с 319 круглыми кессонами со встроенными лампами',
        caption: 'Фото 1 — Свод с 319 круглыми светящимися кессонами на станции «Электрозаводская»',
      },
      {
        src: s9ElektrozavodskayaPlaca1944Img,
        alt: 'Мемориальная мраморная доска: «Станция сооружена в дни Отечественной войны 1943–1944»',
        caption: 'Фото 2 — Памятная плита: «Станция сооружена в дни Отечественной войны 1943–1944 гг.»',
      },
      {
        src: s9ElektrozavodskayaVestibuloImg,
        alt: 'Наземный вестибюль станции «Электрозаводская» с монументальным барельефом',
        caption: 'Фото 3 — Архитектурный ансамбль наземного вестибюля «Электрозаводской»',
      },
      {
        src: s9ElektrozavodskayaSello1947Img,
        alt: 'Почтовая марка СССР 1947 года с изображением станции метро «Электрозаводская»',
        caption: 'Фото 4 — Почтовая марка СССР 1947 года, посвящённая «Электрозаводской»',
      },
    ],
    layoutVariant: 'bottom-left',
  },
  {
    id: 'vdnkh',
    slideNumber: 10,
    blockLabel: 'Блок 3 · Архитектурные жемчужины и линии',
    indexLabel: 'Слайд 10 · Выставка достижений',
    navShortLabel: 'ВДНХ',
    title: '«ВДНХ»',
    subtitle: 'Светлые залы у главных ворот выставки страны',
    line: {
      number: '6',
      name: 'Калужско-Рижская линия',
      color: '#F58220',
    },
    metadata: 'Открыта в 1958 г. · Глубина 53,5 м · Светлый мрамор и люстры',
    keyPoints: [
      'Калужско-Рижская линия (1958 г.).',
      'Название в честь главной выставки страны («Выставка достижений народного хозяйства»).',
      'Светлые тона, торжественные люстры и мотивы сельскохозяйственного изобилия.',
    ],
    architecturalNote: 'Переходная эпоха · От торжественного классицизма к лаконичным светлым формам',
    photos: [
      {
        src: s10VdnkhSalaPrincipalImg,
        alt: 'Центральный зал станции метро «ВДНХ» со светлыми пилонами и торжественными люстрами',
        caption: 'Фото 1 — Центральный зал станции «ВДНХ» со светлым мрамором и люстрами (1958 г.)',
      },
      {
        src: s10VdnkhPerspectivaAndenImg,
        alt: 'Перспектива платформы и арочных проходов станции метро «ВДНХ»',
        caption: 'Фото 2 — Перспектива платформенного зала станции метро «ВДНХ»',
      },
      {
        src: s10VdnkhMonumentoEspacioImg,
        alt: 'Титановый монумент «Покорителям космоса» у станции метро «ВДНХ»',
        caption: 'Фото 3 — Монумент «Покорителям космоса» на аллее Космонавтов у выхода из метро',
      },
      {
        src: s10VdnkhFuenteAmistadPueblosImg,
        alt: 'Знаменитый золочёный фонтан «Дружба народов» на главной аллее ВДНХ',
        caption: 'Фото 4 — Фонтан «Дружба народов» на ВДНХ — символ эпохи изобилия',
      },
      {
        src: s10VdnkhPabellonRusiaImg,
        alt: 'Исторический павильон «Центральный» (РСФСР) на территории ВДНХ',
        caption: 'Фото 5 — Главный павильон ВДНХ с золотым шпилем и колоннадой',
      },
      {
        src: s10VdnkhPabellonUcraniaImg,
        alt: 'Павильон «Украина» (Земледелие) на ВДНХ с богатым керамическим декором',
        caption: 'Фото 6 — Павильон с майоликовым орнаментом в архитектурном ансамбле ВДНХ',
      },
      {
        src: s10VdnkhDetallesArquitecturaImg,
        alt: 'Скульптурные группы и архитектурный декор выставочных павильонов ВДНХ',
        caption: 'Фото 7 — Архитектурные детали и скульптурное оформление выставки ВДНХ',
      },
    ],
    layoutVariant: 'bottom-right',
  },
  {
    id: 'marksistskaya',
    slideNumber: 11,
    blockLabel: 'Блок 3 · Архитектурные жемчужины и линии',
    indexLabel: 'Слайд 11 · Диалектика света',
    navShortLabel: 'Марксистская',
    title: '«Марксистская»',
    subtitle: 'Красный мрамор и спиральные светильники диалектики',
    line: {
      number: '8',
      name: 'Калининская линия',
      color: '#FFCD1C',
      textColor: '#0A0A0B',
    },
    metadata: 'Открыта в 1979 г. · Красный мрамор «буровщина» · Спирали света',
    keyPoints: [
      'Калининская линия (1979 г.).',
      'Красный мрамор и строгая идеологическая атмосфера.',
      'Главная изюминка: светильники в виде спиралей, символизирующие диалектическое развитие по Марксу.',
    ],
    architecturalNote: 'Философский образ · Спиральные люстры и глубокий багровый мрамор колонн',
    photos: [
      {
        src: s11MarksistskayaSalaColumnasRojasImg,
        alt: 'Центральный зал станции «Марксистская» с колоннами из тёмно-красного мрамора «буровщина»',
        caption: 'Фото 1 — Зал станции «Марксистская» с красным байкальским мрамором (1979 г.)',
      },
      {
        src: s11MarksistskayaLamparaEspiralImg,
        alt: 'Светильники на своде в форме светящихся спиралей, символизирующих спираль диалектики',
        caption: 'Фото 2 — Потолочные светильники в виде спиралей — символ диалектического развития',
      },
      {
        src: s11MarksistskayaOrnamentoEntradaImg,
        alt: 'Флорентийская мозаика и тематический орнамент в вестибюле станции «Марксистская»',
        caption: 'Фото 3 — Флорентийская мозаика и орнаментальное панно входного павильона',
      },
      {
        src: s11MarksistskayaOrnamentoTransitoImg,
        alt: 'Художественное оформление и мозаичные элементы пересадочного узла станции',
        caption: 'Фото 4 — Мозаичное панно в переходе между линиями узла «Марксистская»',
      },
    ],
    layoutVariant: 'center-left',
  },
  {
    id: 'novoslobodskaya',
    slideNumber: 12,
    blockLabel: 'Блок 3 · Архитектурные жемчужины и линии',
    indexLabel: 'Слайд 12 · Подземный сад',
    navShortLabel: 'Новослободская',
    title: '«Новослободская»',
    subtitle: 'Сказочные витражи и сияние уральских самоцветов',
    line: {
      number: '5',
      name: 'Кольцевая линия',
      color: '#9A6324',
    },
    metadata: 'Открыта в 1952 г. · Художник П. Д. Корин · 32 светящихся витража',
    keyPoints: [
      'Кольцевая линия (1952 г.), работы художника А. М. Корина.',
      'Знаменитые витражи с растительными узорами и «сказочными» звездами.',
      'Мраморные пилоны и атмосфера подземного волшебного сада.',
    ],
    architecturalNote: 'Витражное искусство · Цветное стекло в латунной оправе с внутренней подсветкой',
    photos: [
      {
        src: s12NovoslobodskayaVitralesSalaImg,
        alt: 'Подземный зал станции «Новослободская» со светящимися витражами в пилонах',
        caption: 'Фото 1 — Зал станции «Новослободская» с 32 подсвеченными витражами (арх. А. Н. Душкин)',
      },
      {
        src: s12NovoslobodskayaAndenPilonesImg,
        alt: 'Перспектива платформы и витражей с растительными узорами из цветного стекла',
        caption: 'Фото 2 — Перспектива мраморных пилонов с витражными панно работы П. Д. Корина',
      },
      {
        src: s12NovoslobodskayaVestibuloAccesoImg,
        alt: 'Наземный павильон и вестибюль станции метро «Новослободская»',
        caption: 'Фото 3 — Наземный вестибюль станции «Новослободская» Кольцевой линии',
      },
    ],
    layoutVariant: 'bottom-left',
  },
  {
    id: 'pushkinskaya',
    slideNumber: 13,
    blockLabel: 'Блок 3 · Архитектурные жемчужины и линии',
    indexLabel: 'Слайд 13 · Поэзия в камне',
    navShortLabel: 'Пушкинская',
    title: '«Пушкинская»',
    subtitle: 'Беломраморная дань великому русскому поэту',
    line: {
      number: '7',
      name: 'Таганско-Краснопресненская линия',
      color: '#8E479B',
    },
    metadata: 'Открыта в 1975 г. · Глубина 51 м · Белый мрамор и медальоны',
    keyPoints: [
      'Таганско-Краснопресненская линия (1975 г.).',
      'Литературная тема, посвященная великому русскому поэту Александру Пушкину.',
      'Белый мрамор, барельефы и портретные медальоны.',
    ],
    architecturalNote: 'Литературный зал · Колонны из белого коелгинского мрамора и светильники-бра XIX века',
    photos: [
      {
        src: s13PushkinskayaSalaMarmolBlancoImg,
        alt: 'Центральный зал станции «Пушкинская» с колоннами из белого мрамора и люстрами XIX века',
        caption: 'Фото 1 — Беломраморный центральный зал станции «Пушкинская» (1975 г.)',
      },
      {
        src: s13PushkinskayaMedallonPoemaImg,
        alt: 'Медный чеканный медальон со стихами А. С. Пушкина о Москве',
        caption: 'Фото 2 — Медальон со строками А. С. Пушкина: «Москва... как много в этом звуке»',
      },
    ],
    layoutVariant: 'center-right',
  },
  {
    id: 'leninsky-prospekt',
    slideNumber: 14,
    blockLabel: 'Блок 3 · Архитектурные жемчужины и линии',
    indexLabel: 'Слайд 14 · Советский модернизм',
    navShortLabel: 'Ленинский пр.',
    title: '«Ленинский проспект»',
    subtitle: 'Лаконичная геометрия 1960-х и дух космической эры',
    line: {
      number: '6',
      name: 'Калужско-Рижская линия',
      color: '#F58220',
    },
    metadata: 'Открыта в 1962 г. · Советский модернизм · Космическая эстетика',
    keyPoints: [
      'Калужско-Рижская линия (1962 г.).',
      'Архитектура советского модернизма 1960-х годов (простота форм, функциональность).',
      'Витражи и лаконичный декор, отражающий космическую эру.',
    ],
    architecturalNote: 'Модернизм оттепели · Стремительные сужающиеся колонны и минимум излишеств',
    photos: [
      {
        src: s14LeninskyProspektAndenModernistaImg,
        alt: 'Платформенный зал станции «Ленинский проспект» с сужающимися кверху колоннами',
        caption: 'Фото 1 — Советский модернизм 1960-х: стремительные колонны «Ленинского проспекта» (1962 г.)',
      },
      {
        src: s14LeninskyProspektVestibuloImg,
        alt: 'Остеклённый наземный вестибюль станции метро «Ленинский проспект»',
        caption: 'Фото 2 — Наземный стеклянный вестибюль станции «Ленинский проспект»',
      },
      {
        src: s14LeninskyProspektSello1965Img,
        alt: 'Почтовая марка СССР 1965 года с изображением станции «Ленинский проспект»',
        caption: 'Фото 3 — Почтовая марка СССР 1965 года, посвящённая советскому модернизму в метро',
      },
    ],
    layoutVariant: 'bottom-left',
  },
  {
    id: 'big-circle-line',
    slideNumber: 15,
    blockLabel: 'Блок 3 · Архитектурные жемчужины и линии',
    indexLabel: 'Слайд 15 · Метро XXI века',
    navShortLabel: 'БКЛ',
    title: 'Большая кольцевая линия (БКЛ)',
    subtitle: 'Новое сердце и крупнейшее метрокольцо планеты',
    line: {
      number: '11',
      name: 'Большая кольцевая линия',
      color: '#6FC2C2',
      textColor: '#0A0A0B',
    },
    metadata: 'Замкнута в 2023 г. · 70 км · 31 станция · Крупнейшая в мире',
    keyPoints: [
      'Крупнейший в мире кольцевой метропроект (замкнута в 2023 г.).',
      'Ультрасовременный дизайн, стеклянные купола, интерактивные элементы.',
      'Связующее звено современной Москвы XXI века.',
    ],
    architecturalNote: 'Инженерный триумф XXI века · Стеклянные купола, стальные рёбра и медиафасады',
    photos: [
      {
        src: s15BklSavyolovskayaImg,
        alt: 'Станция БКЛ «Савёловская» с открытыми чугунными тюбингами и неоновой подсветкой',
        caption: 'Фото 1 — Станция «Савёловская» БКЛ: эстетика открытых чугунных тюбингов',
      },
      {
        src: s15BklMapaAnilloImg,
        alt: 'Схема Большой кольцевой линии (Линия №11) протяжённостью 70 км на карте Москвы',
        caption: 'Фото 2 — Схема Большой кольцевой линии — крупнейшего 70-километрового кольца в мире',
      },
      {
        src: s15BklCskaImg,
        alt: 'Станция БКЛ «ЦСКА» со скульптурами спортсменов и парящими сводами',
        caption: 'Фото 3 — Станция «ЦСКА» БКЛ со скульптурами армейских спортсменов',
      },
      {
        src: s15BklAviamotornayaImg,
        alt: 'Авиационная графика и геометрические мотивы станции БКЛ «Авиамоторная»',
        caption: 'Фото 4 — Станция «Авиамоторная» БКЛ: динамичная геометрия авиационных форм',
      },
      {
        src: s15BklMichurinskyProspektImg,
        alt: 'Станция БКЛ «Мичуринский проспект» с мотивами традиционного китайского орнамента',
        caption: 'Фото 5 — Станция «Мичуринский проспект» БКЛ: алые колонны и восточные орнаменты',
      },
      {
        src: s15BklVorontsovskayaImg,
        alt: 'Потолок станции БКЛ «Воронцовская» со световыми каплями, имитирующими Млечный Путь',
        caption: 'Фото 6 — Станция «Воронцовская» БКЛ: параметрический потолок с эффектом Млечного Пути',
      },
      {
        src: s15BklAminyevskayaImg,
        alt: 'Волнообразный металлический подвесной потолок на станции БКЛ «Аминьевская»',
        caption: 'Фото 7 — Станция «Аминьевская» БКЛ с волнообразным металлическим сводом',
      },
      {
        src: s15BklMnyovnikiImg,
        alt: 'Авангардная красная арка-портал на станции БКЛ «Мнёвники»',
        caption: 'Фото 8 — Станция «Мнёвники» БКЛ: авангардная красная арка в духе конструктивизма',
      },
      {
        src: s15BklNarodnoeOpolchenieImg,
        alt: 'Панно защитников Москвы на станции БКЛ «Народное Ополчение»',
        caption: 'Фото 9 — Станция «Народное Ополчение» БКЛ: графические панно памяти защитников столицы',
      },
      {
        src: s15BklPetrovskyParkImg,
        alt: 'Зелёный мрамор и силуэты Путевого дворца на станции БКЛ «Петровский парк»',
        caption: 'Фото 10 — Станция «Петровский парк» БКЛ со стилизованными силуэтами дворца',
      },
      {
        src: s15BklKhoroshevskayaImg,
        alt: 'Световые линии и супрематическая графика станции БКЛ «Хорошёвская»',
        caption: 'Фото 11 — Станция «Хорошёвская» БКЛ: мотивы русского супрематизма и конструктивизма',
      },
      {
        src: s15BklTekstilshchikiTrenImg,
        alt: 'Поезд нового поколения «Москва-2020» прибывает на станцию БКЛ «Текстильщики»',
        caption: 'Фото 12 — Станция «Текстильщики» БКЛ с прибывающим составом «Москва-2020»',
      },
    ],
    layoutVariant: 'bottom-right',
  },
];

// =========================================================================
// БЛОК 4 (Сравнительные таблицы) — Слайды 16–19 (Остаются без изменений)
// =========================================================================
export interface ComparisonRow {
  category: string;
  madrid: string;
  moscow: string;
  advantage: 'madrid' | 'moscow' | 'neutral';
  advantageLabel: string;
}

export interface ComparisonHighlight {
  value: string;
  description: string;
  tone: 'gold' | 'light' | 'blue';
}

export interface ComparisonSlide {
  id: string;
  indexLabel: string;
  title: string;
  subtitle: string;
  rows: ComparisonRow[];
  highlights: ComparisonHighlight[];
  photos?: MetroPhoto[];
}

export const COMPARISON_SLIDES: ComparisonSlide[] = [
  {
    id: 'comparison-scale',
    indexLabel: 'Блок 4 · Сравнение · Слайд 1 / 4',
    title: 'Масштаб сети, история и подвижной состав',
    subtitle: 'Сопоставление Мадридского и Московского метрополитенов по базовым параметрам',
    rows: [
      {
        category: 'Год открытия',
        madrid: '1919',
        moscow: '1935',
        advantage: 'madrid',
        advantageLabel: 'Мадрид',
      },
      {
        category: 'Линии метро',
        madrid: '12 + Ramal',
        moscow: '16 (с Троицкой; без учёта МЦК)',
        advantage: 'moscow',
        advantageLabel: 'Москва',
      },
      {
        category: 'Протяженность сети',
        madrid: '294 км',
        moscow: '> 560 км',
        advantage: 'moscow',
        advantageLabel: 'Москва',
      },
      {
        category: 'Количество станций',
        madrid: '302',
        moscow: '≈ 275 метро / > 300 с МЦК',
        advantage: 'neutral',
        advantageLabel: 'Паритет',
      },
      {
        category: 'Подвижной состав (вагоны)',
        madrid: '2 083 (2024)',
        moscow: '> 6 500 (~80% новые)',
        advantage: 'moscow',
        advantageLabel: 'Москва',
      },
    ],
    highlights: [
      {
        value: '1919',
        description: 'Мадридский метрополитен открыт на 16 лет раньше Московского',
        tone: 'blue',
      },
      {
        value: '> 560 км',
        description: 'Протяжённость линий в Москве почти вдвое больше мадридской (294 км)',
        tone: 'gold',
      },
      {
        value: '> 6 500 вагонов',
        description: 'Подвижной состав Москвы более чем втрое крупнее (2 083 в Мадриде)',
        tone: 'light',
      },
    ],
  },
  {
    id: 'comparison-dynamics',
    indexLabel: 'Блок 4 · Сравнение · Слайд 2 / 4',
    title: 'Пассажиропоток, скорость и интервалы',
    subtitle: 'Интенсивность перевозок, динамика движения поездов и график работы',
    rows: [
      {
        category: 'Поездок в год',
        madrid: '736,9 млн (2025)',
        moscow: '> 2,4 млрд',
        advantage: 'moscow',
        advantageLabel: 'Москва',
      },
      {
        category: 'Поездок в день',
        madrid: '≈ 2,0–2,5 млн',
        moscow: '> 8 млн',
        advantage: 'moscow',
        advantageLabel: 'Москва',
      },
      {
        category: 'Средняя скорость',
        madrid: '28,1 км/ч',
        moscow: '41 км/ч',
        advantage: 'moscow',
        advantageLabel: 'Москва',
      },
      {
        category: 'Минимальный интервал',
        madrid: '2–3 мин',
        moscow: '90 секунд',
        advantage: 'moscow',
        advantageLabel: 'Москва',
      },
      {
        category: 'Режим работы',
        madrid: '06:00–01:30 (19,5 ч)',
        moscow: '05:30–01:00 (19,5 ч)',
        advantage: 'neutral',
        advantageLabel: 'Паритет (19,5 ч)',
      },
    ],
    highlights: [
      {
        value: '> 8 млн/день',
        description: 'Суточный пассажиропоток Москвы более чем в 3 раза выше мадридского',
        tone: 'gold',
      },
      {
        value: '41 км/ч',
        description: 'Средняя эксплуатационная скорость на 46% выше, чем в Мадриде (28,1 км/ч)',
        tone: 'light',
      },
      {
        value: '90 секунд',
        description: 'Минимальный интервал поездов в час пик против 2–3 минут в Мадриде',
        tone: 'gold',
      },
    ],
  },
  {
    id: 'comparison-service',
    indexLabel: 'Блок 4 · Сравнение · Слайд 3 / 4',
    title: 'Технологии, оплата и стоимость проезда',
    subtitle: 'Цифровые сервисы в пути, способы оплаты и тарифная система двух столиц',
    rows: [
      {
        category: 'Разовый билет',
        madrid: '1,50–2,00 €',
        moscow: '75 ₽ («Тройка») / 90 ₽ (касса)',
        advantage: 'moscow',
        advantageLabel: 'Москва',
      },
      {
        category: 'Проездной на 30 дней',
        madrid: '32,70 € (зона A)',
        moscow: '3 460 ₽',
        advantage: 'neutral',
        advantageLabel: 'Паритет по курсу',
      },
      {
        category: 'Бесконтактная оплата (NFC)',
        madrid: 'Да (с 2026 года)',
        moscow: 'Да',
        advantage: 'moscow',
        advantageLabel: 'Москва (раньше)',
      },
      {
        category: 'Биометрическая оплата',
        madrid: 'Нет',
        moscow: 'Да (на всех станциях)',
        advantage: 'moscow',
        advantageLabel: 'Москва',
      },
      {
        category: 'Бесплатный Wi-Fi в вагонах',
        madrid: 'Нет (покрытие 4G/5G и зоны)',
        moscow: 'Да (100% вагонов на всех линиях)',
        advantage: 'moscow',
        advantageLabel: 'Москва',
      },
      {
        category: 'Тарифные зоны метро',
        madrid: '6 зон (A, B1, B2, B3, C1, C2)',
        moscow: '2 зоны (Центральная и Пригород)',
        advantage: 'moscow',
        advantageLabel: 'Москва (меньше зон)',
      },
    ],
    highlights: [
      {
        value: '75 ₽ (~0,75 €)',
        description: 'Стоимость разовой поездки по карте «Тройка» против 1,50–2,00 € в Мадриде',
        tone: 'gold',
      },
      {
        value: '100% вагонов',
        description: 'Бесплатный Wi-Fi и биометрическая оплата работают на всех линиях Москвы',
        tone: 'light',
      },
      {
        value: '32,70 € / 30 дн.',
        description: 'Месячный абонемент зоны A в Мадриде против 3 460 ₽ в Москве',
        tone: 'blue',
      },
    ],
    photos: [
      {
        src: trojka,
        alt: 'Транспортная карта «Тройка» — универсальное средство оплаты в Московском метрополитене',
        caption: 'Карта «Тройка» · Единый электронный проездной московского транспорта',
      },
    ],
  },
  {
    id: 'comparison-urban',
    indexLabel: 'Блок 4 · Сравнение · Слайд 4 / 4',
    title: 'Глубина залегания, геометрия и городская интеграция',
    subtitle: 'Объективные инженерные параметры, кольцевые контуры и стыковка с железной дорогой',
    rows: [
      {
        category: 'Самая глубокая станция',
        madrid: '«Куатро-Каминос» (49 м)',
        moscow: '«Парк Победы» (84 м)',
        advantage: 'moscow',
        advantageLabel: 'Москва (84 м)',
      },
      {
        category: 'Крупнейшая кольцевая линия',
        madrid: 'Линия 12 (40,7 км) / Линия 6 (23,5 км)',
        moscow: 'Большая кольцевая линия (70 км)',
        advantage: 'moscow',
        advantageLabel: 'Москва (70 км)',
      },
      {
        category: 'Прямая линия метро в аэропорт',
        madrid: 'Линия 8 (Барахас, 4 терминала)',
        moscow: 'Линия 8А (Внуково)',
        advantage: 'neutral',
        advantageLabel: 'Паритет',
      },
      {
        category: 'Пригородные и городские ж/д контуры',
        madrid: '9 линий Cercanías + 3 линии Metro Ligero',
        moscow: 'МЦК (54 км, 31 ст.) + 4 диаметра МЦД',
        advantage: 'neutral',
        advantageLabel: 'Разные форматы',
      },
      {
        category: 'Ширина рельсовой колеи',
        madrid: '1 445 мм',
        moscow: '1 520 мм',
        advantage: 'neutral',
        advantageLabel: 'Разные стандарты',
      },
    ],
    highlights: [
      {
        value: '84 м vs 49 м',
        description: 'Самые глубокие станции: «Парк Победы» в Москве против «Куатро-Каминос» в Мадриде',
        tone: 'gold',
      },
      {
        value: '70 км БКЛ',
        description: 'Самое длинное метрокольцо в мире против 40,7 км у мадридской Линии 12',
        tone: 'light',
      },
      {
        value: '1 520 мм vs 1 445 мм',
        description: 'Ширина колеи: более габаритные поезда в Москве против мадридского стандарта',
        tone: 'blue',
      },
    ],
  },
];

// =========================================================================
// БЛОК 5 (Гранд-финал) — Слайд 20 («Кольцевая линия») и Слайд 21 (Финал)
// =========================================================================
export interface KoltsevayaSlideData {
  id: string;
  slideNumber: number;
  blockLabel: string;
  indexLabel: string;
  title: string;
  subtitle: string;
  line: MetroLineBadge;
  metadata: string;
  keyPoints: string[];
  funFact: {
    label: string;
    text: string;
  };
  architecturalNote: string;
  photos: MetroPhoto[];
}

export const KOLTSEVAYA_SLIDE: KoltsevayaSlideData = {
  id: 'koltsevaya-acoustics',
  slideNumber: 20,
  blockLabel: 'Блок 5 · Гранд-финал',
  indexLabel: 'Слайд 20 · Сердце системы',
  title: '«Кольцевая линия»',
  subtitle: 'Оперативный центр, соединяющий все ветки столицы',
  line: {
    number: '5',
    name: 'Кольцевая линия',
    color: '#9A6324',
  },
  metadata: 'Линия 5 · 19,3 км · 12 станций · Замкнута в 1954 г.',
  keyPoints: [
    'Кольцевая линия (линия 5): «сердце» транспортной системы Москвы.',
    'Легенда о чашке кофе Сталина и коричневом следе на карте.',
    'Историческое значение кольца, объединяющего все радиальные направления.',
  ],
  funFact: {
    label: 'Интересный факт · Голос направления',
    text: 'При движении поездов по часовой стрелке станции объявляет мужской голос, а против часовой стрелки — женский, что помогает пассажирам легко ориентироваться в направлении движения.',
  },
  architecturalNote: 'Исторический контур · Коричневый цвет на схеме и связь всех железнодорожных вокзалов',
  photos: [
    {
      src: s20KoltsevayaKomsomolskayaImg,
      alt: 'Барочный центральный зал станции «Комсомольская» Кольцевой линии',
      caption: 'Фото 1 — Станция «Комсомольская» — парадные ворота Кольцевой линии',
    },
    {
      src: s20KoltsevayaMapaAnilloImg,
      alt: 'Коричневое кольцо линии №5 на карте Московского метрополитена',
      caption: 'Фото 2 — Коричневый контур Кольцевой линии (Линия №5) на карте Москвы',
    },
    {
      src: s20KoltsevayaBelorusskayaImg,
      alt: 'Беломраморные пилоны и мозаичный потолок станции «Белорусская» Кольцевой линии',
      caption: 'Фото 3 — Станция «Белорусская» Кольцевой линии с мозаиками белорусских орнаментов',
    },
    {
      src: s20KoltsevayaTaganskayaImg,
      alt: 'Майоликовые барельефы советских воинов на станции «Таганская» Кольцевой линии',
      caption: 'Фото 4 — Станция «Таганская» Кольцевой линии: майоликовые панно и синие пилоны',
    },
    {
      src: s20KoltsevayaProspektMiraImg,
      alt: 'Барельефы на тему сельского хозяйства и золочёные люстры на станции «Проспект Мира»',
      caption: 'Фото 5 — Станция «Проспект Мира» Кольцевой линии: барельефы изобилия и золочёный декор',
    },
    {
      src: s20KoltsevayaParkKulturyImg,
      alt: 'Барельефы отдыхающей молодёжи на станции «Парк культуры» Кольцевой линии',
      caption: 'Фото 6 — Станция «Парк культуры» Кольцевой линии: барельефы спорта и отдыха',
    },
  ],
};

// Keep legacy export alias for any schematic/backdrop compatibility
export const KOLTSEVAYA_MEDIA = {
  image: s20KoltsevayaKomsomolskayaImg,
  alt: KOLTSEVAYA_SLIDE.photos[0].alt,
  caption: KOLTSEVAYA_SLIDE.photos[0].caption,
};

export const FINALE_DATA = {
  id: 'grand-finale',
  slideNumber: 21,
  kicker: 'Блок 5 · Гранд-финал · 1935 — 2026',
  title: 'Спасибо за внимание',
  subtitle: 'Московский метрополитен — подземная летопись эпох, искусства и инженерной мысли',
  tributeMetrics: [
    {
      value: '15 мая 1935',
      label: 'Открытие первой линии длиной 11 км и 13 станций',
    },
    {
      value: '> 560 км',
      label: 'Современная протяжённость линий и крупнейшее в мире кольцо БКЛ',
    },
    {
      value: '≈ 275 станций',
      label: 'Действующие подземные дворцы и архитектурное наследие столицы',
    },
  ],
  closingQuote: 'Под землёй сокрыт целый город, в котором каждая станция звучит как отдельная симфония в камне, бронзе и свете.',
};

export interface SchematicStation {
  id: string;
  name: string;
  x: number;
  y: number;
  lines: string[];
  chapterId?: string;
  year?: string;
  note: string;
  isInterchange?: boolean;
}

export interface SchematicLine {
  id: string;
  number: string;
  name: string;
  color: string;
  path: string;
  isPrimary: boolean;
}

export const SCHEMATIC_LINES: SchematicLine[] = [
  {
    id: 'line-6',
    number: '6',
    name: 'Калужско-Рижская',
    color: '#F58220',
    path: 'M 640 50 L 580 180 L 555 310 L 515 415 L 490 540 L 420 680',
    isPrimary: false,
  },
  {
    id: 'line-7',
    number: '7',
    name: 'Таганско-Краснопресненская',
    color: '#8E479B',
    path: 'M 190 120 L 290 230 L 385 280 L 485 335 L 615 445 L 770 590',
    isPrimary: false,
  },
  {
    id: 'line-9',
    number: '9',
    name: 'Серпуховско-Тимирязевская',
    color: '#999999',
    path: 'M 440 40 L 440 205 L 455 320 L 455 445 L 460 580 L 460 690',
    isPrimary: false,
  },
  {
    id: 'line-1',
    number: '1',
    name: 'Сокольническая',
    color: '#D92B2B',
    path: 'M 150 675 L 285 565 L 355 480 L 445 365 L 515 295 L 620 200 L 725 110 L 835 65',
    isPrimary: true,
  },
  {
    id: 'line-2',
    number: '2',
    name: 'Замоскворецкая',
    color: '#2E8B57',
    path: 'M 225 60 L 340 190 L 395 255 L 465 345 L 520 455 L 560 555 L 645 680',
    isPrimary: true,
  },
  {
    id: 'line-3',
    number: '3',
    name: 'Арбатско-Покровская',
    color: '#1D5FA7',
    path: 'M 65 320 L 145 415 L 290 415 L 420 355 L 485 355 L 640 355 L 790 270 L 895 190',
    isPrimary: true,
  },
  {
    id: 'line-5',
    number: '5',
    name: 'Кольцевая',
    color: '#9A6324',
    path: 'M 470 170 A 175 175 0 1 1 469.9 170 Z',
    isPrimary: true,
  },
];

export const SCHEMATIC_STATIONS: SchematicStation[] = [
  {
    id: 'sokolniki',
    name: 'Сокольники',
    x: 725,
    y: 110,
    lines: ['1'],
    chapterId: 'origins-1935',
    year: '1935',
    note: 'Конечная станция первого пускового участка (15 мая 1935 г.)',
  },
  {
    id: 'komsomolskaya',
    name: 'Комсомольская',
    x: 605,
    y: 215,
    lines: ['5', '1'],
    chapterId: 'komsomolskaya',
    year: '1952',
    note: 'Сталинское барокко, желтые своды и мозаики из смальты',
    isInterchange: true,
  },
  {
    id: 'prospekt-mira',
    name: 'Проспект Мира',
    x: 540,
    y: 182,
    lines: ['5', '6'],
    chapterId: 'vdnkh',
    note: 'Пересадочный узел Кольцевой и Калужско-Рижской линий',
    isInterchange: true,
  },
  {
    id: 'belorusskaya',
    name: 'Белорусская',
    x: 340,
    y: 205,
    lines: ['5', '2'],
    chapterId: 'novoslobodskaya',
    note: 'Северо-западный узел Кольцевой и Замоскворецкой линий',
    isInterchange: true,
  },
  {
    id: 'mayakovskaya',
    name: 'Маяковская',
    x: 395,
    y: 255,
    lines: ['2'],
    chapterId: 'mayakovskaya',
    year: '1938',
    note: 'Нержавеющая сталь, 34 мозаики А. Дейнеки, штаб ПВО в 1941 г.',
  },
  {
    id: 'teatralnaya-hub',
    name: 'Площадь Революции',
    x: 470,
    y: 350,
    lines: ['3', '1', '2'],
    chapterId: 'ploshchad-revolyutsii',
    year: '1938',
    note: '76 бронзовых скульптур Матвея Манизера',
    isInterchange: true,
  },
  {
    id: 'kurskaya',
    name: 'Курская',
    x: 643,
    y: 355,
    lines: ['5', '3'],
    chapterId: 'elektrozavodskaya',
    note: 'Восточные ворота Кольцевой линии',
    isInterchange: true,
  },
  {
    id: 'paveletskaya',
    name: 'Павелецкая',
    x: 548,
    y: 500,
    lines: ['5', '2'],
    chapterId: 'marksistskaya',
    note: 'Южный пересадочный узел Кольцевой линии',
    isInterchange: true,
  },
  {
    id: 'park-kultury',
    name: 'Парк культуры',
    x: 355,
    y: 480,
    lines: ['5', '1'],
    chapterId: 'origins-1935',
    year: '1935',
    note: 'Южная граница первой линии 1935 года (11 км от Сокольников)',
    isInterchange: true,
  },
  {
    id: 'kievskaya',
    name: 'Киевская',
    x: 295,
    y: 390,
    lines: ['5', '3'],
    chapterId: 'big-circle-line',
    note: 'Западный узел Кольцевой линии',
    isInterchange: true,
  },
  {
    id: 'krasnopresnenskaya',
    name: 'Кольцевая линия №5',
    x: 310,
    y: 270,
    lines: ['5'],
    chapterId: 'koltsevaya-acoustics',
    year: '1950–1954',
    note: '«Сердце» транспортной системы Москвы и легенда о чашке кофе Сталина',
  },
];
