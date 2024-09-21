import { CONTACT_LINK } from "@/constants";
import type { CookieConsentConfig } from "vanilla-cookieconsent";

const pluginConfig: CookieConsentConfig = {
  guiOptions: {
    consentModal: {
      layout: "bar",
      position: "bottom",
      equalWeightButtons: false,
      flipButtons: true,
    },
    preferencesModal: {
      layout: "box",
      position: "left",
      equalWeightButtons: false,
      flipButtons: true,
    },
  },
  categories: {
    necessary: {
      readOnly: true,
      enabled: true,
    },
    analytics: {
      autoClear: {
        cookies: [
          {
            name: /^(_ga|_gid)/,
          },
        ],
      },
    },
  },

  language: {
    default: "pl",
    translations: {
      pl: {
        consentModal: {
          description:
            "Używamy plików cookie w celu analizy za pomocą Google Analytics. Możesz zaakceptować wszystkie pliki cookie lub dostosować swoje preferencje dotyczące plików cookie analitycznych.",
          acceptAllBtn: "Akceptuj wszystkie pliki cookie",
          acceptNecessaryBtn: "Tylko niezbędne pliki cookie",
          showPreferencesBtn: "Dostosuj preferencje",
        },
        preferencesModal: {
          title: "Preferencje dotyczące plików cookie",
          acceptAllBtn: "Akceptuj wszystkie",
          acceptNecessaryBtn: "Odrzuć wszystkie",
          savePreferencesBtn: "Zapisz preferencje",
          closeIconLabel: "Zamknij",
          sections: [
            {
              title: "Użycie plików cookie",
              description:
                "Używamy plików cookie w celu analizy za pomocą Google Analytics. Możesz zaakceptować wszystkie pliki cookie lub dostosować swoje preferencje dotyczące plików cookie analitycznych.",
            },
            {
              title: "Ściśle niezbędne pliki cookie",
              description: "Opis",
              linkedCategory: "necessary",
            },
            {
              title: "Pliki cookie dotyczące wydajności i analityki",
              linkedCategory: "analytics",
              cookieTable: {
                headers: {
                  name: "Nazwa",
                  domain: "Usługa",
                  description: "Opis",
                  expiration: "Wygaśnięcie",
                },
                body: [
                  {
                    name: "_ga",
                    domain: "Google Analytics",
                    description: "Plik cookie ustawiony przez <b>Google Analytics</b>.",
                    expiration: "Wygasa po 12 dniach",
                  },
                  {
                    name: "_gid",
                    domain: "Google Analytics",
                    description: "Plik cookie ustawiony przez <b>Google Analytics</b>",
                    expiration: "Sesja",
                  },
                ],
              },
            },
            {
              title: "Więcej informacji",
              description: `W przypadku jakichkolwiek pytań dotyczących polityki plików cookie, proszę <a class="cc__link" href="${CONTACT_LINK}">skontaktuj się z nami</a>.`,
            },
          ],
        },
      },
    },
  },
};

export default pluginConfig;
