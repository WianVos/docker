var default_answer = { "properties" :  { last_good_build: "test_build_1",last_known_build: "test_build_3"} }




var profile_one = {
  "settings": {
    "appName": [
      "app1",
      "app2",
      "app3",
      "app4"
    ],
    "environment": [
      "dev",
      "test",
      "qa",
      "ete",
      "prod"
    ],
    "portfolio": "safeco",
    "release": "2016_01",
    "specific_settings": {
      "environment" : {
        "ete" : {"release" : "mary_poppins"}
      },
      "appName" : {
        "app1": {
          "portfolio": "claims2"
        },
        "app2": {
          "release": "2016_08"
        }
      }
    }
  },
  "template_plan": {
    "phases": [
      {
        "title": "build for $<appName>",
        "tasks": [
          {
            "meta": {
              "repeat_on": "appName",
              "task_type": "xlr.CreateAndStartSubRelease",
              "parent_task_type" : "xlrelease.CustomScriptTask"

            },
            "title": "$<appName> Build",
            "xlrServer": "local",
            "username": "admin",
            "templateName": "WASLP_BUILD",
            "releaseTitle": "Build $<appName>",
            "releaseDescription": "Build $<appName>",
            "variables": "appName=$<appName>",
            "asynch": "false"
          }
        ]
      },
      {
        "title": "deploy for $<release> to  $<environment> ",
        "meta": {
          "repeat_on": "environment"
        },
        "containers": [
          {
            "tasks": [
              {
                "meta": {
                  "repeat_on": "appName",
                  "task_type": "xlr.CreateAndStartSubRelease",
                  "parent_task_type" : "xlrelease.CustomScriptTask"
                },
                "title": "$<appName> deploy",
                "xlrServer": "local",
                "username": "admin",
                "templateName": "WASLP_DEPLOY",
                "releaseTitle": "Deploy $<appName> to $<environment>",
                "releaseDescription": "Deploy $<appName> to $<environment>",
                "variables": "appName=$<appName>,portfolio=$<portfolio>,release=$<release>"
              }
            ]
          }
        ]
      }
    ]
  }
}

var profile_two = {
  "settings": {
    "appName": [
      "app5",
      "app6",
      "app7",
      "app8"
    ],
    "environment": [
      "dev",
      "test",
      "qa",
      "ete",
      "prod"
    ],
    "portfolio": "safeco",
    "release": "2016_01",
    "specific_settings": {
      "environment" : {
        "ete" : {"release" : "mary_poppins"}
      },
      "appName" : {
        "app1": {
          "portfolio": "claims2"
        },
        "app2": {
          "release": "2016_08"
        }
      }
    }
  },
  "template_plan": {
    "phases": [
      {
        "title": "build_two for $<appName>",
        "tasks": [
          {
            "meta": {
              "repeat_on": "appName",
              "task_type": "xlr.CreateAndStartSubRelease",
              "parent_task_type" : "xlrelease.CustomScriptTask"

            },
            "title": "$<appName> Build",
            "xlrServer": "local",
            "username": "admin",
            "templateName": "WASLP_BUILD",
            "releaseTitle": "Build $<appName>",
            "releaseDescription": "Build $<appName>",
            "variables": "appName=$<appName>",
            "asynch": "false"
          }
        ]
      },
      {
        "title": "deploy for $<release> to  $<environment> ",
        "meta": {
          "repeat_on": "environment"
        },
        "containers": [
          {
            "tasks": [
              {
                "meta": {
                  "repeat_on": "appName",
                  "task_type": "xlr.CreateAndStartSubRelease",
                  "parent_task_type" : "xlrelease.CustomScriptTask"
                },
                "title": "$<appName> two deploy",
                "xlrServer": "local",
                "username": "admin",
                "templateName": "WASLP_DEPLOY",
                "releaseTitle": "Deploy $<appName> to $<environment>",
                "releaseDescription": "Deploy $<appName> to $<environment>",
                "variables": "appName=$<appName>,portfolio=$<portfolio>,release=$<release>"
              }
            ]
          }
        ]
      }
    ]
  }
}


var profile_plan = {
  "template_plan": {
    "phases": [
      {
        "title": "build_two for $<appName>",
        "tasks": [
          {
            "meta": {
              "repeat_on": "appName",
              "task_type": "xlr.CreateAndStartSubRelease",
              "parent_task_type" : "xlrelease.CustomScriptTask"

            },
            "title": "$<appName> Build",
            "xlrServer": "local",
            "username": "admin",
            "templateName": "WASLP_BUILD",
            "releaseTitle": "Build $<appName>",
            "releaseDescription": "Build $<appName>",
            "variables": "appName=$<appName>",
            "asynch": "false"
          }
        ]
      },
      {
        "title": "deploy for $<release> to  $<environment> ",
        "meta": {
          "repeat_on": "environment"
        },
        "containers": [
          {
            "tasks": [
              {
                "meta": {
                  "repeat_on": "appName",
                  "task_type": "xlr.CreateAndStartSubRelease",
                  "parent_task_type" : "xlrelease.CustomScriptTask"
                },
                "title": "$<appName> two deploy",
                "xlrServer": "local",
                "username": "admin",
                "templateName": "WASLP_DEPLOY",
                "releaseTitle": "Deploy $<appName> to $<environment>",
                "releaseDescription": "Deploy $<appName> to $<environment>",
                "variables": "appName=$<appName>,portfolio=$<portfolio>,release=$<release>"
              }
            ]
          }
        ]
      }
    ]
  }
}

var profile_plan2 = {
  "template_plan": {
    "phases": [
      {
        "title": "build_two for $<appName>",
        "tasks": [
          {
            "meta": {
              "repeat_on": "appName",
              "task_type": "xlr.CreateAndStartSubRelease",
              "parent_task_type" : "xlrelease.CustomScriptTask"

            },
            "title": "$<appName> Build",
            "xlrServer": "${server}",
            "username": "admin",
            "templateName": "WASLP_BUILD",
            "releaseTitle": "Build $<appName>",
            "releaseDescription": "Build $<appName>",
            "variables": "appName=$<appName>",
            "asynch": "false"
          }
        ]
      },
      {
        "title": "deploy for $<release> to  $<environment> ",
        "meta": {
          "repeat_on": "environment"
        },
        "containers": [
          {
            "tasks": [
              {
                "meta": {
                  "repeat_on": "appName",
                  "task_type": "xlr.CreateAndStartSubRelease",
                  "parent_task_type" : "xlrelease.CustomScriptTask"
                },
                "title": "$<appName> two deploy",
                "xlrServer": "${server}",
                "username": "admin",
                "templateName": "WASLP_DEPLOY",
                "releaseTitle": "Deploy $<appName> to $<environment>",
                "releaseDescription": "Deploy $<appName> to $<environment>",
                "variables": "appName=$<appName>,portfolio=$<portfolio>,release=$<release>"
              }
            ]
          }
        ]
      }
    ]
  }
}
var profile_settings1 = {
"settings": {
    "appName": [
      "app1",
      "app2",
      "app3",
      "app4"
    ],
    "environment": [
      "dev",
      "test",
      "qa"
    ],
    "portfolio": "safeco",
    "release": "2016_01",
    "specific_settings": {
      "environment" : {
        "ete" : {"release" : "mary_poppins"}
      },
      "appName" : {
        "app1": {
          "portfolio": "claims2"
        },
        "app2": {
          "release": "2016_08"
        }
      }
    }
  }
 }

var profile_settings2 = {
"settings": {
    "appName": [
      "app5",
      "app6",
      "app7",
      "app8"
    ],
    "environment": [
      "qa",
      "ete",
      "prod"
    ],
    "portfolio": "safeco",
    "release": "2016_01",
    "specific_settings": {
      "environment" : {
        "ete" : {"release" : "mary_poppins"}
      },
      "appName" : {
        "app1": {
          "portfolio": "claims2"
        },
        "app2": {
          "release": "2016_08"
        }
      }
    }
  }
 }

var profile_settings3 = {
"settings": {
    "appName": [
      "app5",
      "app6",
      "app7",
      "app8"
    ],
    "environment": [
      "qa",
      "ete",
      "prod"
    ],
    "portfolio": "${portfolio}",
    "release": "${release}",
    "specific_settings": {
      "environment" : {
        "ete" : {"release" : "${portfolio}_mary_poppins"}
      },
      "appName" : {
        "app1": {
          "portfolio": "claims2"
        },
        "app2": {
          "release": "2016_08"
        }
      }
    }
  }
 }

var omega_plan = {
  "settings": {
    "appName": [
      "app1",
      "app2",
      "app3",
      "app4",
      "app5",
      "app6"
    ],
    "environment": [
      "dev",
      "test",
      "qa",
      "ete",
      "prod",
      "prod2"
    ],
    "portfolio": "safeco",
    "release": "2016_01",
    "specific_settings": {
      "environment": {
        "ete": {
          "release": "mary_poppins"
        }
      },
      "appName": {
        "app1": {
          "portfolio": "claims2"
        },
        "app2": {
          "release": "2016_08"
        }
      }
    }
  },
  "template_plan": {
    "phases": [
      {
        "title": "build for $<appName>",
        "tasks": [
          {
            "meta": {
              "repeat_on": "appName",
              "task_type": "xlr.CreateAndStartSubRelease",
              "parent_task_type": "xlrelease.CustomScriptTask"
            },
            "title": "$<appName> Build",
            "xlrServer": "local",
            "username": "admin",
            "templateName": "WASLP_BUILD",
            "releaseTitle": "Build $<appName>",
            "releaseDescription": "Build $<appName>",
            "variables": "appName=$<appName>",
            "asynch": "false"
          }
        ]
      },
      {
        "title": "deploy for $<release> to  $<environment> ",
        "meta": {
          "repeat_on": "environment"
        },
        "containers": [
          {
            "tasks": [
              {
                "meta": {
                  "repeat_on": "appName",
                  "task_type": "xlr.CreateAndStartSubRelease",
                  "parent_task_type": "xlrelease.CustomScriptTask"
                },
                "title": "$<appName> deploy",
                "xlrServer": "local",
                "username": "admin",
                "templateName": "WASLP_DEPLOY",
                "releaseTitle": "Deploy $<appName> to $<environment>",
                "releaseDescription": "Deploy $<appName> to $<environment>",
                "variables": "appName=$<appName>,portfolio=$<portfolio>,release=$<release>"
              }
            ]
          },
          {
            "meta": {
              "type": "xlrelease.ParallelGroup",
              "max_tasks": "3"
            },
            "tasks": [
              {
                "meta": {
                  "repeat_on": "appName",
                  "task_type": "xlr.CreateAndStartSubRelease",
                  "parent_task_type": "xlrelease.CustomScriptTask"
                },
                "title": "$<appName> deploy",
                "xlrServer": "local",
                "username": "admin",
                "templateName": "WASLP_DEPLOY",
                "releaseTitle": "Deploy $<appName> to $<environment>",
                "releaseDescription": "Deploy $<appName> to $<environment>",
                "variables": "appName=$<appName>,portfolio=$<portfolio>,release=$<release>"
              }
            ]
          }
        ]
      }
    ]
  }
}

var actual_plan = {
  "settings": {
    "appName": [
      "test1",
      "test2",
      "test3"
    ],
    "environment": [
      "dev",
      "test",
      "ua"
    ],
    "notificationGroup" : "wvos@xebia.com",
    "stream" : "c",
    "portfolio": "claims",
    "release": "2016_01",
    "build_template": "WASLP_BUILD",
    "deployment_template": "WASLP_DEPLOY"
  },
  "template_plan": {
    "phases": [
      {
        "title": "deploy dar package to $<environment>",
        "meta": {
          "repeat_on": "environment"
        },
            "tasks": [

                  {
                    "meta": {
                      "task_type": "xlrelease.CreateReleaseTask"
                    },
                    "title": "test create release",
                    "newReleaseTitle": "test1",
                    "templateId": "test",
                    "startRelease": "true",
                    "createdReleaseId": "${test1}"
                  },
                   {
                    "meta": {
                      "task_type": "xlrelease.GateTask"
                    },
                    "title": "test",
                    "overdueNotified": "false",
                    "waitForScheduledStartDate": "true",
                    "dependencies": [
                        {
                            "targetId": "${test1}",
                        }
                    ]
          }
        ]
      }
        ]
      }
  }





var triggertest_hitcount = triggertest_hitcount || 0
var trigger_test1 =[{ "properties" :  { last_good_build: "test_build_1",last_known_build: "test_build_3"} },
                    { "properties" :  { last_good_build: "test_build_2",last_known_build: "test_build_3"} },
                    { "properties" :  { last_good_build: "test_build_3",last_known_build: "test_build_3"} },
                    { "properties" :  { last_good_build: "test_build_4",last_known_build: "test_build_3"} },
                    { "properties" :  { last_good_build: "test_build_5",last_known_build: "test_build_3"} },
                    { "properties" :  { last_good_build: "test_build_6",last_known_build: "test_build_3"} },
                    { "properties" :  { last_good_build: "test_build_7",last_known_build: "test_build_3"} },
                    { "properties" :  { last_good_build: "test_build_8",last_known_build: "test_build_3"} },
                    { "properties" :  { last_good_build: "test_build_9",last_known_build: "test_build_3"} },
                    { "properties" :  { last_good_build: "test_build_10",last_known_build: "test_build_3"} },
                    { "properties" :  { last_good_build: "test_build_11",last_known_build: "test_build_3"} }]



Sandbox.define('/api/profile/one', 'GET', function(req, res) {


  // respond with the user or an empty object if user doesnt exist
  return res.json(profile_one)
})
Sandbox.define('/api/profile/two', 'GET', function(req, res) {


  // respond with the user or an empty object if user doesnt exist
  return res.json(profile_two)
})
Sandbox.define('/api/profile/plan', 'GET', function(req, res) {


  // respond with the user or an empty object if user doesnt exist
  return res.json(profile_plan)
})

Sandbox.define('/api/profile/plan2', 'GET', function(req, res) {


  // respond with the user or an empty object if user doesnt exist
  return res.json(profile_plan2)
})

Sandbox.define('/api/profile/settings', 'GET', function(req, res) {


  // respond with the user or an empty object if user doesnt exist
  return res.json(profile_settings1)
})
Sandbox.define('/api/profile/settings2', 'GET', function(req, res) {


  // respond with the user or an empty object if user doesnt exist
  return res.json(profile_settings2)
})

Sandbox.define('/api/profile/settings3', 'GET', function(req, res) {


  // respond with the user or an empty object if user doesnt exist
  return res.json(profile_settings3)
})

Sandbox.define('/api/profile/omega', 'GET', function(req, res) {


  // respond with the user or an empty object if user doesnt exist
  return res.json(omega_plan)
})
Sandbox.define('/api/profile/actual', 'GET', function(req, res) {


  // respond with the user or an empty object if user doesnt exist
  return res.json(actual_plan)
})
Sandbox.define('/quicktest', 'GET', function(req, res) {


  // respond with the user or an empty object if user doesnt exist
  return res.json(default_answer)
})

Sandbox.define('/test/error', 'GET', function(req, res){
 return res.json(400, { error: { message: "testing error" } })
})


Sandbox.define('/triggertest1', 'GET', function(req, resp ) {

  triggertest_hitcount = triggertest_hitcount + 1

  return resp.json(trigger_test1[triggertest_hitcount])
})