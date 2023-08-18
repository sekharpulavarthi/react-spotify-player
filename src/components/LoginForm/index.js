import React, { useEffect } from "react";
import Cookies from "js-cookie";
import "./index.css";

const CLIENT_ID = "512a88c2265943959e50a1dfea9cd7e9";
const SPOTIFY_AUTHORIZE_END_POINT = "https://accounts.spotify.com/authorize";
const REDIRECT_URL_AFTER_LOGIN = "http://localhost:3000/login";
const SCOPES = [
  "user-read-currently-playing",
  "user-read-playback-state",
  "user-read-private",
  "user-read-email",
  "playlist-read-private",
  "playlist-modify-public",
  "playlist-modify-private",
  "user-library-read",
  "user-library-modify",
  "user-follow-read",
  "user-follow-modify",
];
const SPACE_DELIMITER = "%20";
const SCOPES_URL_PARAM = SCOPES.join(SPACE_DELIMITER);

const getReturnedParamsFromSpotifyApp = (hash) => {
  const stringAfterHashtag = hash.substring(1);
  const paramsInUrl = stringAfterHashtag.split("&");

  const paramsSplitUp = paramsInUrl.reduce((accumulator, currentValue) => {
    console.log(currentValue);
    const [key, value] = currentValue.split("=");
    accumulator[key] = value;
    return accumulator;
  }, {});

  return paramsSplitUp;
};

export default function Login() {
  useEffect(() => {
    if (window.location.hash) {
      const object = getReturnedParamsFromSpotifyApp(window.location.hash);
      console.log(object);
      Cookies.set("access_token", object.access_token, {
        expires: parseInt(object.expires_in),
      });
      window.location.replace("/");
    }
  }, []);

  const submitForm = (event) => {
    window.location = `${SPOTIFY_AUTHORIZE_END_POINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URL_AFTER_LOGIN}&scope=${SCOPES_URL_PARAM}&response_type=token&show_dailog=true`;
  };

  return (
    <div className="login-form-container">
      <div className="form-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/spotify-remix-login-music.png"
          className="login-website-logo-desktop-image"
          alt="website logo"
        />
        <button type="submit" onClick={submitForm} className="login-button">
          LOG IN SPOTIFY REMIX
        </button>
      </div>
    </div>
  );
}
