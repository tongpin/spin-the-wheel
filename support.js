const SUPPORTED_LANGS = ["en", "vi", "es", "pt", "fr", "de", "ja", "ko", "zh", "id"];
const SITE_ORIGIN = "https://spin.alsatian.co";
const OG_LOCALE_BY_LANG = {
  en: "en_US",
  vi: "vi_VN",
  es: "es_ES",
  pt: "pt_BR",
  fr: "fr_FR",
  de: "de_DE",
  ja: "ja_JP",
  ko: "ko_KR",
  zh: "zh_CN",
  id: "id_ID"
};
const SUPPORT_PAGE_PATHS = {
  about: "/about.html",
  fairness: "/fairness.html",
  privacy: "/privacy.html",
  help: "/help.html"
};

const ABOUT_CREATOR_TEXT = {
  en: "Spin the Wheel was created by Duc Nguyen.",
  vi: "Spin the Wheel được tạo bởi Duc Nguyen.",
  es: "Spin the Wheel fue creado por Duc Nguyen.",
  pt: "Spin the Wheel foi criado por Duc Nguyen.",
  fr: "Spin the Wheel a été créé par Duc Nguyen.",
  de: "Spin the Wheel wurde von Duc Nguyen erstellt.",
  ja: "Spin the Wheel は Duc Nguyen が制作しました。",
  ko: "Spin the Wheel는 Duc Nguyen가 만들었습니다.",
  zh: "Spin the Wheel 由 Duc Nguyen 制作。",
  id: "Spin the Wheel dibuat oleh Duc Nguyen."
};

const CREATOR_LINKS = {
  linkedin: "https://www.linkedin.com/in/ducnd87/",
  github: "https://github.com/scorta"
};

const SUPPORTING_PAGES_ARIA = {
  en: "Supporting pages",
  vi: "Các trang hỗ trợ",
  es: "Páginas de apoyo",
  pt: "Páginas de apoio",
  fr: "Pages d'assistance",
  de: "Hilfeseiten",
  ja: "サポートページ",
  ko: "지원 페이지",
  zh: "支持页面",
  id: "Halaman pendukung"
};

const HELP_COPY = {
  en: {
    title: "Spin the Wheel Help",
    intro: "Use this page for quick setup, shortcut references, and practical usage tips.",
    quickTitle: "Quick start",
    quick: [
      "Add entries one per line, or import CSV.",
      "Choose mode and spin settings.",
      "Spin with click or Ctrl/Cmd + K.",
      "Share/export results when needed."
    ]
  },
  vi: {
    title: "Trợ giúp Spin the Wheel",
    intro: "Dùng trang này để bắt đầu nhanh, xem phím tắt và các mẹo sử dụng thực tế.",
    quickTitle: "Bắt đầu nhanh",
    quick: [
      "Thêm mục theo từng dòng hoặc nhập CSV.",
      "Chọn chế độ và thiết lập quay.",
      "Quay bằng cú nhấp hoặc Ctrl/Cmd + K.",
      "Chia sẻ hoặc xuất kết quả khi cần."
    ]
  },
  es: {
    title: "Ayuda de Spin the Wheel",
    intro: "Usa esta página para empezar rápido, consultar atajos y ver consejos prácticos.",
    quickTitle: "Inicio rápido",
    quick: [
      "Agrega entradas una por línea o importa CSV.",
      "Elige el modo y la configuración del giro.",
      "Gira con clic o con Ctrl/Cmd + K.",
      "Comparte o exporta resultados cuando lo necesites."
    ]
  },
  pt: {
    title: "Ajuda do Spin the Wheel",
    intro: "Use esta página para começar rápido, consultar atalhos e ver dicas práticas.",
    quickTitle: "Início rápido",
    quick: [
      "Adicione entradas uma por linha ou importe CSV.",
      "Escolha o modo e as configurações de giro.",
      "Gire com clique ou Ctrl/Cmd + K.",
      "Compartilhe ou exporte resultados quando necessário."
    ]
  },
  fr: {
    title: "Aide Spin the Wheel",
    intro: "Utilisez cette page pour démarrer rapidement, consulter les raccourcis et voir des conseils pratiques.",
    quickTitle: "Démarrage rapide",
    quick: [
      "Ajoutez des entrées ligne par ligne ou importez un CSV.",
      "Choisissez le mode et les réglages du lancer.",
      "Lancez avec un clic ou avec Ctrl/Cmd + K.",
      "Partagez ou exportez les résultats si nécessaire."
    ]
  },
  de: {
    title: "Spin the Wheel Hilfe",
    intro: "Nutze diese Seite für einen schnellen Einstieg, Tastenkürzel und praktische Tipps.",
    quickTitle: "Schnellstart",
    quick: [
      "Füge Einträge zeilenweise hinzu oder importiere CSV.",
      "Wähle Modus und Dreheinstellungen.",
      "Drehe per Klick oder mit Ctrl/Cmd + K.",
      "Teile oder exportiere Ergebnisse bei Bedarf."
    ]
  },
  ja: {
    title: "Spin the Wheel ヘルプ",
    intro: "このページでは、クイックセットアップ、ショートカット、実用的なヒントを確認できます。",
    quickTitle: "クイックスタート",
    quick: [
      "項目を1行ずつ追加するか、CSVをインポートします。",
      "モードとスピン設定を選びます。",
      "クリックまたは Ctrl/Cmd + K で回します。",
      "必要に応じて結果を共有またはエクスポートします。"
    ]
  },
  ko: {
    title: "Spin the Wheel 도움말",
    intro: "이 페이지에서 빠른 설정, 단축키, 실용적인 사용 팁을 확인할 수 있습니다.",
    quickTitle: "빠른 시작",
    quick: [
      "항목을 줄마다 추가하거나 CSV를 가져오세요.",
      "모드와 회전 설정을 고르세요.",
      "클릭 또는 Ctrl/Cmd + K로 돌리세요.",
      "필요할 때 결과를 공유하거나 내보내세요."
    ]
  },
  zh: {
    title: "Spin the Wheel 帮助",
    intro: "这个页面提供快速上手、快捷键参考和实用使用建议。",
    quickTitle: "快速开始",
    quick: [
      "逐行添加条目，或导入 CSV。",
      "选择模式和旋转设置。",
      "通过点击或 Ctrl/Cmd + K 开始旋转。",
      "需要时分享或导出结果。"
    ]
  },
  id: {
    title: "Bantuan Spin the Wheel",
    intro: "Gunakan halaman ini untuk mulai cepat, melihat pintasan, dan membaca tips praktis.",
    quickTitle: "Mulai cepat",
    quick: [
      "Tambahkan entri per baris atau impor CSV.",
      "Pilih mode dan pengaturan putaran.",
      "Putar dengan klik atau Ctrl/Cmd + K.",
      "Bagikan atau ekspor hasil saat diperlukan."
    ]
  }
};

const COPY = {
  en: {
    nav: { about: "About", fairness: "Fairness", privacy: "Privacy", help: "Help", home: "Back to Spin the Wheel" },
    footer: "🔒 Your wheel data stays on this device. No accounts. No ads.",
    about: {
      title: "About Spin the Wheel",
      intro: "Spin the Wheel is a free local-first wheel picker built for speed, trust, and visual polish.",
      audienceTitle: "Who it is for",
      audience: [
        "Teachers running classroom selections and activities.",
        "Event organizers and giveaway hosts needing transparent fairness.",
        "Teams assigning tasks and rotations.",
        "Creators and streamers who want a polished on-screen wheel."
      ],
      useTitle: "How to use",
      useSteps: [
        "Add entries manually, paste in bulk, or load a template.",
        "Choose mode, speed, theme, and sound.",
        "Spin by clicking the wheel or using keyboard shortcuts.",
        "Review results history and share links when needed."
      ],
      principleTitle: "Product principles",
      principles: [
        "Fairness: cryptographic randomness with visible transparency.",
        "Privacy: wheel data stays local by default; Cloudflare Web Analytics measures aggregate site usage.",
        "No friction: no account required and no ads."
      ]
    },
    fairness: {
      title: "How randomness works",
      intro: "Winner selection uses crypto.getRandomValues(). Math.random() is not used for winner selection.",
      flowTitle: "What happens on each spin",
      flow: [
        "Active entries are collected (disabled/eliminated entries are excluded).",
        "A winner is selected immediately from a secure random draw.",
        "The animation is computed to land on that winner.",
        "The result is shown in popup and history."
      ],
      independenceTitle: "Independent spins",
      independence: "Each spin is independent unless you intentionally enable elimination mode.",
      weightedTitle: "Weighted mode transparency",
      weighted: "When weighted mode is active, chance is proportional to weight: P(entry) = weight / totalWeight.",
      auditTitle: "Auditability",
      audit: [
        "Timestamped results",
        "Per-entry win counts",
        "Checksummed share payload and audit hashes"
      ],
      auditTool: {
        title: "Our Fairness and Transparency Audit",
        intro: "Want to verify distribution yourself? Choose spins per run and test runs, then launch the simulation. We run fully independent draws on a 20-entry sample wheel and show exact outcomes.",
        randomTitle: "How this test generates randomness",
        randomBody: "Each simulated winner is selected with crypto.getRandomValues(), the browser's cryptographically secure random source. Winner selection in this audit never uses Math.random().",
        labels: {
          spins: "Number of spins per run",
          runs: "Number of test runs",
          runButton: "Run visual test",
          runButtonBusy: "Running...",
          sampleNote: "Sample wheel: 20 equally weighted entries.",
          statusIdle: "Adjust values, then run the audit.",
          statusRunning: "Running simulation...",
          statusNoCrypto: "Secure randomness is unavailable in this browser.",
          results: "Results",
          chart: "Win distribution",
          entry: "Entry",
          entryName: "Entry {index}",
          run: "Run {index}",
          average: "Average",
          total: "Total",
          summary: "Completed {totalSpins} independent spins across {runCount} runs. Expected wins per entry: {expectedPerEntry}. Spread (max-min): {spread}."
        }
      }
    },
    privacy: {
      title: "Privacy by default",
      intro: "Spin the Wheel is local-first for wheel data. Your entries, settings, and results stay in your browser unless you explicitly share or export them.",
      principlesTitle: "Privacy principles",
      principles: [
        "No accounts",
        "Cloudflare Web Analytics for aggregate traffic and performance metrics",
        "No ads or ad networks",
        "Wheel data stored locally in your browser",
        "Sharing and export of wheel configurations are user-initiated"
      ],
      storedTitle: "What data stays local",
      stored: [
        "Wheel entries, settings, and results in browser storage",
        "Language and theme preferences in localStorage",
        "Optional saved wheels in browser storage"
      ],
      analyticsTitle: "Cloudflare Web Analytics",
      analytics: "We use Cloudflare Web Analytics for aggregate traffic and performance reporting. This can include metrics such as visits, countries, referrers, device/browser categories, and page performance. We use this to understand basic site usage. We do not use it for ads, accounts, or behavioral profiling.",
      shareTitle: "URL sharing",
      share: "Share links carry compressed wheel data in the URL itself. We still do not store wheel configurations on our own server, but anyone with the link can open that wheel.",
      noteTitle: "Clear disclosure",
      note: "This is not a no-analytics site. It is local-first for wheel data, and it also uses Cloudflare Web Analytics for aggregate reporting. If that setup changes materially, this page will be updated."
    },
    help: {
      title: "Spin the Wheel Help",
      intro: "Use this page for quick setup, shortcut references, and practical usage tips.",
      quickTitle: "Quick start",
      quick: [
        "Add entries one per line, or import CSV.",
        "Choose mode and spin settings.",
        "Spin with click or Ctrl/Cmd + K.",
        "Share/export results when needed."
      ]
    }
  },
  vi: {
    nav: { about: "Giới thiệu", fairness: "Công bằng", privacy: "Quyền riêng tư", help: "Trợ giúp", home: "Quay lại Spin the Wheel" },
    footer: "🔒 Dữ liệu vòng quay của bạn ở trên thiết bị này. Không tài khoản. Không quảng cáo.",
    about: {
      title: "Giới thiệu Spin the Wheel",
      intro: "Spin the Wheel là vòng quay chọn ngẫu nhiên miễn phí, local-first, nhanh và dễ dùng.",
      audienceTitle: "Phù hợp cho",
      audience: ["Giáo viên", "Người tổ chức sự kiện", "Nhóm làm việc", "Streamer và nhà sáng tạo"],
      useTitle: "Cách dùng",
      useSteps: ["Nhập danh sách", "Chọn chế độ và giao diện", "Bấm quay", "Xem lịch sử và chia sẻ"],
      principleTitle: "Nguyên tắc sản phẩm",
      principles: ["Ngẫu nhiên minh bạch", "Dữ liệu vòng quay được giữ cục bộ theo mặc định; Cloudflare Web Analytics chỉ đo lường mức sử dụng tổng hợp của trang", "Không tài khoản, không quảng cáo"]
    },
    fairness: {
      title: "Cơ chế ngẫu nhiên",
      intro: "Kết quả được chọn bằng crypto.getRandomValues() để đảm bảo công bằng.",
      flowTitle: "Mỗi lần quay diễn ra như sau",
      flow: ["Lọc mục đang hoạt động", "Chọn người thắng bằng random bảo mật", "Tính animation", "Hiển thị kết quả và lịch sử"],
      independenceTitle: "Mỗi lượt độc lập",
      independence: "Các lượt quay độc lập, trừ khi bạn bật chế độ loại dần.",
      weightedTitle: "Minh bạch trọng số",
      weighted: "P(entry) = weight / totalWeight.",
      auditTitle: "Khả năng kiểm tra",
      audit: ["Có timestamp", "Có số lần thắng", "Có checksum/audit hash"]
    },
    privacy: {
      title: "Quyền riêng tư mặc định",
      intro: "Spin the Wheel ưu tiên lưu cục bộ cho dữ liệu vòng quay. Danh sách, cài đặt và kết quả của bạn ở lại trong trình duyệt trừ khi bạn chủ động chia sẻ hoặc xuất chúng.",
      principlesTitle: "Nguyên tắc",
      principles: ["Không tài khoản", "Cloudflare Web Analytics cho số liệu lưu lượng và hiệu năng ở mức tổng hợp", "Không quảng cáo hoặc mạng quảng cáo", "Dữ liệu vòng quay được lưu cục bộ trong trình duyệt", "Việc chia sẻ và xuất cấu hình vòng quay do bạn chủ động thực hiện"],
      storedTitle: "Dữ liệu nào được giữ cục bộ",
      stored: ["Danh sách, cài đặt và kết quả vòng quay trong bộ nhớ trình duyệt", "Tùy chọn ngôn ngữ và giao diện trong localStorage", "Các vòng quay lưu tùy chọn trong bộ nhớ trình duyệt"],
      analyticsTitle: "Cloudflare Web Analytics",
      analytics: "Chúng tôi dùng Cloudflare Web Analytics để xem báo cáo tổng hợp về lưu lượng và hiệu năng. Các số liệu này có thể bao gồm lượt truy cập, quốc gia, nguồn giới thiệu, nhóm thiết bị/trình duyệt và hiệu năng trang. Mục đích là hiểu mức sử dụng cơ bản của trang. Chúng tôi không dùng nó cho quảng cáo, tài khoản hay hồ sơ hành vi.",
      shareTitle: "Chia sẻ URL",
      share: "Liên kết chia sẻ chứa dữ liệu vòng quay đã nén ngay trong URL. Chúng tôi vẫn không lưu cấu hình vòng quay trên máy chủ riêng, nhưng bất kỳ ai có liên kết đều có thể mở vòng quay đó.",
      noteTitle: "Công bố rõ ràng",
      note: "Đây không phải là trang không có phân tích. Trang này ưu tiên local-first cho dữ liệu vòng quay và đồng thời dùng Cloudflare Web Analytics cho báo cáo tổng hợp. Nếu cách thiết lập này thay đổi đáng kể, trang sẽ được cập nhật."
    }
  },
  es: {
    nav: { about: "Acerca de", fairness: "Equidad", privacy: "Privacidad", help: "Ayuda", home: "Volver a Spin the Wheel" },
    footer: "🔒 Los datos de tu ruleta se quedan en este dispositivo. Sin cuentas. Sin anuncios.",
    about: {
      title: "Acerca de Spin the Wheel",
      intro: "Spin the Wheel es una ruleta local-first, gratuita, rápida y confiable.",
      audienceTitle: "Para quién es",
      audience: ["Docentes", "Organizadores de eventos", "Equipos", "Creadores y streamers"],
      useTitle: "Cómo usar",
      useSteps: ["Agrega entradas", "Configura modo/tema/sonido", "Gira la ruleta", "Revisa y comparte resultados"],
      principleTitle: "Principios",
      principles: ["Aleatoriedad criptográfica", "Privacidad: los datos de la ruleta permanecen locales por defecto; Cloudflare Web Analytics mide el uso agregado del sitio", "Sin fricción"]
    },
    fairness: {
      title: "Cómo funciona la aleatoriedad",
      intro: "La selección usa crypto.getRandomValues().",
      flowTitle: "En cada giro",
      flow: ["Se toman entradas activas", "Se elige ganador con aleatoriedad segura", "La animación aterriza en ese ganador", "Se registra el resultado"],
      independenceTitle: "Giros independientes",
      independence: "Cada giro es independiente salvo que actives eliminación.",
      weightedTitle: "Transparencia de pesos",
      weighted: "P(entrada) = peso / peso total.",
      auditTitle: "Auditoría",
      audit: ["Marca de tiempo", "Conteo de victorias", "Hashes de verificación"]
    },
    privacy: {
      title: "Privacidad por defecto",
      intro: "Spin the Wheel es local-first para los datos de la ruleta. Tus entradas, ajustes y resultados permanecen en tu navegador salvo que los compartas o exportes explícitamente.",
      principlesTitle: "Principios de privacidad",
      principles: ["Sin cuentas", "Cloudflare Web Analytics para métricas agregadas de tráfico y rendimiento", "Sin anuncios ni redes publicitarias", "Los datos de la ruleta se guardan localmente en tu navegador", "Compartir y exportar configuraciones de la ruleta es una acción iniciada por ti"],
      storedTitle: "Qué datos permanecen locales",
      stored: ["Entradas, ajustes y resultados de la ruleta en el almacenamiento del navegador", "Preferencias de idioma y tema en localStorage", "Ruedas guardadas opcionales en el navegador"],
      analyticsTitle: "Cloudflare Web Analytics",
      analytics: "Usamos Cloudflare Web Analytics para informes agregados de tráfico y rendimiento. Esto puede incluir métricas como visitas, países, referencias, categorías de dispositivo/navegador y rendimiento de la página. Lo usamos para entender el uso básico del sitio. No lo usamos para anuncios, cuentas ni perfiles de comportamiento.",
      shareTitle: "Compartir por URL",
      share: "Los enlaces compartidos llevan datos comprimidos de la ruleta en la propia URL. Seguimos sin almacenar configuraciones de la ruleta en nuestro servidor, pero cualquiera con el enlace puede abrir esa ruleta.",
      noteTitle: "Divulgación clara",
      note: "Este no es un sitio sin analítica. Es local-first para los datos de la ruleta y también usa Cloudflare Web Analytics para informes agregados. Si esta configuración cambia de forma relevante, esta página se actualizará."
    }
  },
  pt: {
    nav: { about: "Sobre", fairness: "Justiça", privacy: "Privacidade", help: "Ajuda", home: "Voltar ao Spin the Wheel" },
    footer: "🔒 Os dados da sua roleta ficam neste dispositivo. Sem conta. Sem anúncios.",
    about: { title: "Sobre o Spin the Wheel", intro: "Ferramenta local-first, rápida e gratuita para sorteios e decisões.", audienceTitle: "Para quem", audience: ["Professores", "Organizadores", "Equipes", "Streamers"], useTitle: "Como usar", useSteps: ["Adicione entradas", "Escolha modo/tema", "Gire", "Veja histórico e compartilhe"], principleTitle: "Princípios", principles: ["Aleatoriedade criptográfica", "Privacidade: os dados da roleta ficam locais por padrão; o Cloudflare Web Analytics mede o uso agregado do site", "Sem atrito"] },
    fairness: { title: "Como a aleatoriedade funciona", intro: "A seleção usa crypto.getRandomValues().", flowTitle: "A cada giro", flow: ["Filtra entradas ativas", "Escolhe vencedor com random seguro", "Animação para o vencedor", "Registra histórico"], independenceTitle: "Giros independentes", independence: "Cada giro é independente, exceto no modo eliminação.", weightedTitle: "Transparência de pesos", weighted: "P(entrada) = peso / peso total.", auditTitle: "Auditoria", audit: ["Timestamp", "Contagem de vitórias", "Hashes de verificação"] },
    privacy: { title: "Privacidade por padrão", intro: "O Spin the Wheel é local-first para os dados da roleta. Suas entradas, configurações e resultados ficam no navegador, salvo quando você compartilha ou exporta explicitamente.", principlesTitle: "Princípios", principles: ["Sem conta", "Cloudflare Web Analytics para métricas agregadas de tráfego e desempenho", "Sem anúncios ou redes de anúncios", "Os dados da roleta ficam armazenados localmente no navegador", "Compartilhar e exportar configurações da roleta depende de uma ação sua"], storedTitle: "Quais dados ficam locais", stored: ["Entradas, configurações e resultados da roleta no armazenamento do navegador", "Preferências de idioma e tema no localStorage", "Rodas salvas opcionalmente no navegador"], analyticsTitle: "Cloudflare Web Analytics", analytics: "Usamos o Cloudflare Web Analytics para relatórios agregados de tráfego e desempenho. Isso pode incluir métricas como visitas, países, origens de referência, categorias de dispositivo/navegador e desempenho da página. Usamos esses dados para entender o uso básico do site. Não usamos isso para anúncios, contas ou perfil comportamental.", shareTitle: "Compartilhamento por URL", share: "Os links de compartilhamento carregam dados compactados da roleta na própria URL. Continuamos sem armazenar configurações da roleta em nosso servidor, mas qualquer pessoa com o link pode abrir essa roleta.", noteTitle: "Divulgação clara", note: "Este não é um site sem analytics. Ele é local-first para os dados da roleta e também usa Cloudflare Web Analytics para relatórios agregados. Se essa configuração mudar de forma relevante, esta página será atualizada." }
  },
  fr: {
    nav: { about: "À propos", fairness: "Équité", privacy: "Confidentialité", help: "Aide", home: "Retour à Spin the Wheel" },
    footer: "🔒 Les données de votre roue restent sur cet appareil. Sans compte. Sans publicité.",
    about: { title: "À propos de Spin the Wheel", intro: "Une roue locale-first, rapide et gratuite.", audienceTitle: "Pour qui", audience: ["Enseignants", "Organisateurs", "Équipes", "Streamers"], useTitle: "Utilisation", useSteps: ["Ajoutez des entrées", "Choisissez mode/thème", "Lancez", "Consultez et partagez"], principleTitle: "Principes", principles: ["Aléatoire cryptographique", "Confidentialité : les données de la roue restent locales par défaut ; Cloudflare Web Analytics mesure l'usage agrégé du site", "Sans friction"] },
    fairness: { title: "Fonctionnement de l'aléatoire", intro: "La sélection utilise crypto.getRandomValues().", flowTitle: "À chaque lancer", flow: ["Entrées actives sélectionnées", "Gagnant choisi de façon sécurisée", "Animation vers le gagnant", "Résultat journalisé"], independenceTitle: "Lancers indépendants", independence: "Chaque lancer est indépendant sauf en mode élimination.", weightedTitle: "Poids transparents", weighted: "P(entrée) = poids / poids total.", auditTitle: "Audit", audit: ["Horodatage", "Compteur de victoires", "Hashes de vérification"] },
    privacy: { title: "Confidentialité par défaut", intro: "Spin the Wheel est local-first pour les données de la roue. Vos entrées, réglages et résultats restent dans votre navigateur sauf si vous les partagez ou les exportez explicitement.", principlesTitle: "Principes", principles: ["Sans compte", "Cloudflare Web Analytics pour des métriques agrégées de trafic et de performance", "Sans publicité ni réseau publicitaire", "Les données de la roue sont stockées localement dans votre navigateur", "Le partage et l'export des configurations de roue sont déclenchés par vous"], storedTitle: "Quelles données restent locales", stored: ["Entrées, réglages et résultats de la roue dans le stockage du navigateur", "Préférences de langue et de thème dans localStorage", "Roues sauvegardées de façon optionnelle dans le navigateur"], analyticsTitle: "Cloudflare Web Analytics", analytics: "Nous utilisons Cloudflare Web Analytics pour des rapports agrégés de trafic et de performance. Cela peut inclure des métriques comme les visites, pays, référents, catégories d'appareil/navigateur et performances de page. Nous l'utilisons pour comprendre l'usage général du site. Nous ne l'utilisons pas pour la publicité, les comptes ou le profilage comportemental.", shareTitle: "Partage URL", share: "Les liens de partage transportent les données compressées de la roue dans l'URL elle-même. Nous ne stockons toujours pas les configurations de roue sur notre propre serveur, mais toute personne disposant du lien peut ouvrir cette roue.", noteTitle: "Divulgation claire", note: "Ce site n'est pas un site sans analytics. Il est local-first pour les données de la roue et utilise aussi Cloudflare Web Analytics pour des rapports agrégés. Si cette configuration change de manière importante, cette page sera mise à jour." }
  },
  de: {
    nav: { about: "Über", fairness: "Fairness", privacy: "Datenschutz", help: "Hilfe", home: "Zurück zu Spin the Wheel" },
    footer: "🔒 Deine Raddaten bleiben auf diesem Gerät. Keine Konten. Keine Werbung.",
    about: { title: "Über Spin the Wheel", intro: "Kostenloses local-first Glücksrad für schnelle Entscheidungen.", audienceTitle: "Für wen", audience: ["Lehrkräfte", "Event-Teams", "Arbeitsgruppen", "Streamer"], useTitle: "So geht's", useSteps: ["Einträge hinzufügen", "Modus/Thema wählen", "Drehen", "Verlauf prüfen & teilen"], principleTitle: "Prinzipien", principles: ["Kryptografische Zufälligkeit", "Datenschutz: Die Raddaten bleiben standardmäßig lokal; Cloudflare Web Analytics misst die aggregierte Nutzung der Website", "Ohne Reibung"] },
    fairness: { title: "So funktioniert Zufall", intro: "Die Auswahl nutzt crypto.getRandomValues().", flowTitle: "Ablauf pro Dreh", flow: ["Aktive Einträge sammeln", "Gewinner sicher auswählen", "Animation auf Gewinner", "Ergebnis protokollieren"], independenceTitle: "Unabhängige Drehungen", independence: "Drehungen sind unabhängig, außer im Eliminationsmodus.", weightedTitle: "Gewichtung", weighted: "P(Eintrag) = Gewicht / Gesamtgewicht.", auditTitle: "Nachvollziehbarkeit", audit: ["Zeitstempel", "Gewinnzähler", "Prüf-Hashes"] },
    privacy: { title: "Datenschutz standardmäßig", intro: "Spin the Wheel ist local-first für Raddaten. Deine Einträge, Einstellungen und Ergebnisse bleiben im Browser, außer du teilst oder exportierst sie ausdrücklich.", principlesTitle: "Prinzipien", principles: ["Keine Konten", "Cloudflare Web Analytics für aggregierte Traffic- und Performance-Metriken", "Keine Werbung oder Werbenetzwerke", "Raddaten werden lokal im Browser gespeichert", "Teilen und Exportieren von Radkonfigurationen werden von dir ausgelöst"], storedTitle: "Welche Daten lokal bleiben", stored: ["Radeinträge, Einstellungen und Ergebnisse im Browser-Speicher", "Sprach- und Theme-Einstellungen in localStorage", "Optional gespeicherte Räder im Browser"], analyticsTitle: "Cloudflare Web Analytics", analytics: "Wir verwenden Cloudflare Web Analytics für aggregierte Traffic- und Performance-Berichte. Dazu können Metriken wie Besuche, Länder, Referrer, Geräte-/Browser-Kategorien und Seitenleistung gehören. Wir nutzen das, um die grundlegende Nutzung der Website zu verstehen. Wir verwenden es nicht für Werbung, Konten oder Verhaltensprofiling.", shareTitle: "URL-Teilen", share: "Freigabelinks tragen komprimierte Raddaten direkt in der URL. Wir speichern Radkonfigurationen weiterhin nicht auf unserem eigenen Server, aber jede Person mit dem Link kann dieses Rad öffnen.", noteTitle: "Klare Offenlegung", note: "Diese Website ist keine No-Analytics-Seite. Sie ist local-first für Raddaten und nutzt zusätzlich Cloudflare Web Analytics für aggregierte Berichte. Wenn sich diese Konfiguration wesentlich ändert, wird diese Seite aktualisiert." }
  },
  ja: {
    nav: { about: "概要", fairness: "公平性", privacy: "プライバシー", help: "ヘルプ", home: "Spin the Wheel に戻る" },
    footer: "🔒 ルーレットのデータはこの端末内に保存されます。アカウント不要。広告なし。",
    about: { title: "Spin the Wheel について", intro: "高速で使いやすい、ローカルファーストの無料ルーレットです。", audienceTitle: "対象ユーザー", audience: ["教師", "イベント運営", "チーム", "配信者"], useTitle: "使い方", useSteps: ["項目を追加", "モードやテーマを選択", "スピン", "履歴確認・共有"], principleTitle: "基本方針", principles: ["暗号学的ランダム", "プライバシー: ルーレットのデータはデフォルトで端末内に残り、Cloudflare Web Analytics はサイトの集計利用状況のみを測定します", "シンプルで高速"] },
    fairness: { title: "ランダム性の仕組み", intro: "当選選択には crypto.getRandomValues() を使用します。", flowTitle: "1回のスピンの流れ", flow: ["有効な項目を収集", "安全な乱数で当選決定", "当選に合わせてアニメーション", "結果を記録"], independenceTitle: "独立したスピン", independence: "除外モードを除き、各スピンは独立です。", weightedTitle: "重み付きの透明性", weighted: "P(項目) = weight / totalWeight", auditTitle: "監査性", audit: ["タイムスタンプ", "当選回数", "検証ハッシュ"] },
    privacy: { title: "デフォルトでプライバシー重視", intro: "Spin the Wheel はルーレットのデータに対して local-first です。項目、設定、結果は、明示的に共有またはエクスポートしない限りブラウザ内に残ります。", principlesTitle: "プライバシー原則", principles: ["アカウント不要", "Cloudflare Web Analytics による集計トラフィック・性能指標の計測", "広告や広告ネットワークなし", "ルーレットのデータはブラウザ内にローカル保存", "ルーレット設定の共有とエクスポートはユーザー操作でのみ実行"], storedTitle: "ローカルに残るデータ", stored: ["ブラウザ保存領域内の項目・設定・結果", "localStorage 内の言語設定とテーマ設定", "ブラウザ内に任意保存されたルーレット"], analyticsTitle: "Cloudflare Web Analytics", analytics: "このサイトでは Cloudflare Web Analytics を使って、集計されたトラフィックと性能レポートを確認しています。これには訪問数、国、参照元、デバイス/ブラウザ種別、ページ性能などの指標が含まれる場合があります。目的はサイトの基本的な利用状況を把握することです。広告、アカウント管理、行動プロファイリングには使用しません。", shareTitle: "URL共有", share: "共有リンクには圧縮されたルーレットデータが URL 自体に含まれます。ルーレット設定を当社サーバーに保存することはありませんが、リンクを知っている人はそのルーレットを開けます。", noteTitle: "明確な開示", note: "このサイトは no-analytics サイトではありません。ルーレットのデータについては local-first であり、集計レポートのために Cloudflare Web Analytics も使用しています。この設定が大きく変わる場合は、このページを更新します。" }
  },
  ko: {
    nav: { about: "소개", fairness: "공정성", privacy: "개인정보", help: "도움말", home: "Spin the Wheel로 돌아가기" },
    footer: "🔒 룰렛 데이터는 이 기기에 저장됩니다. 계정 없음. 광고 없음.",
    about: { title: "Spin the Wheel 소개", intro: "빠르고 신뢰할 수 있는 로컬 우선 무료 룰렛입니다.", audienceTitle: "대상", audience: ["교사", "이벤트 운영자", "팀", "스트리머"], useTitle: "사용 방법", useSteps: ["항목 추가", "모드/테마 설정", "스핀", "기록 확인 및 공유"], principleTitle: "원칙", principles: ["암호학적 난수", "개인정보: 룰렛 데이터는 기본적으로 기기에 남고, Cloudflare Web Analytics는 사이트의 집계된 이용 현황만 측정합니다", "간편한 사용"] },
    fairness: { title: "무작위 동작 방식", intro: "당첨 선택은 crypto.getRandomValues()를 사용합니다.", flowTitle: "스핀 과정", flow: ["활성 항목 수집", "보안 난수로 당첨 선택", "당첨 위치로 애니메이션", "결과 기록"], independenceTitle: "독립 스핀", independence: "제거 모드가 아니면 각 스핀은 독립입니다.", weightedTitle: "가중치 투명성", weighted: "P(항목) = weight / totalWeight", auditTitle: "감사 가능성", audit: ["타임스탬프", "항목별 당첨 수", "검증 해시"] },
    privacy: { title: "기본 개인정보 보호", intro: "Spin the Wheel은 룰렛 데이터에 대해 로컬 우선 방식을 사용합니다. 항목, 설정, 결과는 명시적으로 공유하거나 내보내지 않는 한 브라우저에 남아 있습니다.", principlesTitle: "원칙", principles: ["계정 없음", "Cloudflare Web Analytics를 통한 집계형 트래픽 및 성능 지표", "광고 또는 광고 네트워크 없음", "룰렛 데이터는 브라우저에 로컬 저장", "룰렛 설정의 공유와 내보내기는 사용자가 직접 실행"], storedTitle: "로컬에 남는 데이터", stored: ["브라우저 저장소의 룰렛 항목, 설정, 결과", "localStorage의 언어 및 테마 설정", "브라우저에 선택적으로 저장한 룰렛"], analyticsTitle: "Cloudflare Web Analytics", analytics: "이 사이트는 Cloudflare Web Analytics를 사용해 집계된 트래픽 및 성능 보고를 확인합니다. 여기에는 방문 수, 국가, 유입 경로, 기기/브라우저 범주, 페이지 성능 같은 지표가 포함될 수 있습니다. 목적은 사이트의 기본 사용 현황을 이해하는 것입니다. 이를 광고, 계정 관리, 행동 프로파일링에 사용하지 않습니다.", shareTitle: "URL 공유", share: "공유 링크에는 압축된 룰렛 데이터가 URL 자체에 담깁니다. 우리는 룰렛 구성을 자체 서버에 저장하지 않지만, 링크를 가진 사람은 그 룰렛을 열 수 있습니다.", noteTitle: "명확한 고지", note: "이 사이트는 no-analytics 사이트가 아닙니다. 룰렛 데이터는 local-first로 유지되며, 집계 보고를 위해 Cloudflare Web Analytics도 사용합니다. 이 구성이 크게 바뀌면 이 페이지를 업데이트하겠습니다." }
  },
  zh: {
    nav: { about: "关于", fairness: "公平性", privacy: "隐私", help: "帮助", home: "返回 Spin the Wheel" },
    footer: "🔒 你的转盘数据保存在此设备上。无需账号。无广告。",
    about: { title: "关于 Spin the Wheel", intro: "这是一款本地优先、免费、快速的转盘随机选择工具。", audienceTitle: "适用人群", audience: ["教师", "活动组织者", "团队", "主播"], useTitle: "使用方法", useSteps: ["添加条目", "选择模式和主题", "开始旋转", "查看历史并分享"], principleTitle: "产品原则", principles: ["加密级随机", "隐私：转盘数据默认保留在本地，Cloudflare Web Analytics 仅用于统计网站的汇总使用情况", "零门槛体验"] },
    fairness: { title: "随机机制说明", intro: "结果选择使用 crypto.getRandomValues()。", flowTitle: "每次旋转流程", flow: ["收集可用条目", "安全随机选出结果", "动画落在该结果", "写入历史记录"], independenceTitle: "独立抽取", independence: "除非开启淘汰模式，每次旋转彼此独立。", weightedTitle: "权重透明", weighted: "P(条目) = weight / totalWeight", auditTitle: "可审计性", audit: ["时间戳", "每项获胜次数", "校验哈希"] },
    privacy: { title: "默认隐私保护", intro: "Spin the Wheel 对转盘数据采用本地优先方式。除非你明确分享或导出，否则条目、设置和结果都会保留在浏览器中。", principlesTitle: "隐私原则", principles: ["无需账号", "使用 Cloudflare Web Analytics 提供汇总流量和性能指标", "无广告或广告网络", "转盘数据保存在浏览器本地", "转盘配置的分享和导出由你主动触发"], storedTitle: "哪些数据保留在本地", stored: ["浏览器存储中的转盘条目、设置和结果", "localStorage 中的语言和主题偏好", "可选保存在浏览器中的转盘"], analyticsTitle: "Cloudflare Web Analytics", analytics: "我们使用 Cloudflare Web Analytics 查看汇总的流量和性能报告。其中可能包括访问量、访客国家、来源、设备/浏览器类别以及页面性能等指标。用途是了解网站的基本使用情况。我们不会将其用于广告、账号体系或行为画像。", shareTitle: "URL 分享", share: "分享链接会把压缩后的转盘数据放在 URL 本身中。我们仍然不会在自有服务器上存储转盘配置，但任何拿到链接的人都可以打开该转盘。", noteTitle: "明确说明", note: "这个网站不是一个 zero-analytics 网站。它对转盘数据保持本地优先，同时也使用 Cloudflare Web Analytics 做汇总报告。如果这套设置发生实质变化，本页会更新。" }
  },
  id: {
    nav: { about: "Tentang", fairness: "Keadilan", privacy: "Privasi", help: "Bantuan", home: "Kembali ke Spin the Wheel" },
    footer: "🔒 Data roda Anda tetap di perangkat ini. Tanpa akun. Tanpa iklan.",
    about: { title: "Tentang Spin the Wheel", intro: "Roda pilihan acak gratis, cepat, dan local-first.", audienceTitle: "Cocok untuk", audience: ["Guru", "Penyelenggara acara", "Tim kerja", "Streamer"], useTitle: "Cara pakai", useSteps: ["Tambahkan entri", "Pilih mode/tema", "Putar", "Lihat riwayat dan bagikan"], principleTitle: "Prinsip", principles: ["Acak kriptografis", "Privasi: data roda tetap lokal secara default; Cloudflare Web Analytics mengukur penggunaan situs secara agregat", "Tanpa hambatan"] },
    fairness: { title: "Cara kerja keacakan", intro: "Pemilihan pemenang memakai crypto.getRandomValues().", flowTitle: "Alur setiap putaran", flow: ["Ambil entri aktif", "Pilih pemenang dengan acak aman", "Animasi mendarat pada pemenang", "Simpan ke riwayat"], independenceTitle: "Putaran independen", independence: "Setiap putaran independen kecuali mode eliminasi aktif.", weightedTitle: "Transparansi bobot", weighted: "P(entri) = bobot / totalBobot", auditTitle: "Audit", audit: ["Stempel waktu", "Hitung kemenangan", "Hash verifikasi"] },
    privacy: { title: "Privasi secara default", intro: "Spin the Wheel menerapkan local-first untuk data roda. Entri, pengaturan, dan hasil Anda tetap di browser kecuali Anda secara eksplisit membagikan atau mengekspornya.", principlesTitle: "Prinsip privasi", principles: ["Tanpa akun", "Cloudflare Web Analytics untuk metrik lalu lintas dan performa secara agregat", "Tanpa iklan atau jaringan iklan", "Data roda disimpan secara lokal di browser", "Berbagi dan mengekspor konfigurasi roda dilakukan atas tindakan Anda"], storedTitle: "Data yang tetap lokal", stored: ["Entri, pengaturan, dan hasil roda di penyimpanan browser", "Preferensi bahasa dan tema di localStorage", "Roda yang disimpan secara opsional di browser"], analyticsTitle: "Cloudflare Web Analytics", analytics: "Kami menggunakan Cloudflare Web Analytics untuk laporan lalu lintas dan performa secara agregat. Ini dapat mencakup metrik seperti kunjungan, negara, perujuk, kategori perangkat/browser, dan performa halaman. Kami memakainya untuk memahami penggunaan dasar situs. Kami tidak memakainya untuk iklan, akun, atau pembuatan profil perilaku.", shareTitle: "Berbagi URL", share: "Tautan berbagi membawa data roda yang terkompresi langsung di URL. Kami tetap tidak menyimpan konfigurasi roda di server kami sendiri, tetapi siapa pun yang memiliki tautan dapat membuka roda tersebut.", noteTitle: "Pengungkapan yang jelas", note: "Situs ini bukan situs tanpa analytics. Situs ini local-first untuk data roda dan juga menggunakan Cloudflare Web Analytics untuk pelaporan agregat. Jika pengaturan ini berubah secara material, halaman ini akan diperbarui." }
  }
};

function normalizeLanguageCode(rawCode) {
  const raw = String(rawCode || "").toLowerCase();
  if (raw.startsWith("vi")) return "vi";
  if (raw.startsWith("es")) return "es";
  if (raw.startsWith("pt")) return "pt";
  if (raw.startsWith("fr")) return "fr";
  if (raw.startsWith("de")) return "de";
  if (raw.startsWith("ja")) return "ja";
  if (raw.startsWith("ko")) return "ko";
  if (raw.startsWith("zh")) return "zh";
  if (raw.startsWith("id")) return "id";
  return "en";
}

function detectSupportLanguage() {
  const url = new URL(window.location.href);
  const fromQuery = normalizeLanguageCode(url.searchParams.get("lang"));
  const hasLangInQuery = url.searchParams.has("lang");
  if (hasLangInQuery && SUPPORTED_LANGS.includes(fromQuery)) {
    try {
      localStorage.setItem("wheel_spinner_language", fromQuery);
    } catch {
      // Ignore storage restrictions.
    }
    return fromQuery;
  }

  let stored = "en";
  try {
    stored = localStorage.getItem("wheel_spinner_language") || "";
  } catch {
    // Ignore storage restrictions.
  }
  if (stored) {
    return normalizeLanguageCode(stored);
  }
  return normalizeLanguageCode(navigator.language || "en");
}

function withLang(pathname, lang) {
  const url = new URL(pathname, window.location.origin);
  if (lang && lang !== "en") {
    url.searchParams.set("lang", lang);
  } else {
    url.searchParams.delete("lang");
  }
  const query = url.searchParams.toString();
  return query ? `${url.pathname}?${query}` : url.pathname;
}

function buildSupportCanonical(pathname, lang) {
  const url = new URL(pathname, SITE_ORIGIN);
  if (lang && lang !== "en") {
    url.searchParams.set("lang", lang);
  }
  return url.toString();
}

function getSupportPageContent(pageKey, text, lang) {
  if (text?.[pageKey]) return text[pageKey];
  if (pageKey === "help") return HELP_COPY[lang] || HELP_COPY.en;
  return null;
}

function syncSupportSeo(pageKey, lang, text) {
  const pathname = SUPPORT_PAGE_PATHS[pageKey];
  if (!pathname) return;

  const canonicalUrl = buildSupportCanonical(pathname, lang);
  const content = getSupportPageContent(pageKey, text, lang);
  const title = content?.title;
  const description = content?.intro;

  document.querySelector("link[rel='canonical']")?.setAttribute("href", canonicalUrl);
  document.querySelector("meta[property='og:url']")?.setAttribute("content", canonicalUrl);
  document.querySelector("meta[property='og:locale']")?.setAttribute("content", OG_LOCALE_BY_LANG[lang] || OG_LOCALE_BY_LANG.en);

  if (title) {
    document.title = title;
    document.querySelector("meta[property='og:title']")?.setAttribute("content", title);
    document.querySelector("meta[name='twitter:title']")?.setAttribute("content", title);
  }

  if (description) {
    document.querySelector("meta[name='description']")?.setAttribute("content", description);
    document.querySelector("meta[property='og:description']")?.setAttribute("content", description);
    document.querySelector("meta[name='twitter:description']")?.setAttribute("content", description);
  }

  SUPPORTED_LANGS.forEach((code) => {
    const element = document.querySelector(`link[rel='alternate'][hreflang='${code}']`);
    if (element) {
      element.setAttribute("href", buildSupportCanonical(pathname, code));
    }
  });

  document.querySelector("link[rel='alternate'][hreflang='x-default']")?.setAttribute("href", buildSupportCanonical(pathname, "en"));
}

const FAIRNESS_AUDIT_ENTRY_COUNT = 20;
const FAIRNESS_AUDIT_DEFAULT_SPINS = 20000;
const FAIRNESS_AUDIT_DEFAULT_RUNS = 3;
const FAIRNESS_AUDIT_SPINS_MIN = 1000;
const FAIRNESS_AUDIT_SPINS_MAX = 200000;
const FAIRNESS_AUDIT_RUNS_MIN = 1;
const FAIRNESS_AUDIT_RUNS_MAX = 20;
const FAIRNESS_AUDIT_RUN_COLORS = ["#4f84ff", "#ff4f63", "#ffd24a", "#47d9a0", "#ae8aff", "#56c8ff"];

const FAIRNESS_AUDIT_FALLBACK = {
  title: "Our Fairness and Transparency Audit",
  intro: "Choose spins per run and number of test runs, then execute independent draws on a 20-entry sample wheel. The table and chart show exact win counts for each entry.",
  randomTitle: "How this test generates randomness",
  randomBody: "Each simulated winner is selected with crypto.getRandomValues(), the browser's cryptographically secure random source. Winner selection in this audit never uses Math.random().",
  labels: {
    spins: "Number of spins per run",
    runs: "Number of test runs",
    runButton: "Run visual test",
    runButtonBusy: "Running...",
    sampleNote: "Sample wheel: 20 equally weighted entries.",
    statusIdle: "Adjust values, then run the audit.",
    statusRunning: "Running simulation...",
    statusNoCrypto: "Secure randomness is unavailable in this browser.",
    results: "Results",
    chart: "Win distribution",
    entry: "Entry",
    entryName: "Entry {index}",
    run: "Run {index}",
    average: "Average",
    total: "Total",
    summary: "Completed {totalSpins} independent spins across {runCount} runs. Expected wins per entry: {expectedPerEntry}. Spread (max-min): {spread}."
  }
};

function getFairnessAuditCopy(content) {
  const fromContent = content?.auditTool || {};
  return {
    ...FAIRNESS_AUDIT_FALLBACK,
    ...fromContent,
    labels: {
      ...FAIRNESS_AUDIT_FALLBACK.labels,
      ...(fromContent.labels || {})
    }
  };
}

function formatWithLocale(value, lang) {
  try {
    return new Intl.NumberFormat(lang || "en").format(value);
  } catch {
    return String(value);
  }
}

function clampInteger(value, fallback, min, max) {
  const normalized = Math.floor(Number(value));
  if (!Number.isFinite(normalized)) return fallback;
  return Math.min(max, Math.max(min, normalized));
}

function createSecureRandomSource(chunkSize = 4096) {
  if (typeof crypto === "undefined" || typeof crypto.getRandomValues !== "function") {
    return null;
  }
  const chunk = new Uint32Array(chunkSize);
  let cursor = chunk.length;

  return () => {
    if (cursor >= chunk.length) {
      crypto.getRandomValues(chunk);
      cursor = 0;
    }
    return chunk[cursor++] / 4294967296;
  };
}

function runFairnessSimulation(spinsPerRun, runCount) {
  const random = createSecureRandomSource();
  if (!random) {
    throw new Error("Secure random source is unavailable");
  }

  const perRun = Array.from(
    { length: runCount },
    () => Array.from({ length: FAIRNESS_AUDIT_ENTRY_COUNT }, () => 0)
  );

  for (let run = 0; run < runCount; run += 1) {
    const runTotals = perRun[run];
    for (let spin = 0; spin < spinsPerRun; spin += 1) {
      const winnerIndex = Math.floor(random() * FAIRNESS_AUDIT_ENTRY_COUNT);
      runTotals[winnerIndex] += 1;
    }
  }

  const totals = Array.from({ length: FAIRNESS_AUDIT_ENTRY_COUNT }, () => 0);
  perRun.forEach((runTotals) => {
    runTotals.forEach((wins, index) => {
      totals[index] += wins;
    });
  });

  return { perRun, totals };
}

function getFairnessRunLabel(labels, runIndex, lang) {
  const template = labels.run || "Run {index}";
  return template.replace("{index}", formatWithLocale(runIndex + 1, lang));
}

function getFairnessEntryLabel(labels, entryIndex, lang) {
  const template = labels.entryName || "Entry {index}";
  return template.replace("{index}", formatWithLocale(entryIndex + 1, lang));
}

function renderFairnessAuditResults(root, simulation, spinsPerRun, runCount, lang, labels) {
  const results = root.querySelector("[data-audit-results]");
  const summary = root.querySelector("[data-audit-summary]");
  const tableHead = root.querySelector("[data-audit-table-head]");
  const tableFoot = root.querySelector("[data-audit-table-foot]");
  const rows = root.querySelector("[data-audit-rows]");
  const chartLegend = root.querySelector("[data-audit-chart-legend]");
  const chart = root.querySelector("[data-audit-chart]");

  if (!results || !summary || !tableHead || !tableFoot || !rows || !chartLegend || !chart) return;

  const perRun = simulation.perRun;
  const totals = simulation.totals;

  const totalSpins = spinsPerRun * runCount;
  const expectedPerEntry = totalSpins / FAIRNESS_AUDIT_ENTRY_COUNT;
  const maxWins = Math.max(...totals);
  const minWins = Math.min(...totals);
  const spread = maxWins - minWins;
  const runLabels = perRun.map((_, runIndex) => getFairnessRunLabel(labels, runIndex, lang));
  const perRunTotals = perRun.map((runTotals) => runTotals.reduce((sum, wins) => sum + wins, 0));

  tableHead.innerHTML = `
    <tr>
      <th>${labels.entry}</th>
      ${runLabels.map((runLabel) => `<th>${runLabel}</th>`).join("")}
      <th>${labels.average}</th>
    </tr>
  `;

  rows.innerHTML = Array.from({ length: FAIRNESS_AUDIT_ENTRY_COUNT }, (_, index) => {
      const runValues = perRun.map((runTotals) => runTotals[index]);
      const average = runValues.reduce((sum, wins) => sum + wins, 0) / runCount;
      const entryLabel = getFairnessEntryLabel(labels, index, lang);
      return `
        <tr>
          <td>${entryLabel}</td>
          ${runValues.map((wins) => `<td>${formatWithLocale(wins, lang)}</td>`).join("")}
          <td>${formatWithLocale(Math.round(average), lang)}</td>
        </tr>
      `;
    })
    .join("");

  tableFoot.innerHTML = `
    <tr>
      <td>${labels.total}</td>
      ${perRunTotals.map((value) => `<td>${formatWithLocale(value, lang)}</td>`).join("")}
      <td>${formatWithLocale(Math.round(totalSpins / runCount), lang)}</td>
    </tr>
  `;

  const maxRunWins = Math.max(...perRun.flat());
  const barWidthRem = Math.max(0.055, Math.min(0.34, 0.9 / runCount));
  const barGapRem = Math.max(0.02, Math.min(0.18, 0.34 / runCount));

  chartLegend.innerHTML = runLabels
    .map((runLabel, runIndex) => {
      const color = FAIRNESS_AUDIT_RUN_COLORS[runIndex % FAIRNESS_AUDIT_RUN_COLORS.length];
      return `
        <span class="fairness-legend-item">
          <span class="fairness-legend-swatch" style="--fairness-run-color: ${color}"></span>
          <span>${runLabel}</span>
        </span>
      `;
    })
    .join("");

  chart.innerHTML = `
    <div class="fairness-grouped-chart" style="--fairness-chart-columns: ${FAIRNESS_AUDIT_ENTRY_COUNT}; --fairness-bar-width: ${barWidthRem}rem; --fairness-bar-gap: ${barGapRem}rem;">
      ${Array.from({ length: FAIRNESS_AUDIT_ENTRY_COUNT }, (_, entryIndex) => {
      const entryLabel = getFairnessEntryLabel(labels, entryIndex, lang);
      return `
        <div class="fairness-group">
          <div class="fairness-group-bars" aria-hidden="true">
            ${perRun.map((runTotals, runIndex) => {
            const wins = runTotals[entryIndex];
            const height = maxRunWins > 0 ? Math.max((wins / maxRunWins) * 100, 1.5) : 0;
            const color = FAIRNESS_AUDIT_RUN_COLORS[runIndex % FAIRNESS_AUDIT_RUN_COLORS.length];
            const runLabel = runLabels[runIndex];
            return `<span class="fairness-grouped-bar" style="height: ${height.toFixed(2)}%; --fairness-run-color: ${color};" title="${entryLabel} - ${runLabel}: ${formatWithLocale(wins, lang)}"></span>`;
          }).join("")}
          </div>
          <span class="fairness-group-label">${entryIndex + 1}</span>
        </div>
      `;
    }).join("")}
    </div>
  `;

  chart.setAttribute("aria-label", `Grouped bar chart showing ${runCount} test runs across ${FAIRNESS_AUDIT_ENTRY_COUNT} entries`);

  summary.textContent = labels.summary
    .replace("{totalSpins}", formatWithLocale(totalSpins, lang))
    .replace("{runCount}", formatWithLocale(runCount, lang))
    .replace("{expectedPerEntry}", formatWithLocale(Math.round(expectedPerEntry), lang))
    .replace("{spread}", formatWithLocale(spread, lang));

  results.hidden = false;
}

function initFairnessAudit(main, lang, content) {
  const root = main?.querySelector("[data-fairness-audit]");
  if (!root) return;

  const copy = getFairnessAuditCopy(content);
  const labels = copy.labels;
  const spinInput = root.querySelector("[data-audit-spins]");
  const runInput = root.querySelector("[data-audit-runs]");
  const runButton = root.querySelector("[data-audit-run]");
  const status = root.querySelector("[data-audit-status]");

  if (!spinInput || !runInput || !runButton || !status) return;

  if (typeof crypto === "undefined" || typeof crypto.getRandomValues !== "function") {
    runButton.disabled = true;
    status.textContent = labels.statusNoCrypto;
    return;
  }

  status.textContent = labels.statusIdle;

  runButton.addEventListener("click", () => {
    const spinsPerRun = clampInteger(spinInput.value, FAIRNESS_AUDIT_DEFAULT_SPINS, FAIRNESS_AUDIT_SPINS_MIN, FAIRNESS_AUDIT_SPINS_MAX);
    const runCount = clampInteger(runInput.value, FAIRNESS_AUDIT_DEFAULT_RUNS, FAIRNESS_AUDIT_RUNS_MIN, FAIRNESS_AUDIT_RUNS_MAX);
    spinInput.value = String(spinsPerRun);
    runInput.value = String(runCount);

    runButton.disabled = true;
    runButton.textContent = labels.runButtonBusy;
    status.textContent = labels.statusRunning;

    requestAnimationFrame(() => {
      try {
        const simulation = runFairnessSimulation(spinsPerRun, runCount);
        renderFairnessAuditResults(root, simulation, spinsPerRun, runCount, lang, labels);
        status.textContent = labels.statusIdle;
      } finally {
        runButton.disabled = false;
        runButton.textContent = labels.runButton;
      }
    });
  });
}

function renderSupportMain(main, pageKey, text, lang) {
  const content = getSupportPageContent(pageKey, text, lang);
  if (!main || !content) return;

  const listToHtml = (items = []) => items.map((item) => `<li>${item}</li>`).join("");

  if (pageKey === "about") {
    const creatorText = ABOUT_CREATOR_TEXT[lang] || ABOUT_CREATOR_TEXT.en;
    main.innerHTML = `
      <h1>${content.title}</h1>
      <p>${content.intro}</p>
      <h2>${content.audienceTitle}</h2>
      <ul>${listToHtml(content.audience)}</ul>
      <h2>${content.useTitle}</h2>
      <ol>${listToHtml(content.useSteps)}</ol>
      <h2>${content.principleTitle}</h2>
      <ul>${listToHtml(content.principles)}</ul>
      <p>${creatorText} <a href="${CREATOR_LINKS.linkedin}" target="_blank" rel="noopener noreferrer">LinkedIn</a> · <a href="${CREATOR_LINKS.github}" target="_blank" rel="noopener noreferrer">GitHub</a></p>
      <p><a href="${withLang("/fairness.html", lang)}">${text.nav.fairness}</a> · <a href="${withLang("/privacy.html", lang)}">${text.nav.privacy}</a></p>
      <p><a href="${withLang("/", lang)}">${text.nav.home}</a></p>
    `;
    return;
  }

  if (pageKey === "fairness") {
    const auditCopy = content.auditTool ? getFairnessAuditCopy(content) : null;
    const labels = auditCopy?.labels || null;
    const auditSection = auditCopy ? `
      <section class="fairness-audit" data-fairness-audit>
        <h2>${auditCopy.title}</h2>
        <p>${auditCopy.intro}</p>
        <div class="fairness-controls" role="group" aria-label="${auditCopy.title}">
          <label class="fairness-field" for="fairness-audit-spins">
            <span>${labels.spins}</span>
            <input id="fairness-audit-spins" data-audit-spins type="number" min="${FAIRNESS_AUDIT_SPINS_MIN}" max="${FAIRNESS_AUDIT_SPINS_MAX}" step="1000" value="${FAIRNESS_AUDIT_DEFAULT_SPINS}">
          </label>
          <label class="fairness-field" for="fairness-audit-runs">
            <span>${labels.runs}</span>
            <input id="fairness-audit-runs" data-audit-runs type="number" min="${FAIRNESS_AUDIT_RUNS_MIN}" max="${FAIRNESS_AUDIT_RUNS_MAX}" step="1" value="${FAIRNESS_AUDIT_DEFAULT_RUNS}">
          </label>
          <button type="button" class="support-button" data-audit-run>${labels.runButton}</button>
        </div>
        <p class="fairness-note">${labels.sampleNote}</p>
        <h3>${auditCopy.randomTitle}</h3>
        <p>${auditCopy.randomBody}</p>
        <p class="fairness-status" data-audit-status aria-live="polite"></p>
        <div class="fairness-results" data-audit-results hidden>
          <h3>${labels.results}</h3>
          <p class="fairness-summary" data-audit-summary></p>
          <div class="fairness-results-layout">
            <div class="fairness-chart-wrap">
              <h3>${labels.chart}</h3>
              <div class="fairness-chart-legend" data-audit-chart-legend></div>
              <div class="fairness-chart-viewport">
                <div class="fairness-chart" data-audit-chart role="img" aria-label="${labels.chart}"></div>
              </div>
            </div>
            <div class="fairness-table-wrap">
              <table class="fairness-table">
                <thead data-audit-table-head></thead>
                <tbody data-audit-rows></tbody>
                <tfoot data-audit-table-foot></tfoot>
              </table>
            </div>
          </div>
        </div>
      </section>` : "";
    main.innerHTML = `
      <h1>${content.title}</h1>
      <p>${content.intro}</p>
      <h2>${content.flowTitle}</h2>
      <div class="diagram">${content.flow.map((step) => `<div class="diagram-step">${step}</div>`).join("")}</div>
      <h2>${content.independenceTitle}</h2>
      <p>${content.independence}</p>
      <h2>${content.weightedTitle}</h2>
      <p>${content.weighted}</p>
      <h2>${content.auditTitle}</h2>
      <ul>${listToHtml(content.audit)}</ul>
      ${auditSection}
      <p><a href="${withLang("/", lang)}">${text.nav.home}</a></p>
    `;
    return;
  }

  if (pageKey === "privacy") {
    main.innerHTML = `
      <h1>${content.title}</h1>
      <p>${content.intro}</p>
      <h2>${content.principlesTitle}</h2>
      <ol>${listToHtml(content.principles)}</ol>
      <h2>${content.storedTitle}</h2>
      <ul>${listToHtml(content.stored)}</ul>
      <h2>${content.analyticsTitle}</h2>
      <p>${content.analytics}</p>
      <h2>${content.shareTitle}</h2>
      <p>${content.share}</p>
      <h2>${content.noteTitle}</h2>
      <p>${content.note}</p>
      <p><a href="${withLang("/", lang)}">${text.nav.home}</a></p>
    `;
    return;
  }

  if (pageKey === "help") {
    if (lang === "en") {
      return;
    }

    const help = content;

    main.innerHTML = `
      <h1>${help.title}</h1>
      <p>${help.intro}</p>
      <h2>${help.quickTitle}</h2>
      <ol>${listToHtml(help.quick)}</ol>
      <p><a href="${withLang("/", lang)}">${text.nav.home}</a></p>
    `;
  }
}

function renderSharedFrame() {
  const header = document.querySelector("[data-support-header]");
  const footer = document.querySelector("[data-support-footer]");
  const main = document.querySelector("[data-support-main]");
  const pageKey = main?.dataset.supportMain || "";
  const lang = detectSupportLanguage();
  const text = COPY[lang] || COPY.en;
  const year = new Date().getFullYear();

  document.documentElement.lang = lang;
  syncSupportSeo(pageKey, lang, text);

  if (header) {
    header.innerHTML = `
      <a href="${withLang("/", lang)}">🎡 Spin the Wheel</a>
      <nav aria-label="${SUPPORTING_PAGES_ARIA[lang] || SUPPORTING_PAGES_ARIA.en}">
        <a href="${withLang("/about.html", lang)}">${text.nav.about}</a>
        <a href="${withLang("/fairness.html", lang)}">${text.nav.fairness}</a>
        <a href="${withLang("/privacy.html", lang)}">${text.nav.privacy}</a>
        <a href="${withLang("/help.html", lang)}">${text.nav.help}</a>
      </nav>
    `;
  }

  if (footer) {
    footer.innerHTML = `
      <span>${text.footer}</span>
      <span>© ${year} Spin the Wheel</span>
    `;
  }

  renderSupportMain(main, pageKey, text, lang);

  if (pageKey === "fairness" && main && text.fairness?.auditTool) {
    initFairnessAudit(main, lang, text.fairness);
  }
}

renderSharedFrame();
