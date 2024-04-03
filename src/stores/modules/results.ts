import type { Results } from '#/results';

export const useResults = defineStore('results', () => {
  const results = ref<Results>({
    summary: {},
    money: {},
  });

  const setSummary = (summary: Results['summary']) => {
    results.value.summary = summary;
  };
  return {
    results,
    setSummary,
  };
});
