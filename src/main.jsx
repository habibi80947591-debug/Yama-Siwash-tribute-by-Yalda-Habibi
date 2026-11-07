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
  ExternalLink
} from 'lucide-react';
import './styles.css';

const INSTAGRAM = 'https://www.instagram.com/yamasiawash.official/';
const POEM_POST = 'https://www.instagram.com/p/CGiPi0Mpzuu/';

const copy = {
  en: {
    nav: ['Home', 'About', 'Journey', 'Journalism', 'Legacy', 'Gallery'],
    eyebrow: 'A DIGITAL TRIBUTE',
    headline: 'A voice that\nlives on.',
    intro: 'Remembering Yama Siawash — Afghan journalist, presenter and a voice devoted to asking difficult questions.',
    explore: 'Explore his story',
    poem: 'View the poem on Instagram',

    aboutTag: 'THE PERSON BEHIND THE VOICE',
    aboutTitle: 'A life shaped by words, curiosity and courage.',
    aboutText: 'Yama Siawash was an Afghan journalist, television presenter, writer and lyricist. Through his work in the media, he became known to audiences for his thoughtful presence and direct questions. This website is a small digital space to remember his work and the importance of independent voices.',
    note: 'This tribute is intended as a respectful introduction. Dates and biographical details should be checked against reliable published records before formal use.',

    journeyTag: 'A JOURNEY REMEMBERED',
    journeyTitle: 'A timeline of his public life',
    milestones: [
      ['1984', 'Born in Afghanistan', 'Biographical sources report that Yama Siawash was born in 1984.'],
      ['2010', 'Joined TOLOnews', 'He began working with TOLOnews and became familiar to viewers through television journalism.'],
      ['2020', 'Remembered by the nation', 'Yama Siawash was killed in Kabul on 7 November 2020. His death renewed concern about the safety of journalists.']
    ],

    mediaTag: 'THE WORK',
    mediaTitle: 'Journalism with a public purpose',
    mediaText: 'As a presenter on the programme Farakhabar, Siawash spoke with guests and questioned public officials about issues affecting Afghanistan.',
    cards: [
      ['Television', 'A familiar presenter and interviewer.'],
      ['Writing', 'A creative voice beyond the newsroom.'],
      ['Public conversation', 'A commitment to asking questions that matter.']
    ],

    legacyTag: 'BEYOND THE HEADLINES',
    legacyTitle: 'The importance of a free voice',
    legacyText: 'Remembering a journalist also means remembering the value of truth, open discussion and the right to ask questions. May his story encourage thoughtful dialogue and respect for those who report the news.',
    quote: 'A journalist’s questions can open a space for a society to think.',
    quoteBy: 'A tribute written in his memory',

    galleryTag: 'PORTRAIT & MEMORY',
    galleryTitle: 'A photograph to remember',
    galleryText: 'The portrait on this page was supplied for this tribute. The poem is linked to its original Instagram publication; its full text is not reproduced here.',

    footer: 'A respectful digital tribute. Created to remember, learn and reflect.',
    top: 'Back to top'
  },

  fa: {
    nav: ['خانه', 'درباره', 'مسیر زندگی', 'روزنامه‌نگاری', 'میراث', 'نگارخانه'],
    eyebrow: 'یادبود دیجیتالی',
    headline: 'صدایی که\nماندگار است.',
    intro: 'یادی از یما سیاووش؛ خبرنگار، گوینده و صدایی که با پرسش‌های جدی، گفت‌وگوی عمومی را زنده نگه می‌داشت.',
    explore: 'آشنایی با زندگی او',
    poem: 'دیدن شعر در انستاگرام',

    aboutTag: 'چهره‌ای فراتر از صدا',
    aboutTitle: 'زندگی‌ای با واژه‌ها، کنجکاوی و شهامت.',
    aboutText: 'یما سیاووش خبرنگار، گوینده تلویزیون، نویسنده و شاعر افغان بود. او از راه کار رسانه‌ای خود برای بینندگان شناخته شد و با حضور سنجیده و پرسش‌های مستقیم، در گفت‌وگوهای عمومی سهم گرفت. این وب‌سایت فضای کوچکی دیجیتالی برای یادآوری کارنامه او و اهمیت صداهای مستقل است.',
    note: 'این یادبود برای معرفی محترمانه تهیه شده است. پیش از استفاده رسمی، تاریخ‌ها و جزئیات زندگی‌نامه باید با منابع معتبر چاپ‌شده بررسی شوند.',

    journeyTag: 'مروری بر زندگی',
    journeyTitle: 'چند ایستگاه از مسیر زندگی او',
    milestones: [
      ['۱۹۸۴', 'زادروز', 'در منابع زندگی‌نامه‌ای، سال تولد یما سیاووش ۱۹۸۴ ذکر شده است.'],
      ['۲۰۱۰', 'پیوستن به طلوع‌نیوز', 'او کار رسانه‌ای خود را با طلوع‌نیوز ادامه داد و از طریق برنامه‌های تلویزیونی برای بینندگان شناخته شد.'],
      ['۲۰۲۰', 'یاد او در حافظه مردم', 'یما سیاووش در ۷ نومبر ۲۰۲۰ در کابل جان باخت. مرگ او نگرانی‌ها درباره امنیت خبرنگاران را دوباره برجسته ساخت.']
    ],

    mediaTag: 'کار رسانه‌ای',
    mediaTitle: 'روزنامه‌نگاری در خدمت جامعه',
    mediaText: 'سیاووش به‌عنوان گرداننده برنامه «فراخبر» با مهمانان گفت‌وگو می‌کرد و از مسئولان درباره موضوعات مهم افغانستان پرسش می‌نمود. کار او بخشی از تاریخ معاصر رسانه‌های افغانستان به شمار می‌رود.',
    cards: [
      ['تلویزیون', 'چهره‌ای آشنا در برنامه‌های گفت‌وگومحور.'],
      ['نویسندگی', 'صدایی خلاق فراتر از اتاق خبر.'],
      ['گفت‌وگوی عمومی', 'پایبندی به پرسش‌هایی که اهمیت دارند.']
    ],

    legacyTag: 'فراتر از خبرها',
    legacyTitle: 'ارزش صدای آزاد',
    legacyText: 'یادکردن از یک خبرنگار، یادکردن از ارزش حقیقت، گفت‌وگوی آزاد و حق پرسش‌گری نیز است. باشد که داستان زندگی او ما را به گفت‌وگوی سنجیده و احترام به کسانی که خبر را گزارش می‌کنند، تشویق کند.',
    quote: 'پرسش‌های یک خبرنگار می‌تواند زمینه‌ای برای اندیشیدن جامعه فراهم کند.',
    quoteBy: 'نوشته‌ای یادبود به پاس خاطره او',

    galleryTag: 'تصویر و خاطره',
    galleryTitle: 'تصویری برای به‌یادسپردن',
    galleryText: 'تصویر این صفحه برای این یادبود از سوی کاربر فراهم شده است. شعر به نشر اصلی آن در انستاگرام پیوند داده شده و متن کامل آن در این‌جا بازنشر نشده است.',

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

  const go = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: 'smooth'
    });
    setMenu(false);
  };

  return (
    <div
      className={`app ${dark ? 'dark' : 'light'} ${rtl ? 'rtl' : ''}`}
      dir={rtl ? 'rtl' : 'ltr'}
    >
      <div className="ambient-bg" aria-hidden="true" />

      <header className="header">
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

      {menu && (
        <nav className="mobile-nav">
          {t.nav.map((n, i) => (
            <button key={n} onClick={() => go(ids[i])}>
              {n}
            </button>
          ))}
        </nav>
      )}

      <main>
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

                <a
                  className="text-link"
                  href={POEM_POST}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {t.poem}
                  <ArrowUpRight size={16} />
                </a>
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
        </section>

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

        <section
          className="content-section section"
          id="journalism"
        >
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
          </div>
        </section>

        <section
          className="content-section gallery-section section"
          id="gallery"
        >
          <div className="section-heading">
            <p className="eyebrow">{t.galleryTag}</p>
            <h2>{t.galleryTitle}</h2>
          </div>

          <div className="gallery-grid">
            <img
  src="/yama-poem.jpg"
  alt="Yama Siawash"
  className="gallery-image"
/>

            <div className="gallery-info">
              <Heart />
              <p>{t.galleryText}</p>

              <a
                className="text-link"
                href={POEM_POST}
                target="_blank"
                rel="noopener noreferrer"
              >
                {t.poem}
                <ExternalLink size={15} />
              </a>
            </div>
          </div>
        </section>
      </main>

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

      {/* Persistent Instagram profile link */}
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