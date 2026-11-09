
import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import { motion } from 'framer-motion';
import {
  Camera,
  Sun,
  Moon,
  Menu,
  X,
  ArrowUpRight,
  ArrowDown,
  Mic2,
  BookOpen,
  Newspaper,
  Heart,
  Quote,
  ExternalLink,
  Play,
  Calendar
} from 'lucide-react';
import './styles.css';

const INSTAGRAM =
  'https://www.instagram.com/yamasiawash.official/';

const PROGRAMS = [
  {
    title: 'Debate Programme 01',
    subtitle: 'A conversation with Yama Siawash',
    video: 'https://youtu.be/Ni2NFTiOe1k',
    thumbnail: 'https://img.youtube.com/vi/Ni2NFTiOe1k/hqdefault.jpg'
  },
  {
    title: 'Debate Programme 02',
    subtitle: 'Questions, discussion and public affairs',
    video: 'https://youtu.be/kGQ5viiz-xg',
    thumbnail: 'https://img.youtube.com/vi/kGQ5viiz-xg/hqdefault.jpg'
  },
  {
    title: 'Debate Programme 03',
    subtitle: 'A look back at his television work',
    video: 'https://youtu.be/5qjXjHDsui0',
    thumbnail: 'https://img.youtube.com/vi/5qjXjHDsui0/hqdefault.jpg'
  }
];

const PHOTOS = [
  '/images/yama-01.jpeg',
  '/images/yama-02.jpeg',
  '/images/yama-03.jpeg',
  '/images/yama-04.jpeg',
  '/images/yama-05.jpeg',
  '/images/yama-06.jpeg'
];

// Seven additional videos for the LEGACY section.
// YouTube thumbnails are loaded from YouTube.
// Instagram cards use the local Yama photographs.

const LEGACY_MEDIA = [
  {
    title: 'Television Memory 01',
    subtitle: 'A moment from his public life',
    type: 'YouTube Short',
    video: 'https://youtube.com/shorts/NsFKJwFWrnI?si=9dW3um_XhAWTn3lQ',
    thumbnail: 'https://img.youtube.com/vi/NsFKJwFWrnI/hqdefault.jpg'
  },
  {
    title: 'Television Memory 02',
    subtitle: 'Remembering his work and voice',
    type: 'YouTube Short',
    video: 'https://youtube.com/shorts/IfU89VX3p6Y?si=WN6UnnUsbJ0yUp6e',
    thumbnail: 'https://img.youtube.com/vi/IfU89VX3p6Y/hqdefault.jpg'
  },
  {
    title: 'Television Memory 03',
    subtitle: 'A tribute to his contribution',
    type: 'YouTube Short',
    video: 'https://youtube.com/shorts/ct53rJgMKnI?si=-khA3T-kXn5SP_pm',
    thumbnail: 'https://img.youtube.com/vi/ct53rJgMKnI/hqdefault.jpg'
  },
  {
    title: 'Instagram Memory 01',
    subtitle: 'A moment remembered',
    type: 'Instagram Reel',
    video: 'https://www.instagram.com/reel/DQyW9e5DBR7/?vrfl=aTl6b21oaGpxczV0',
    thumbnail: PHOTOS[0]
  },
  {
    title: 'Television Memory 04',
    subtitle: 'His voice remains remembered',
    type: 'YouTube Short',
    video: 'https://youtube.com/shorts/0YxXneUlhuA?si=pjn7QaqrRMHBuAxJ',
    thumbnail: 'https://img.youtube.com/vi/0YxXneUlhuA/hqdefault.jpg'
  },
  {
    title: 'Instagram Memory 02',
    subtitle: 'A tribute through photographs',
    type: 'Instagram Reel',
    video: 'https://www.instagram.com/reel/DfbroHpMl6G/?rpxt=OWR0aWR1b3Vzam5l',
    thumbnail: PHOTOS[1]
  },
  {
    title: 'Television Memory 05',
    subtitle: 'Remembering a remarkable journalist',
    type: 'YouTube Short',
    video: 'https://youtube.com/shorts/QkXy5RarqVk?si=-6j6rLq3qgxBw_dS',
    thumbnail: 'https://img.youtube.com/vi/QkXy5RarqVk/hqdefault.jpg'
  }
];

const copy = {
  en: {
    nav: ['Home', 'About', 'Journey', 'Journalism', 'Legacy', 'Gallery'],
    eyebrow: 'A DIGITAL TRIBUTE',
    headline: 'A voice that\nlives on.',
    intro:
      'Remembering Yama Siawash — Afghan journalist, presenter and a voice devoted to asking difficult questions.',
    explore: 'Explore his story',
    poem: 'His Relentless Efforts',

    aboutTag: 'THE PERSON BEHIND THE VOICE',
    aboutTitle: 'A life shaped by words, curiosity and courage.',
    aboutText:
      'Yama Siawash was an Afghan journalist, television presenter, writer and lyricist. Through his work in the media, he became known to audiences for his thoughtful presence and direct questions. This website is a small digital space to remember his work and the importance of independent voices.',
    note:
      'These photographs document his public life and work. Photographs should be used with appropriate permission and attribution.',
    photosTitle: 'Moments remembered',
    photosSubtitle: 'Photographs from his public life',

    journeyTag: 'A JOURNEY REMEMBERED',
    journeyTitle: 'A timeline of his public life',
    milestones: [
      [
        '1984',
        'Born in Afghanistan',
        'Biographical sources report that Yama Siawash was born in Kohistan district, Kapisa province, in 1984.'
      ],
      [
        '2010',
        'Joined TOLOnews',
        'He began working with TOLOnews and became known to viewers through television journalism.'
      ],
      [
        '2015',
        'A significant chapter',
        'His work as a presenter at TOLOnews came to an end in 2015.'
      ],
      [
        '2020',
        'Remembered by the nation',
        'Yama Siawash was killed in Kabul on 7 November 2020. His work and contribution to journalism continue to be remembered.'
      ]
    ],

    mediaTag: 'THE WORK',
    mediaTitle: 'Journalism with a public purpose',
    mediaText:
      'As a presenter on the programme Farakhabar, Siawash spoke with guests and questioned public officials about issues affecting Afghanistan.',
    cards: [
      ['Television', 'A familiar presenter and interviewer.'],
      ['Writing', 'A creative voice beyond the newsroom.'],
      ['Public conversation', 'A commitment to asking questions that matter.']
    ],

    legacyTag: 'BEYOND THE HEADLINES',
    legacyTitle: 'The importance of a free voice',
    legacyText:
      'Remembering a journalist also means remembering the value of truth, open discussion and the right to ask questions. May his story encourage thoughtful dialogue and respect for those who report the news.',
    quote:
      'A journalist’s questions can open a space for a society to think.',
    quoteBy: 'A tribute written in his memory',

    legacyMediaTitle: 'His voice, his work, his legacy',
    legacyMediaText:
      'Explore these selected videos and memories celebrating the work and contribution of Yama Siawash.',
    legacyWatch: 'Watch this memory',
    legacySource: 'OPEN ORIGINAL VIDEO',

    galleryTag: 'TELEVISION ARCHIVE',
    galleryTitle: 'His work, conversations and debates',
    galleryText:
      'Explore selected television programmes and discussions connected with Yama Siawash.',
    watch: 'Watch programme',
    programLabel: 'PROGRAMME',
    galleryNote:
      'The archive includes the three supplied programme links. Additional verified recordings can be added later.',

    footer:
      'A respectful digital tribute. Created to remember, learn and reflect.',
    top: 'Back to top'
  },

  fa: {
    nav: ['خانه', 'درباره', 'مسیر زندگی', 'روزنامه‌نگاری', 'میراث', 'نگارخانه'],
    eyebrow: 'یادبود دیجیتالی',
    headline: 'صدایی که\nماندگار است.',
    intro:
      'یادی از یما سیاووش؛ خبرنگار، گوینده و صدایی که با پرسش‌های جدی، گفت‌وگوی عمومی را زنده نگه می‌داشت.',
    explore: 'آشنایی با زندگی او',
    poem: 'تلاش‌های خستگی‌ناپذیر او',

    aboutTag: 'چهره‌ای فراتر از صدا',
    aboutTitle: 'زندگی‌ای با واژه‌ها، کنجکاوی و شهامت.',
    aboutText:
      'یما سیاووش خبرنگار، گوینده تلویزیون، نویسنده و شاعر افغان بود. او از راه کار رسانه‌ای خود برای بینندگان شناخته شد و با حضور سنجیده و پرسش‌های مستقیم، در گفت‌وگوهای عمومی سهم گرفت. این وب‌سایت فضای کوچکی دیجیتالی برای یادآوری کارنامه او و اهمیت صداهای مستقل است.',
    note:
      'این تصاویر برای نمایش زندگی عمومی و کار رسانه‌ای او در نظر گرفته شده‌اند. لطفاً از تصاویر با رعایت اجازه و ذکر منبع استفاده کنید.',
    photosTitle: 'لحظه‌هایی برای به‌یادسپردن',
    photosSubtitle: 'تصاویر از زندگی و فعالیت‌های او',

    journeyTag: 'مروری بر زندگی',
    journeyTitle: 'چند ایستگاه از مسیر زندگی او',
    milestones: [
      [
        '۱۹۸۴',
        'زادروز',
        'در منابع زندگی‌نامه‌ای، سال تولد یما سیاووش ۱۹۸۴ و محل تولد او ولسوالی کوهستان ولایت کاپیسا ذکر شده است.'
      ],
      [
        '۲۰۱۰',
        'پیوستن به طلوع‌نیوز',
        'او کار رسانه‌ای خود را با طلوع‌نیوز ادامه داد و از طریق برنامه‌های تلویزیونی برای بینندگان شناخته شد.'
      ],
      [
        '۲۰۱۵',
        'پایان یک فصل کاری',
        'دوره کاری او به‌عنوان گرداننده برنامه در طلوع‌نیوز در سال ۲۰۱۵ پایان یافت.'
      ],
      [
        '۲۰۲۰',
        'یاد او در حافظه مردم',
        'یما سیاووش در ۷ نومبر ۲۰۲۰ در کابل جان باخت. کار و سهم او در روزنامه‌نگاری همچنان به یاد آورده می‌شود.'
      ]
    ],

    mediaTag: 'کار رسانه‌ای',
    mediaTitle: 'روزنامه‌نگاری در خدمت جامعه',
    mediaText:
      'سیاووش به‌عنوان گرداننده برنامه «فراخبر» با مهمانان گفت‌وگو می‌کرد و از مسئولان درباره موضوعات مهم افغانستان پرسش می‌نمود.',
    cards: [
      ['تلویزیون', 'چهره‌ای آشنا در برنامه‌های گفت‌وگومحور.'],
      ['نویسندگی', 'صدایی خلاق فراتر از اتاق خبر.'],
      ['گفت‌وگوی عمومی', 'پایبندی به پرسش‌هایی که اهمیت دارند.']
    ],

    legacyTag: 'فراتر از خبرها',
    legacyTitle: 'ارزش صدای آزاد',
    legacyText:
      'یادکردن از یک خبرنگار، یادکردن از ارزش حقیقت، گفت‌وگوی آزاد و حق پرسش‌گری نیز است. باشد که داستان زندگی او ما را به گفت‌وگوی سنجیده و احترام به کسانی که خبر را گزارش می‌کنند، تشویق کند.',
    quote:
      'پرسش‌های یک خبرنگار می‌تواند زمینه‌ای برای اندیشیدن جامعه فراهم کند.',
    quoteBy: 'نوشته‌ای یادبود به پاس خاطره او',

    legacyMediaTitle: 'صدای او، کارنامه او، میراث او',
    legacyMediaText:
      'این ویدیوها و خاطره‌ها را برای یادآوری کارنامه و سهم یما سیاووش تماشا کنید.',
    legacyWatch: 'تماشای این خاطره',
    legacySource: 'دیدن ویدیوی اصلی',

    galleryTag: 'آرشیف تلویزیونی',
    galleryTitle: 'کارها، گفت‌وگوها و مناظره‌های او',
    galleryText:
      'برنامه‌ها و گفت‌وگوهای تلویزیونی مربوط به یما سیاووش را ببینید.',
    watch: 'تماشای برنامه',
    programLabel: 'برنامه',
    galleryNote:
      'در حال حاضر این آرشیف شامل سه پیوند برنامه‌ای است که فراهم کرده‌اید.',

    footer: 'یادبودی با احترام؛ برای به‌یادآوردن، آموختن و اندیشیدن.',
    top: 'بازگشت به بالا'
  }
};

function App() {
  const [lang, setLang] = useState('en');
  const [dark, setDark] = useState(true);
  const [menu, setMenu] = useState(false);

  const t = copy[lang];
  const rtl = lang === 'fa';

  const ids = [
    'home',
    'about',
    'journey',
    'journalism',
    'legacy',
    'gallery'
  ];

  // Scroll with space for the permanently fixed navbar.
  const go = (id) => {
    const element = document.getElementById(id);

    if (element) {
      const headerOffset = 95;
      const elementPosition =
        element.getBoundingClientRect().top + window.scrollY;

      window.scrollTo({
        top: elementPosition - headerOffset,
        behavior: 'smooth'
      });
    }

    setMenu(false);
  };

  return (
    <div
      className={`app ${dark ? 'dark' : 'light'} ${rtl ? 'rtl' : ''}`}
      dir={rtl ? 'rtl' : 'ltr'}
    >
      <div className="ambient-bg" aria-hidden="true" />

      {/* FIXED NAVBAR: ALWAYS VISIBLE ON EVERY SECTION */}
      <header
        className="header"
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          width: '100%',
          zIndex: 9999
        }}
      >
        <a
          className="brand"
          href="#home"
          onClick={(e) => {
            e.preventDefault();
            go('home');
          }}
        >
          <span className="brand-mark">YS</span>
          <span>YAMA SIAWASH</span>
        </a>

        <nav className="desktop-nav">
          {t.nav.map((n, i) => (
            <button key={n} onClick={() => go(ids[i])}>
              {n}
            </button>
          ))}
        </nav>

        <div className="controls">
          <button
            className="icon-btn lang-btn"
            onClick={() => setLang(lang === 'en' ? 'fa' : 'en')}
            aria-label="Change language"
          >
            {lang === 'en' ? 'دری' : 'EN'}
          </button>

          <button
            className="icon-btn"
            onClick={() => setDark(!dark)}
            aria-label="Toggle color mode"
          >
            {dark ? <Sun size={18} /> : <Moon size={18} />}
          </button>

          <button
            className="icon-btn mobile-menu"
            onClick={() => setMenu(!menu)}
            aria-label="Open navigation"
          >
            {menu ? <X /> : <Menu />}
          </button>
        </div>
      </header>

      {/* MOBILE NAVIGATION */}
      {menu && (
        <nav
          className="mobile-nav"
          style={{
            position: 'fixed',
            top: '75px',
            left: 0,
            right: 0,
            zIndex: 9998
          }}
        >
          {t.nav.map((n, i) => (
            <button key={n} onClick={() => go(ids[i])}>
              {n}
            </button>
          ))}
        </nav>
      )}

      {/* MAIN CONTENT: SPACE FOR FIXED NAVBAR */}
      <main style={{ paddingTop: '85px' }}>

        {/* HERO */}
        <section className="hero section" id="home">
          <div className="hero-copy">
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              <p className="eyebrow">
                <span /> {t.eyebrow}
              </p>

              <h1>
                {t.headline.split('\n').map((line, i) => (
                  <span key={i} style={{ display: 'block' }}>
                    {line}
                  </span>
                ))}
              </h1>

              <p className="hero-intro">{t.intro}</p>

              <div className="hero-actions">
                <button
                  className="primary-btn"
                  onClick={() => go('about')}
                >
                  {t.explore}
                  <ArrowDown size={16} />
                </button>

                <button
                  className="text-link"
                  onClick={() => go('legacy')}
                  type="button"
                >
                  {t.poem}
                  <ArrowUpRight size={16} />
                </button>
              </div>
            </motion.div>
          </div>

          <motion.div
            className="hero-photo-wrap"
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.15 }}
          >
            <div className="hero-photo" />

            <div className="photo-caption">
              <span>1984 — 2020</span>
              <span>AFGHANISTAN</span>
            </div>
          </motion.div>

          <div className="hero-bottom">
            <span>01 / 06</span>
            <span className="scroll-line" />
            <span>SCROLL TO DISCOVER</span>
          </div>
        </section>

        {/* ABOUT + SIX PHOTOS */}
        <section className="content-section section" id="about">
          <div className="section-heading">
            <p className="eyebrow">{t.aboutTag}</p>
            <h2>{t.aboutTitle}</h2>
          </div>

          <div className="about-grid">
            <div className="about-number">
              01<span> / ABOUT</span>
            </div>

            <div>
              <p className="large-copy">{t.aboutText}</p>
              <p className="small-note">{t.note}</p>
            </div>
          </div>

          <div className="photo-heading">
            <h3>{t.photosTitle}</h3>
            <p>{t.photosSubtitle}</p>
          </div>

          <div className="about-photo-grid">
            {PHOTOS.map((src, i) => (
              <motion.figure
                className="about-photo-card"
                key={src}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.06 }}
              >
                <img
                  src={src}
                  alt={`Yama Siawash photograph ${i + 1}`}
                  loading="lazy"
                />

                <figcaption>
                  Yama Siawash <span>0{i + 1}</span>
                </figcaption>
              </motion.figure>
            ))}
          </div>

          <a
            className="text-link instagram-about-link"
            href={INSTAGRAM}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Camera size={17} />
            View his Instagram photographs
            <ExternalLink size={15} />
          </a>
        </section>

        {/* JOURNEY */}
        <section
          className="content-section timeline-section section"
          id="journey"
        >
          <div className="section-heading">
            <p className="eyebrow">{t.journeyTag}</p>
            <h2>{t.journeyTitle}</h2>
          </div>

          <div className="timeline">
            {t.milestones.map((m, i) => (
              <motion.article
                className="timeline-item"
                key={m[0]}
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
              >
                <div className="timeline-year">{m[0]}</div>
                <div className="timeline-dot" />

                <div className="timeline-copy">
                  <h3>{m[1]}</h3>
                  <p>{m[2]}</p>
                </div>
              </motion.article>
            ))}
          </div>
        </section>

        {/* JOURNALISM */}
        <section className="content-section section" id="journalism">
          <div className="section-heading">
            <p className="eyebrow">{t.mediaTag}</p>
            <h2>{t.mediaTitle}</h2>
          </div>

          <div className="media-grid">
            <p className="large-copy">{t.mediaText}</p>

            <div className="media-cards">
              {t.cards.map((c, i) => (
                <div className="media-card" key={c[0]}>
                  <span className="card-index">0{i + 1}</span>

                  <div>
                    <h3>{c[0]}</h3>
                    <p>{c[1]}</p>
                  </div>

                  {i === 0 ? (
                    <Mic2 />
                  ) : i === 1 ? (
                    <BookOpen />
                  ) : (
                    <Newspaper />
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* LEGACY + SEVEN NEW VIDEO MEMORIES */}
        <section className="legacy-section section" id="legacy">
          <div className="legacy-inner">
            <p className="eyebrow">{t.legacyTag}</p>

            <h2>{t.legacyTitle}</h2>

            <p className="legacy-copy">{t.legacyText}</p>

            <div className="quote-card">
              <Quote />
              <blockquote>{t.quote}</blockquote>
              <span>{t.quoteBy}</span>
            </div>

            {/* NEW LEGACY MEDIA COLLECTION */}
            <div className="legacy-media-heading">
              <p className="eyebrow">{t.legacyMediaTitle}</p>
              <p>{t.legacyMediaText}</p>
            </div>

            <div className="legacy-media-grid">
              {LEGACY_MEDIA.map((item, i) => (
                <motion.a
                  className="legacy-media-card"
                  href={item.video}
                  target="_blank"
                  rel="noopener noreferrer"
                  key={item.video}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{
                    duration: 0.45,
                    delay: (i % 3) * 0.08
                  }}
                >
                  <div className="legacy-media-image">
                    <img
                      src={item.thumbnail}
                      alt={`Yama Siawash - ${item.title}`}
                      loading="lazy"
                      onError={(e) => {
                        e.currentTarget.onerror = null;
                        e.currentTarget.src =
                          '/images/yama-siawash-portrait.jpg';
                      }}
                    />

                    <span className="legacy-play">
                      <Play size={23} fill="currentColor" />
                    </span>

                    <span className="legacy-index">
                      0{i + 1}
                    </span>
                </div>

                  <div className="legacy-media-info">
                    <span className="legacy-media-type">
                      <Calendar size={13} />
                      {item.type}
                    </span>

                    <h3>{item.title}</h3>
                    <p>{item.subtitle}</p>

                    <span className="legacy-watch">
                      {t.legacyWatch}
                      <ArrowUpRight size={15} />
                    </span>
                  </div>
                </motion.a>
              ))}
            </div>

            <p className="legacy-source-note">
              {t.legacySource}
            </p>
          </div>
        </section>

        {/* GALLERY / THREE DEBATE PROGRAMMES */}
        <section
          className="content-section gallery-section section"
          id="gallery"
        >
          <div className="section-heading">
            <p className="eyebrow">{t.galleryTag}</p>
            <h2>{t.galleryTitle}</h2>
            <p className="large-copy">{t.galleryText}</p>
          </div>

          <div className="program-grid">
            {PROGRAMS.map((program, i) => (
              <motion.a
                className="program-card"
                href={program.video}
                target="_blank"
                rel="noopener noreferrer"
                key={program.video}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <div className="program-image-wrap">
                  <img
                    src={program.thumbnail}
                    alt={program.title}
loading="lazy"
                  />

                  <span className="program-play">
                    <Play size={25} fill="currentColor" />
                  </span>

                  <span className="program-number">
                    0{i + 1}
                  </span>
                </div>

                <div className="program-info">
                  <p className="program-label">
                    <Calendar size={14} />
                    {t.programLabel} 0{i + 1}
                  </p>

                  <h3>{program.title}</h3>
                  <p>{program.subtitle}</p>

                  <span className="program-watch">
                    {t.watch}
                    <ArrowUpRight size={16} />
                  </span>
                </div>
              </motion.a>
            ))}
          </div>

          <p className="small-note gallery-note">
            {t.galleryNote}
          </p>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="footer">
        <a
          className="brand"
          href="#home"
          onClick={(e) => {
            e.preventDefault();
            go('home');
          }}
        >
          <span className="brand-mark">YS</span>
          <span>YAMA SIAWASH</span>
        </a>

        <p>{t.footer}</p>

        <button onClick={() => go('home')}>
          {t.top} ↑
        </button>
      </footer>

      {/* INSTAGRAM BUTTON ALWAYS AVAILABLE */}
      <a
        className="instagram-float"
        href={INSTAGRAM}
target="_blank"
        rel="noopener noreferrer"
        aria-label="Visit Yama Siawash Instagram"
      >
        <Camera size={19} />
        <span>Instagram</span>
        <ArrowUpRight size={14} />
      </a>
    </div>
  );
}

createRoot(document.getElementById('root')).render(<App />);

