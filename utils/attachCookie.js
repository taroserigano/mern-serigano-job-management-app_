const attachCookie = ({ res, token }) => {
  const oneDay = 1000 * 60 * 60 * 24;

  res.cookie('token', token, {
    httpOnly: true,     // only web browser can handle this 
    expires: new Date(Date.now() + oneDay),    
    secure: process.env.NODE_ENV === 'production',    // only HTTPS can use this cookie 
  });
};

export default attachCookie;
