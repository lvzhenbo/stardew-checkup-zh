import type { Results } from '#/results';

export const useResultsStore = defineStore('results', () => {
  const results = ref<Results>({
    summary: {},
    money: {},
  });

  const setSummary = (summary: Results['summary']) => {
    results.value.summary = summary;
  };
  const setMoney = (money: Results['money']) => {
    results.value.money = money;
  };
  return {
    results,
    setSummary,
    setMoney,
  };
});
