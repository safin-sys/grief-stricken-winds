// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.

import type { Multilingual } from "@/i18n";

export const SITE_TITLE: string | Multilingual = "Grief-Stricken Winds";

export const SITE_DESCRIPTION: string | Multilingual = {
	en: "A docuseries on the genocide of the Eelam Tamils being carried out by the Sri Lankan state",
	bn: "শ্রীলঙ্কার দ্বারা ইলাম তামিলদের ওপর চালানো গণহত্যার ওপর একটি তথ্যচিত্র"
};

export const NOT_TRANSLATED_CAUTION: string | Multilingual = {
	en: "This page is not available in your language.",
	bn: "এই পেইজটির বাংলা সংস্করণ নেই ।",
	ja: "このページはご利用の言語でご覧いただけません。",
	"zh-cn": "此页面不支持您的语言。",
	ar: "هذه الصفحة غير متوفرة بلغتك.",
};
