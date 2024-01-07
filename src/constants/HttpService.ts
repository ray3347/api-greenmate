import axios from 'axios';

const HttpMethods = {
  GET: 'GET',
  POST: 'POST',
  PUT: 'PUT',
  PATCH: 'PATCH',
  DELETE: 'DELETE',
};

export const HttpService = {
  async get<T = any>(url: string, headers?: any) {
    try {
      axios({
        method: HttpMethods.GET,
        url: url,
        headers: headers ? headers : null,
      })
        .then(function (response) {
          return response.data;
        })
        .catch(function (error) {
          throw new error();
        });
    } catch (ex) {
      throw ex;
    }
  },

  async post<T = any>(url: string, body: any, headers?: any): Promise<any> {
    try {
      const res = await axios({
        method: HttpMethods.POST,
        url: url,
        data: body,
        headers: headers ?? null,
      });
      return res.data;
    } catch (ex) {
      throw ex;
    }
  },
};
