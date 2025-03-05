type ErrorWithMessage = {
  message: string;
};

const isErrorWithMessage = (error: unknown): error is ErrorWithMessage => {
  return (
    typeof error === "object" &&
    error !== null &&
    "message" in error &&
    typeof (error as Record<string, unknown>).message === "string"
  );
};

const toErrorWithMessage = (maybeError: unknown): ErrorWithMessage => {
  if (isErrorWithMessage(maybeError)) return maybeError;

  try {
    return new Error(JSON.stringify(maybeError));
  } catch {
    return new Error(String(maybeError));
  }
};

const getErrorMessage = (error: unknown) => {
  return toErrorWithMessage(error).message;
};

const fetcher = async <TData, BData = unknown>(
  url: string,
  body?: BData,
  options?: RequestInit
): Promise<TData> => {
  const baseUrl = import.meta.env.VITE_API_URL as string;
  let fullUrl = new URL(url, baseUrl).toString();

  const headers = {
    "Content-Type": "application/json",
    ...(options?.headers || {}),
  };

  const requestOptions: RequestInit = {
    ...options,
    headers,
    method: options?.method || "GET",
  };

  if (requestOptions.method !== "GET" && body) {
    requestOptions.body =
      body instanceof FormData ? body : JSON.stringify(body);
  }

  if (requestOptions.method === "GET" && body) {
    const searchParams = new URLSearchParams(body as Record<string, string>);
    fullUrl += `?${searchParams.toString()}`;
  }

  const response = await fetch(fullUrl, requestOptions);

  let responseData;
  try {
    responseData = await response.json();
  } catch (error) {
    throw new Error(`Failed to parse JSON response: ${getErrorMessage(error)}`);
  }

  if (!response.ok) {
    const errorMessage =
      responseData?.message ||
      `Fetch error: ${response.status} ${response.statusText}`;
    throw new Error(errorMessage);
  }

  return responseData as TData;
};

export default fetcher;
