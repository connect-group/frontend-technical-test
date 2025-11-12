import { useEffect, useState } from 'react';

export function useQueryParam(paramName) {
  const getValue = () => {
    const { search } = window.location;
    const params = new URLSearchParams(search);
    return params.get(paramName);
  };

  const [value, setValue] = useState(getValue());

  // Update the state whenever the URL changes (back/forward navigation)
  useEffect(() => {
    const onPopState = () => setValue(getValue());
    window.addEventListener('popstate', onPopState);

    return () => window.removeEventListener('popstate', onPopState);
  }, []);

  return value;
}

/**
 * Helper to add or remove a single query string parameter without forcing a
 * full reload.
 *
 * @param {string} paramName
 * @param {?string} value
 * @param {?object} options
 * @param {?boolean} options.replace
 */
export function setQueryParam(
  paramName,
  value,
  { replace = false } = {}
) {
  const url = new URL(window.location.href);

  if (value === null) {
    url.searchParams.delete(paramName);
  } else {
    url.searchParams.set(paramName, value);
  }

  /*
   * Decide method based on options.
   *
   * `replace` → history.replaceState (doesn't create a new entry)
   * otherwise → history.pushState (creates a new entry)
   */
  if (replace) {
    window.history.replaceState(null, '', url.toString());
  } else {
    window.history.pushState(null, '', url.toString());
  }

  // Manually fire a popstate‑like event so any listeners (our hook) update
  const popStateEvent = new PopStateEvent('popstate', { state: null });
  window.dispatchEvent(popStateEvent);
}
