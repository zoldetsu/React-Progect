import { Accounts } from "../../accounts";

interface SignRouter {
  person: string;
  verf: string;
}

export const SignRouter = ({ person, verf }: SignRouter) => {
  const results = Accounts.filter((account) => {
    if (person && verf) {
      return (
        account.name.includes(person) &&
        account.psw.toLocaleLowerCase().includes(verf)
      );
    } else {
      return false; // Возвращаем false, если person или verf пустые
    }
  });

  return results;
};
