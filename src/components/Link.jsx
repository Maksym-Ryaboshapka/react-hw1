const Link = () => {
  const linkObj = { siteName: "Google", url: "https://www.google.com/" };

  return <a href={linkObj.url} target="_blank" rel="noreferrer">{linkObj.siteName}</a>;
};

export default Link;
