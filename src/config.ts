const MILLIS_IN_SECONDS = 1000;

export const config = {
  ImageToPepeUpdateRateInMillis:
    parseInt(process.env.IMG_TO_PEPE_UPDATE_RATE_SECONDS ?? "10") * MILLIS_IN_SECONDS,
};
