// Use this file to change prototype configuration.

// Note: prototype config can be overridden using environment variables (eg on heroku)

module.exports = {

  // Set the order of the questions and remove any not required
  // the recommended order for the full list is - 
  // questionOrder: ['age','language','sex','gender','sexual-orientation','marriage','ethnicity','religion','disability','pregnancy','exit']

  // Leave exit as the last page

  // for divorce marriage has been removed from the list

  questionOrder: [
  'age',
  'language',
  'sex',
  'gender',
  'sexual-orientation',
  'ethnicity',
  'religion',
  'disability',
  'pregnancy',
  'exit'],

  // Service name used in header. Eg: 'Renew your passport'
  serviceName: 'Equality and diversity questions',

  // Default port that prototype runs on
  port: '3000',

  // Enable or disable password protection on production
  useAuth: 'true',

  // Automatically stores form data, and send to all views
  useAutoStoreData: 'true',

  // Enable cookie-based session store (persists on restart)
  // Please note 4KB cookie limit per domain, cookies too large will silently be ignored
  useCookieSessionStore: 'false',

  // Enable or disable built-in docs and examples.
  useDocumentation: 'true',

  // Force HTTP to redirect to HTTPS on production
  useHttps: 'true',

  // Cookie warning - update link to service's cookie page.
  cookieText: 'GOV.UK uses cookies to make the site simpler. <a href="#">Find out more about cookies</a>',

  // Enable or disable Browser Sync
  useBrowserSync: 'true'

}
