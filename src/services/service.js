export default class MealService {
  _apiBase = "http://159.89.14.15:3452";

  getResourse = async (url) => {
    const res = await fetch(`${this._apiBase}${url}`);

    if (!res.ok) {
      throw new Error(`Couldn't fetch ${url}, recieved ${res.status}`);
    }
    return await res.json();
  };

  getIngredient = async () => {
    const res = await this.getResourse(`/ingredient/`);
    return await res.json();
  };

  getIngredientById = async (id) => {
    const res = await this.getResourse(`/ingredient/${id}`);
    return await res.json();
  };

  getFriedge = async () => {
    const res = await this.getResourse(`/friedge/`);
    return await res.json();
  };

  getMeal = async () => {
    const res = await this.getResourse(`/meal/`);
    return await res.json();
  };

  getMealById = async (id) => {
    const res = await this.getResourse(`/meal/${id}`);
    return await res.json();
  };

  getReceipt = async () => {
    const res = await this.getResourse(`/receipt/`);
    return await res.json();
  };
}
