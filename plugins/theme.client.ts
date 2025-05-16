import { useTheme } from 'vuetify';

export default defineNuxtPlugin(() => {
  // const vuetifyTheme = useTheme()
  const theme = ref<string>(localStorage.getItem('oTheme') || 'system');

  const { $theme } = useNuxtApp();
  // console.log($theme);

  const setTheme = (newTheme: string) => {
    theme.value = newTheme;
    localStorage.setItem('oTheme', newTheme);
    applyTheme(newTheme);
  };

  const applyTheme = (theme: string) => {
    // console.log(window.matchMedia('(prefers-color-scheme: dark)').matches);
    // console.log(theme);
    // const isDark = theme === 'dark' || (theme === 'system' && window.matchMedia('(prefers-color-scheme: dark)').matches);
    const isDark = theme == 'dark' || window.matchMedia('(prefers-color-scheme: dark)').matches;
    // console.log(isDark);
    // const newTheme = isDark ? 'light': 'dark' ;
    const currentTheme = isDark ? 'dark': 'light';
    oTheme().value = currentTheme;


    document.documentElement.setAttribute('data-theme', currentTheme);
    // $theme.set(currentTheme);
    // console.log($theme);
    // console.log(useTheme());
    // useTheme()
    // console.log(newTheme);
    // vuetifyTheme.global.name.value = newTheme
  };

  // Watch for system preference changes
  const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
  mediaQuery.addEventListener('change', () => {
    if (theme.value === 'system') {
      applyTheme('system');
    }
  });

  // Initialize theme on load
  applyTheme(theme.value);

  return {
    provide: {
      theme: {
        current: theme,
        set: setTheme,
      },
    },
  };
});