const sources = [
    {
        "context": {
            "name": "sitemap:urls",
            "description": "Set with the `sitemap.urls` config."
        },
        "urls": [],
        "sourceType": "user"
    },
    {
        "context": {
            "name": "@nuxtjs/i18n:pages",
            "description": "Generated from your i18n.pages config.",
            "tips": [
                "You can disable this with `autoI18n: false`."
            ]
        },
        "urls": [
            {
                "_sitemap": "en-US",
                "loc": "/",
                "alternatives": [
                    {
                        "hreflang": "en-US",
                        "href": "/"
                    },
                    {
                        "hreflang": "ar-AE",
                        "href": "ar"
                    },
                    {
                        "hreflang": "de-DE",
                        "href": "de"
                    },
                    {
                        "hreflang": "x-default",
                        "href": "/"
                    }
                ]
            },
            {
                "_sitemap": "ar-AE",
                "loc": "ar",
                "alternatives": [
                    {
                        "hreflang": "en-US",
                        "href": "/"
                    },
                    {
                        "hreflang": "ar-AE",
                        "href": "ar"
                    },
                    {
                        "hreflang": "de-DE",
                        "href": "de"
                    },
                    {
                        "hreflang": "x-default",
                        "href": "/"
                    }
                ]
            },
            {
                "_sitemap": "de-DE",
                "loc": "de",
                "alternatives": [
                    {
                        "hreflang": "en-US",
                        "href": "/"
                    },
                    {
                        "hreflang": "ar-AE",
                        "href": "ar"
                    },
                    {
                        "hreflang": "de-DE",
                        "href": "de"
                    },
                    {
                        "hreflang": "x-default",
                        "href": "/"
                    }
                ]
            },
            {
                "_sitemap": "en-US",
                "loc": "/about-us",
                "alternatives": [
                    {
                        "hreflang": "en-US",
                        "href": "/about-us"
                    },
                    {
                        "hreflang": "ar-AE",
                        "href": "ar/من-نحن"
                    },
                    {
                        "hreflang": "de-DE",
                        "href": "de/Über-Uns"
                    },
                    {
                        "hreflang": "x-default",
                        "href": "/about-us"
                    }
                ]
            },
            {
                "_sitemap": "ar-AE",
                "loc": "ar/من-نحن",
                "alternatives": [
                    {
                        "hreflang": "en-US",
                        "href": "/about-us"
                    },
                    {
                        "hreflang": "ar-AE",
                        "href": "ar/من-نحن"
                    },
                    {
                        "hreflang": "de-DE",
                        "href": "de/Über-Uns"
                    },
                    {
                        "hreflang": "x-default",
                        "href": "/about-us"
                    }
                ]
            },
            {
                "_sitemap": "de-DE",
                "loc": "de/Über-Uns",
                "alternatives": [
                    {
                        "hreflang": "en-US",
                        "href": "/about-us"
                    },
                    {
                        "hreflang": "ar-AE",
                        "href": "ar/من-نحن"
                    },
                    {
                        "hreflang": "de-DE",
                        "href": "de/Über-Uns"
                    },
                    {
                        "hreflang": "x-default",
                        "href": "/about-us"
                    }
                ]
            },
            {
                "_sitemap": "en-US",
                "loc": "/services",
                "alternatives": [
                    {
                        "hreflang": "en-US",
                        "href": "/services"
                    },
                    {
                        "hreflang": "ar-AE",
                        "href": "ar/الخدمات"
                    },
                    {
                        "hreflang": "de-DE",
                        "href": "de/Dienstleistungen"
                    },
                    {
                        "hreflang": "x-default",
                        "href": "/services"
                    }
                ]
            },
            {
                "_sitemap": "ar-AE",
                "loc": "ar/الخدمات",
                "alternatives": [
                    {
                        "hreflang": "en-US",
                        "href": "/services"
                    },
                    {
                        "hreflang": "ar-AE",
                        "href": "ar/الخدمات"
                    },
                    {
                        "hreflang": "de-DE",
                        "href": "de/Dienstleistungen"
                    },
                    {
                        "hreflang": "x-default",
                        "href": "/services"
                    }
                ]
            },
            {
                "_sitemap": "de-DE",
                "loc": "de/Dienstleistungen",
                "alternatives": [
                    {
                        "hreflang": "en-US",
                        "href": "/services"
                    },
                    {
                        "hreflang": "ar-AE",
                        "href": "ar/الخدمات"
                    },
                    {
                        "hreflang": "de-DE",
                        "href": "de/Dienstleistungen"
                    },
                    {
                        "hreflang": "x-default",
                        "href": "/services"
                    }
                ]
            },
            {
                "_sitemap": "en-US",
                "loc": "/training",
                "alternatives": [
                    {
                        "hreflang": "en-US",
                        "href": "/training"
                    },
                    {
                        "hreflang": "ar-AE",
                        "href": "ar/تدريب"
                    },
                    {
                        "hreflang": "de-DE",
                        "href": "de/Ausbildung"
                    },
                    {
                        "hreflang": "x-default",
                        "href": "/training"
                    }
                ]
            },
            {
                "_sitemap": "ar-AE",
                "loc": "ar/تدريب",
                "alternatives": [
                    {
                        "hreflang": "en-US",
                        "href": "/training"
                    },
                    {
                        "hreflang": "ar-AE",
                        "href": "ar/تدريب"
                    },
                    {
                        "hreflang": "de-DE",
                        "href": "de/Ausbildung"
                    },
                    {
                        "hreflang": "x-default",
                        "href": "/training"
                    }
                ]
            },
            {
                "_sitemap": "de-DE",
                "loc": "de/Ausbildung",
                "alternatives": [
                    {
                        "hreflang": "en-US",
                        "href": "/training"
                    },
                    {
                        "hreflang": "ar-AE",
                        "href": "ar/تدريب"
                    },
                    {
                        "hreflang": "de-DE",
                        "href": "de/Ausbildung"
                    },
                    {
                        "hreflang": "x-default",
                        "href": "/training"
                    }
                ]
            },
            {
                "_sitemap": "en-US",
                "loc": "/contact-us",
                "alternatives": [
                    {
                        "hreflang": "en-US",
                        "href": "/contact-us"
                    },
                    {
                        "hreflang": "ar-AE",
                        "href": "ar/تواصل-معنا"
                    },
                    {
                        "hreflang": "de-DE",
                        "href": "de/Kontakt"
                    },
                    {
                        "hreflang": "x-default",
                        "href": "/contact-us"
                    }
                ]
            },
            {
                "_sitemap": "ar-AE",
                "loc": "ar/تواصل-معنا",
                "alternatives": [
                    {
                        "hreflang": "en-US",
                        "href": "/contact-us"
                    },
                    {
                        "hreflang": "ar-AE",
                        "href": "ar/تواصل-معنا"
                    },
                    {
                        "hreflang": "de-DE",
                        "href": "de/Kontakt"
                    },
                    {
                        "hreflang": "x-default",
                        "href": "/contact-us"
                    }
                ]
            },
            {
                "_sitemap": "de-DE",
                "loc": "de/Kontakt",
                "alternatives": [
                    {
                        "hreflang": "en-US",
                        "href": "/contact-us"
                    },
                    {
                        "hreflang": "ar-AE",
                        "href": "ar/تواصل-معنا"
                    },
                    {
                        "hreflang": "de-DE",
                        "href": "de/Kontakt"
                    },
                    {
                        "hreflang": "x-default",
                        "href": "/contact-us"
                    }
                ]
            },
            {
                "_sitemap": "en-US",
                "loc": "/.well-known/:pathMatch(.*)",
                "alternatives": [
                    {
                        "hreflang": "en-US",
                        "href": "/.well-known/:pathMatch(.*)"
                    },
                    {
                        "hreflang": "ar-AE",
                        "href": "ar/.well-known/:pathMatch(.*)"
                    },
                    {
                        "hreflang": "de-DE",
                        "href": "de/.well-known/:pathMatch(.*)"
                    },
                    {
                        "hreflang": "x-default",
                        "href": "/.well-known/:pathMatch(.*)"
                    }
                ]
            },
            {
                "_sitemap": "ar-AE",
                "loc": "ar/.well-known/:pathMatch(.*)",
                "alternatives": [
                    {
                        "hreflang": "en-US",
                        "href": "/.well-known/:pathMatch(.*)"
                    },
                    {
                        "hreflang": "ar-AE",
                        "href": "ar/.well-known/:pathMatch(.*)"
                    },
                    {
                        "hreflang": "de-DE",
                        "href": "de/.well-known/:pathMatch(.*)"
                    },
                    {
                        "hreflang": "x-default",
                        "href": "/.well-known/:pathMatch(.*)"
                    }
                ]
            },
            {
                "_sitemap": "de-DE",
                "loc": "de/.well-known/:pathMatch(.*)",
                "alternatives": [
                    {
                        "hreflang": "en-US",
                        "href": "/.well-known/:pathMatch(.*)"
                    },
                    {
                        "hreflang": "ar-AE",
                        "href": "ar/.well-known/:pathMatch(.*)"
                    },
                    {
                        "hreflang": "de-DE",
                        "href": "de/.well-known/:pathMatch(.*)"
                    },
                    {
                        "hreflang": "x-default",
                        "href": "/.well-known/:pathMatch(.*)"
                    }
                ]
            }
        ],
        "sourceType": "app"
    }
];

export { sources };
//# sourceMappingURL=global-sources.mjs.map
