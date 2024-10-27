import axios, { AxiosResponse, AxiosRequestConfig } from "axios";

const hostUrl = import.meta.env.VITE_URLSERVER;

class FetchV2Service {
  get requestConfig() {
    return {
      headers: {
        //    responseType: "blob",
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
        // Authorization: `${
        //   localStorage.getItem("TokenSharepoint")
        //     ? localStorage.getItem("TokenSharepoint")
        //     : "no cookie"
        // }`,
      },
    };
  }

  public get(url: string, params: any = {}) {
    return new Promise<any>((resolve, reject) => {
      axios
        .get(hostUrl + url, {
          params,
          ...this.requestConfig,
        })
        .then((resp) => {
          resolve(resp.data);
        })
        .catch((e) => {
          this.handleError(e, reject);
        });
    });
  }

  public post(url: string, data: any) {
    return new Promise((resolve, reject) => {
      axios
        .post(hostUrl + url, data, this.requestConfig)
        .then((resp) => {
          resolve(resp.data);
        })
        .catch((e) => {
          this.handleError(e, reject);
        });
    });
  }

  public patch(url: string, data: any) {
    return new Promise((resolve, reject) => {
      axios
        .patch(hostUrl + url, data, this.requestConfig)
        .then((resp) => {
          resolve(resp.data);
        })
        .catch((e) => {
          this.handleError(e, reject);
        });
    });
  }

  public delete(url: string) {
    return new Promise((resolve, reject) => {
      axios
        .delete(hostUrl + url, this.requestConfig)
        .then((resp) => {
          resolve(resp.data);
        })
        .catch((e) => {
          this.handleError(e, reject);
        });
    });
  }

  private handleError(e: any, reject: any) {
    reject(e);
  }

}

export default new FetchV2Service();
