import register from "./tests/register_test/new_register.js";
import update from "./tests/register_test/update_register.js";
import { htmlReport } from "https://raw.githubusercontent.com/benc-uk/k6-reporter/main/dist/bundle.js"; // este importe gera um relatorio em html
import { group , sleep } from 'k6';

export function handleSummary(data) {
    return {
      "summary.html": htmlReport(data),
    };
  }

export default () => {
  group('new register', () => {
    register();
  });
  group('update register', () => {
    update();

  });

}

