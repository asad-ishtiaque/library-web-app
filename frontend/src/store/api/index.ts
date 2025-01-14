import { authApi } from "./Auth";
import { bookApi } from "./Books";

const apiEndpoints = {
  [authApi.reducerPath]: authApi.reducer,
  [bookApi.reducerPath]: bookApi.reducer,
};

const apiMiddlewares = [authApi.middleware, bookApi.middleware];

export { apiEndpoints, apiMiddlewares };
