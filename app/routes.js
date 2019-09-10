const express = require('express')
const router = express.Router()

// Add your routes here - above the module.exports line


//
// Version 1
//

router.post('/pcq-v2/applicant/equality-opt-in', function (req, res) {

  let equalityInformation = req.session.data['equality-information']

  if (equalityInformation == 'yes') {
    res.redirect('/pcq-v2/age?respondent=false&')
  } else {
    res.redirect('https://div-pcq-prototype.herokuapp.com/check-your-answers')
  }

})
router.post('/pcq-v2/respondent/equality-opt-in', function (req, res) {

  let equalityInformation = req.session.data['equality-information']

  if (equalityInformation == 'yes') {
    res.redirect('/pcq-v2/age?respondent=true&')
  } else {
    res.redirect('https://div-pcq-prototype.herokuapp.com/aos/check-your-answers')
  }

})
// add this determine sex so that there is an option to skip pregnancy Q

router.post('/pcq-v2/applicant/sex', function (req, res) {

  let whatIsYourSex = req.session.data['what-is-your-sex']

  if (whatIsYourSex == 'female') {
    res.redirect('/pcq-v2/sexual-orientation?respondent=false&sex=female')
  } else {
    res.redirect('/pcq-v2/sexual-orientation?respondent=false&sex=male')
  }

})
router.post('/pcq-v2/respondent/sex', function (req, res) {

  let whatIsYourSex = req.session.data['what-is-your-sex']

  if (whatIsYourSex == 'female') {
    res.redirect('/pcq-v2/sexual-orientation?respondent=true&sex=female')
  } else {
    res.redirect('/pcq-v2/sexual-orientation?respondent=true&sex=male')
  }

})
router.post('/pcq-v2/applicant-disability-answer', function (req, res) {

  let disabilityInformation = req.session.data['disability-information']

  if (disabilityInformation == 'Yes') {
    res.redirect('/pcq-v2/disability/disability-yes?respondent=false&')
  } else {
    res.redirect('/pcq-v2/pregnancy?respondent=false&')
  }

})
router.post('/pcq-v2/respondent-disability-answer', function (req, res) {

  let disabilityInformation = req.session.data['disability-information']

  if (disabilityInformation == 'Yes') {
    res.redirect('/pcq-v2/disability/disability-yes?respondent=true&')
  } else {
    res.redirect('/pcq-v2/pregnancy?respondent=true&')
  }

})

router.post('/pcq-v2/applicant-disability-details', function (req, res) {

  let disabilityYes = req.session.data['disability-yes']

  if (disabilityYes == 'Yes, limited a little' || disabilityYes == 'Yes, limited a lot') {
    res.redirect('/pcq-v2/disability/disability-yes-detail?respondent=false&')
  }
  else {
    res.redirect('/pcq-v2/pregnancy?respondent=false&')
  }

})

router.post('/pcq-v2/respondent-disability-details', function (req, res) {

  let disabilityYes = req.session.data['disability-yes']

  if (disabilityYes == 'Yes, limited a little' || disabilityYes == 'Yes, limited a lot') {
    res.redirect('/pcq-v2/disability/disability-yes-detail?respondent=true&')
  }
  else {
    res.redirect('/pcq-v2/pregnancy?respondent=true&')
  }

})

router.post('/pcq-v2/respondent-ethnicity-answer', function (req, res) {
  let ethnicGroup = req.session.data['ethnic-group']

  if (ethnicGroup == "Prefer not to say") {
    res.redirect('religion?respondent=true&')
  } else if (ethnicGroup == "White") {
    res.redirect('/pcq-v2/ethnic-group/ethnicity-white?respondent=true&')
  } else if (ethnicGroup == "Mixed or multiple ethnic groups") {
    res.redirect('/pcq-v2/ethnic-group/ethnicity-mixed?respondent=true&')
  } else if (ethnicGroup == "Asian or Asian British") {
    res.redirect('/pcq-v2/ethnic-group/ethnicity-asian?respondent=true&')
  } else if (ethnicGroup == "Black, African, Black British or Caribbean") {
    res.redirect('/pcq-v2/ethnic-group/ethnicity-black?respondent=true&')
  } else if (ethnicGroup == "Another ethnic group") {
    res.redirect('/pcq-v2/ethnic-group/ethnicity-another?respondent=true&')
  } else {
    res.redirect('religion?respondent=true&')
  }

})
router.post('/pcq-v2/applicant-ethnicity-answer', function (req, res) {
  let ethnicGroup = req.session.data['ethnic-group']
if (ethnicGroup == "Prefer not to say") {
    res.redirect('religion?respondent=false&')
  } else if (ethnicGroup == "White") {
    res.redirect('/pcq-v2/ethnic-group/ethnicity-white?respondent=false&')
  } else if (ethnicGroup == "Mixed or multiple ethnic groups") {
    res.redirect('/pcq-v2/ethnic-group/ethnicity-mixed?respondent=false&')
  } else if (ethnicGroup == "Asian or Asian British") {
    res.redirect('/pcq-v2/ethnic-group/ethnicity-asian?respondent=false&')
  } else if (ethnicGroup == "Black, African, Black British or Caribbean") {
    res.redirect('/pcq-v2/ethnic-group/ethnicity-black?respondent=fasle')
  } else if (ethnicGroup == "Another ethnic group") {
    res.redirect('/pcq-v2/ethnic-group/ethnicity-another?respondent=false&')
  } else {
    res.redirect('religion?respondent=false&')
  }

})

//

router.post('/pcq-v2/respondent-language', function (req, res) {

  let language = req.session.data['english-language']

  if (language == 'Other') {
    res.redirect('/pcq-v2/english-level?respondent=true&')
  }
  else {
    res.redirect('/pcq-v2/sex?respondent=true&')
  }
})

router.post('/pcq-v2/applicant-language', function (req, res) {

  let language = req.session.data['english-language']

  if (language == 'Other') {
    res.redirect('/pcq-v2/english-level?respondent=false&')
  }
  else {
    res.redirect('/pcq-v2/sex?respondent=false&')
  }
})


module.exports = router
