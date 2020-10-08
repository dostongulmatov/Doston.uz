import React from 'react'
import GitHubIcon from '@material-ui/icons/GitHub';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import TelegramIcon from '@material-ui/icons/Telegram';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import FacebookIcon from '@material-ui/icons/Facebook';


// github icon
function GitIcon() {
  return (
    <GitHubIcon>
      <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
    </GitHubIcon>
  );
}

// email icon
function EmailIcon() {
  return (
    <MailOutlineIcon>
      <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
    </MailOutlineIcon>
  );
}

// Telegram icon
function TeleIcon() {
  return (
    <TelegramIcon>
      <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
    </TelegramIcon>
  );
}

// Instagram icon
function InstaIcon() {
  return (
    <InstagramIcon>
      <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
    </InstagramIcon>
  );
}

// Twitter icon
function TwitIcon() {
  return (
    <TwitterIcon>
      <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
    </TwitterIcon>
  );
}

// Twitter icon
function FaceIcon() {
  return (
    <FacebookIcon>
      <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
    </FacebookIcon>
  );
}

export { GitIcon, EmailIcon, TeleIcon, InstaIcon, TwitIcon, FaceIcon };
