import Link from "next/link";
import {
  FiFacebook,
  FiInstagram,
  FiYoutube,
  FiLinkedin,
  FiSend,
  FiMusic,
  FiMessageCircle,
  FiGlobe,
} from "react-icons/fi";
import styles from "./Footer.module.css";

interface FooterLink {
  label: string;
  href: string;
}

interface FooterColumn {
  title: string;
  links: FooterLink[];
}

const columns: FooterColumn[] = [
  {
    title: "Şirkət",
    links: [
      { label: "Xüsusi təkliflər", href: "/" },
      { label: "Haqqımızda", href: "/" },
      { label: "Kartlar", href: "/" },
      { label: "İcarəyə verməyə yeriniz var?", href: "/" },
    ],
  },
  {
    title: "Digər",
    links: [
      { label: "Xəbərlər", href: "/" },
      { label: "Karyera", href: "/" },
      { label: "Müştəri xidmətləri", href: "/" },
    ],
  },
  {
    title: "Hüquq",
    links: [
      { label: "İstifadə şərtləri", href: "/" },
      { label: "İmtina", href: "/" },
      { label: "Onlayn market", href: "/" },
      { label: "Marketlərimiz", href: "/" },
      { label: "Korporativ satış", href: "/" },
    ],
  },
];

const socials = [
  { name: "facebook", href: "https://facebook.com", Icon: FiFacebook },
  { name: "instagram", href: "https://instagram.com", Icon: FiInstagram },
  { name: "youtube", href: "https://youtube.com", Icon: FiYoutube },
  { name: "linkedin", href: "https://linkedin.com", Icon: FiLinkedin },
  { name: "telegram", href: "https://telegram.org", Icon: FiSend },
  { name: "tiktok", href: "https://tiktok.com", Icon: FiMusic },
  { name: "whatsapp", href: "https://wa.me", Icon: FiMessageCircle },
];

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <h2 className={styles.logo}>TIK TAK</h2>

      <div className={styles.grid}>
        {columns.map((col) => (
          <div key={col.title} className={styles.column}>
            <h4>{col.title}</h4>
            <ul className={styles.linkList}>
              {col.links.map((link) => (
                <li key={link.label}>
                  <Link href={link.href}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>
        ))}

        <div className={styles.subscribe}>
          <h4>Yeniliklərə abunə olun</h4>
          <div className={styles.subscribeForm}>
            <input
              type="email"
              name="email"
              placeholder="E-mail daxil edin"
              aria-label="E-mail"
            />
            <button type="button">Göndər</button>
          </div>
        </div>
      </div>

      <div className={styles.bottom}>
        <span>© 2025 Azerbaijan Supermarket. Bütün hüquqlar qorunur</span>
        <span>Site by Grup II</span>
        <span className={styles.lang}>
          <FiGlobe size={16} />
          Azərbaycan
        </span>

        <ul className={styles.socials}>
          {socials.map((s) => (
            <li key={s.name}>
              <a
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialIcon}
                aria-label={s.name}
              >
                <s.Icon size={16} />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
};