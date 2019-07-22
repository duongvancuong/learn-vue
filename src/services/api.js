import axios from 'axios';

const DEFAULT_API_CONFIG = {
  baseURL: process.env.BASE_URL,
  timeout: process.env.TIMEOUT,
  apiVersion: process.env.VERSION_API,
  headers: {
    Accept: 'application/json',
    'Content-type': 'application/json; charset=UTF-8',
    Authorization: `Bearer ${process.env.API_KEY}`,
  },
};

const HEADER_FORM_DATA_CONFIG = {
  headers: {
    Accept: 'application/json',
    'Content-Type': 'multipart/form-data',
  },
};

export class Client {
  constructor(config) {
    this.client = axios.create({
      ...DEFAULT_API_CONFIG,
      ...config,
    });
    this._addErrorInterceptor(this.client);
  }

  _addErrorInterceptor(client) {
    client.interceptors.response.use(
      res => res,
      error => {
        if (!error.response)
          throw Object.assign({ error_code: 700, message: 'Something went wrong!' });
        if (error.response && this.crashError(error)) throw error.response.data;
        if (error.response && this.unauthenticated(error)) throw error.response.data;
        if (error.response && this.recordNotFound(error)) throw error.response.data;
        if (error.response && this.unauthorizedError(error)) throw error.response.data;
        throw error.response.data;
      },
    );
  }

  unauthenticated(error) {
    if (error.response.data.error_code === 403) {
      // TODO SOMETHING
    }
  }

  recordNotFound(error) {
    if (error.response.data.error_code === 404) {
      // TODO SOMETHING
    }
  }

  unauthorizedError(error) {
    if (error.response.data.error_code === 403) {
      // TODO SOMETHING
    }
  }

  crashError(error) {
    if (error.response.status === 500) {
      // TODO SOMETHING
    }
  }
}

export const API = new Client();
export const APIFormData = new Client(HEADER_FORM_DATA_CONFIG);
