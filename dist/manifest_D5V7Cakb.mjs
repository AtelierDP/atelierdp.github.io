import '@astrojs/internal-helpers/path';
import '@astrojs/internal-helpers/remote';
import { N as NOOP_MIDDLEWARE_HEADER, o as decodeKey } from './chunks/astro/server__7ZaI1Ga.mjs';
import 'clsx';
import 'cookie';
import 'es-module-lexer';
import 'html-escaper';

const NOOP_MIDDLEWARE_FN = async (_ctx, next) => {
  const response = await next();
  response.headers.set(NOOP_MIDDLEWARE_HEADER, "true");
  return response;
};

const codeToStatusMap = {
  // Implemented from IANA HTTP Status Code Registry
  // https://www.iana.org/assignments/http-status-codes/http-status-codes.xhtml
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  PAYMENT_REQUIRED: 402,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  METHOD_NOT_ALLOWED: 405,
  NOT_ACCEPTABLE: 406,
  PROXY_AUTHENTICATION_REQUIRED: 407,
  REQUEST_TIMEOUT: 408,
  CONFLICT: 409,
  GONE: 410,
  LENGTH_REQUIRED: 411,
  PRECONDITION_FAILED: 412,
  CONTENT_TOO_LARGE: 413,
  URI_TOO_LONG: 414,
  UNSUPPORTED_MEDIA_TYPE: 415,
  RANGE_NOT_SATISFIABLE: 416,
  EXPECTATION_FAILED: 417,
  MISDIRECTED_REQUEST: 421,
  UNPROCESSABLE_CONTENT: 422,
  LOCKED: 423,
  FAILED_DEPENDENCY: 424,
  TOO_EARLY: 425,
  UPGRADE_REQUIRED: 426,
  PRECONDITION_REQUIRED: 428,
  TOO_MANY_REQUESTS: 429,
  REQUEST_HEADER_FIELDS_TOO_LARGE: 431,
  UNAVAILABLE_FOR_LEGAL_REASONS: 451,
  INTERNAL_SERVER_ERROR: 500,
  NOT_IMPLEMENTED: 501,
  BAD_GATEWAY: 502,
  SERVICE_UNAVAILABLE: 503,
  GATEWAY_TIMEOUT: 504,
  HTTP_VERSION_NOT_SUPPORTED: 505,
  VARIANT_ALSO_NEGOTIATES: 506,
  INSUFFICIENT_STORAGE: 507,
  LOOP_DETECTED: 508,
  NETWORK_AUTHENTICATION_REQUIRED: 511
};
Object.entries(codeToStatusMap).reduce(
  // reverse the key-value pairs
  (acc, [key, value]) => ({ ...acc, [value]: key }),
  {}
);

function sanitizeParams(params) {
  return Object.fromEntries(
    Object.entries(params).map(([key, value]) => {
      if (typeof value === "string") {
        return [key, value.normalize().replace(/#/g, "%23").replace(/\?/g, "%3F")];
      }
      return [key, value];
    })
  );
}
function getParameter(part, params) {
  if (part.spread) {
    return params[part.content.slice(3)] || "";
  }
  if (part.dynamic) {
    if (!params[part.content]) {
      throw new TypeError(`Missing parameter: ${part.content}`);
    }
    return params[part.content];
  }
  return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]");
}
function getSegment(segment, params) {
  const segmentPath = segment.map((part) => getParameter(part, params)).join("");
  return segmentPath ? "/" + segmentPath : "";
}
function getRouteGenerator(segments, addTrailingSlash) {
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    let trailing = "";
    if (addTrailingSlash === "always" && segments.length) {
      trailing = "/";
    }
    const path = segments.map((segment) => getSegment(segment, sanitizedParams)).join("") + trailing;
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex,
    origin: rawRouteData.origin
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  const serverIslandNameMap = new Map(serializedManifest.serverIslandNameMap);
  const key = decodeKey(serializedManifest.key);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware() {
      return { onRequest: NOOP_MIDDLEWARE_FN };
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes,
    serverIslandNameMap,
    key
  };
}

const manifest = deserializeManifest({"hrefRoot":"file:///C:/Users/pauwel.demeyer/Git/atelierdp.github.io/","cacheDir":"file:///C:/Users/pauwel.demeyer/Git/atelierdp.github.io/node_modules/.astro/","outDir":"file:///C:/Users/pauwel.demeyer/Git/atelierdp.github.io/dist/","srcDir":"file:///C:/Users/pauwel.demeyer/Git/atelierdp.github.io/src/","publicDir":"file:///C:/Users/pauwel.demeyer/Git/atelierdp.github.io/public/","buildClientDir":"file:///C:/Users/pauwel.demeyer/Git/atelierdp.github.io/dist/client/","buildServerDir":"file:///C:/Users/pauwel.demeyer/Git/atelierdp.github.io/dist/server/","adapterName":"","routes":[{"file":"file:///C:/Users/pauwel.demeyer/Git/atelierdp.github.io/dist/404.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/404","isIndex":false,"type":"page","pattern":"^\\/404\\/?$","segments":[[{"content":"404","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/404.astro","pathname":"/404","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"file:///C:/Users/pauwel.demeyer/Git/atelierdp.github.io/dist/bio/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/bio","isIndex":false,"type":"page","pattern":"^\\/bio\\/?$","segments":[[{"content":"bio","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/bio.astro","pathname":"/bio","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"file:///C:/Users/pauwel.demeyer/Git/atelierdp.github.io/dist/blog/recepten/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/blog/recepten","isIndex":true,"type":"page","pattern":"^\\/blog\\/recepten\\/?$","segments":[[{"content":"blog","dynamic":false,"spread":false}],[{"content":"recepten","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/blog/recepten/index.astro","pathname":"/blog/recepten","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"file:///C:/Users/pauwel.demeyer/Git/atelierdp.github.io/dist/blog/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/blog","isIndex":true,"type":"page","pattern":"^\\/blog\\/?$","segments":[[{"content":"blog","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/blog/index.astro","pathname":"/blog","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"file:///C:/Users/pauwel.demeyer/Git/atelierdp.github.io/dist/contact/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/contact","isIndex":false,"type":"page","pattern":"^\\/contact\\/?$","segments":[[{"content":"contact","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/contact.astro","pathname":"/contact","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"file:///C:/Users/pauwel.demeyer/Git/atelierdp.github.io/dist/nieuws/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/nieuws","isIndex":false,"type":"page","pattern":"^\\/nieuws\\/?$","segments":[[{"content":"nieuws","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/nieuws.astro","pathname":"/nieuws","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"file:///C:/Users/pauwel.demeyer/Git/atelierdp.github.io/dist/over/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/over","isIndex":false,"type":"page","pattern":"^\\/over\\/?$","segments":[[{"content":"over","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/over.astro","pathname":"/over","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"file:///C:/Users/pauwel.demeyer/Git/atelierdp.github.io/dist/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}}],"site":"https://atelierdp.github.io","base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["\u0000astro:content",{"propagation":"in-tree","containsHead":false}],["C:/Users/pauwel.demeyer/Git/atelierdp.github.io/src/pages/blog/[slug].astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/blog/[slug]@_@astro",{"propagation":"in-tree","containsHead":false}],["C:/Users/pauwel.demeyer/Git/atelierdp.github.io/src/pages/blog/index.astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/blog/index@_@astro",{"propagation":"in-tree","containsHead":false}],["C:/Users/pauwel.demeyer/Git/atelierdp.github.io/src/pages/blog/recepten/[slug].astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/blog/recepten/[slug]@_@astro",{"propagation":"in-tree","containsHead":false}],["C:/Users/pauwel.demeyer/Git/atelierdp.github.io/src/pages/blog/recepten/index.astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/blog/recepten/index@_@astro",{"propagation":"in-tree","containsHead":false}],["C:/Users/pauwel.demeyer/Git/atelierdp.github.io/src/pages/over.astro",{"propagation":"none","containsHead":true}],["C:/Users/pauwel.demeyer/Git/atelierdp.github.io/src/pages/404.astro",{"propagation":"none","containsHead":true}],["C:/Users/pauwel.demeyer/Git/atelierdp.github.io/src/pages/contact.astro",{"propagation":"none","containsHead":true}],["C:/Users/pauwel.demeyer/Git/atelierdp.github.io/src/pages/index.astro",{"propagation":"none","containsHead":true}],["C:/Users/pauwel.demeyer/Git/atelierdp.github.io/src/pages/nieuws.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var l=(n,t)=>{let i=async()=>{await(await n())()},e=typeof t.value==\"object\"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};\"requestIdleCallback\"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var n=(a,t)=>{let i=async()=>{await(await a())()};if(t.value){let e=matchMedia(t.value);e.matches?i():e.addEventListener(\"change\",i,{once:!0})}};(self.Astro||(self.Astro={})).media=n;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var a=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let l of e)if(l.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=a;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000noop-middleware":"_noop-middleware.mjs","\u0000virtual:astro:actions/noop-entrypoint":"noop-entrypoint.mjs","\u0000@astro-page:src/pages/404@_@astro":"pages/404.astro.mjs","\u0000@astro-page:src/pages/bio@_@astro":"pages/bio.astro.mjs","\u0000@astro-page:src/pages/blog/recepten/[slug]@_@astro":"pages/blog/recepten/_slug_.astro.mjs","\u0000@astro-page:src/pages/blog/recepten/index@_@astro":"pages/blog/recepten.astro.mjs","\u0000@astro-page:src/pages/blog/[slug]@_@astro":"pages/blog/_slug_.astro.mjs","\u0000@astro-page:src/pages/blog/index@_@astro":"pages/blog.astro.mjs","\u0000@astro-page:src/pages/contact@_@astro":"pages/contact.astro.mjs","\u0000@astro-page:src/pages/nieuws@_@astro":"pages/nieuws.astro.mjs","\u0000@astro-page:src/pages/over@_@astro":"pages/over.astro.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000@astrojs-manifest":"manifest_D5V7Cakb.mjs","C:\\Users\\pauwel.demeyer\\Git\\atelierdp.github.io\\.astro\\content-assets.mjs":"chunks/content-assets_DleWbedO.mjs","C:\\Users\\pauwel.demeyer\\Git\\atelierdp.github.io\\.astro\\content-modules.mjs":"chunks/content-modules_Dz-S_Wwv.mjs","\u0000astro:data-layer-content":"chunks/_astro_data-layer-content_BzkIDMV8.mjs","C:/Users/pauwel.demeyer/Git/atelierdp.github.io/node_modules/astro/dist/assets/services/sharp.js":"chunks/sharp_DXiipgrI.mjs","C:/Users/pauwel.demeyer/Git/atelierdp.github.io/src/components/generic/receptenSection":"_astro/receptenSection.CRkxwBeU.js","C:/Users/pauwel.demeyer/Git/atelierdp.github.io/src/components/404/content":"_astro/content.CkWqQZkq.js","C:/Users/pauwel.demeyer/Git/atelierdp.github.io/src/components/generic/header":"_astro/header.SxQMdMAh.js","C:/Users/pauwel.demeyer/Git/atelierdp.github.io/src/components/generic/blogSection":"_astro/blogSection.cPLi_XHt.js","C:/Users/pauwel.demeyer/Git/atelierdp.github.io/src/components/generic/footer":"_astro/footer.B3N-YUE7.js","C:/Users/pauwel.demeyer/Git/atelierdp.github.io/src/components/generic/features":"_astro/features.DbByxX_T.js","C:/Users/pauwel.demeyer/Git/atelierdp.github.io/src/components/generic/featureFront":"_astro/featureFront.BxW1DAoa.js","C:/Users/pauwel.demeyer/Git/atelierdp.github.io/src/components/generic/feature":"_astro/feature.DIiT9Gr5.js","@astrojs/react/client.js":"_astro/client.BQw2qJp4.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[],"assets":["/file:///C:/Users/pauwel.demeyer/Git/atelierdp.github.io/dist/404.html","/file:///C:/Users/pauwel.demeyer/Git/atelierdp.github.io/dist/bio/index.html","/file:///C:/Users/pauwel.demeyer/Git/atelierdp.github.io/dist/blog/recepten/index.html","/file:///C:/Users/pauwel.demeyer/Git/atelierdp.github.io/dist/blog/index.html","/file:///C:/Users/pauwel.demeyer/Git/atelierdp.github.io/dist/contact/index.html","/file:///C:/Users/pauwel.demeyer/Git/atelierdp.github.io/dist/nieuws/index.html","/file:///C:/Users/pauwel.demeyer/Git/atelierdp.github.io/dist/over/index.html","/file:///C:/Users/pauwel.demeyer/Git/atelierdp.github.io/dist/index.html"],"buildFormat":"directory","checkOrigin":false,"allowedDomains":[],"serverIslandNameMap":[],"key":"9bfuIzr+0PBXXpIIqQVhbU2pjkIGjT2r3ilia4GEZZA="});
if (manifest.sessionConfig) manifest.sessionConfig.driverModule = null;

export { manifest };
