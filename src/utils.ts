export function applyMixins(derivedCtor: any, baseCtors: any[]) {
    baseCtors.forEach(baseCtor => {
      Object.getOwnPropertyNames(baseCtor.prototype).forEach(name => {
        Object.defineProperty(
          derivedCtor.prototype,
          name,
          Object.getOwnPropertyDescriptor(baseCtor.prototype, name)
        );
      });
    });
}

export function buildURL(basePath: string, resource: string, requestObj: Object){ 
  const params = Object.keys(requestObj)
    .map(param => `${encodeURIComponent(param)}=${encodeURIComponent(requestObj[param])}`)
    .join('&');
  return `${basePath}${resource}?${params}`;
}