---
title: 'Webhook Events'
category: 'Webhooks'
position: 10501
---

Webhooks are currently in beta and schema changes are frequent.


Each webhook event is structured as follows:
```json
{
  "id": "<EVENT_ID>",
  "type": "<EVENT_TYPE>",
  "createdAt": "<UNIX_TIMESTAMP>",
  "data": {
    "object": { ... },
    ... // Additional fields
  }
}
```

- `id`: A unique id to identify this webhook event delivery.
- `type`: The triggered webhook event's shortcode.
- `createdAt`: A UNIX timestamp of when this event was created.
- `data.object`: The object associated with the webhook event. For e.g., in the case of `analysis_run.updated` webhook event, `data.object` is an `AnalysisRun` object. 
- Other than `data.object` there can be additional fields depending on the webhook event.

### Analysis Updated


This event does not conform to the above mentioned webhook event structure and is **deprecated** in favor of [`analysis_run.updated`](#analysis-run-updated) event.
<!-- It will no longer be supported after **Tuesday, January 18, 2022**. This means that you'd no longer be receiving any more webhook events after that date, and the existing subscription would be deleted. At your earliest convenience, migrate to the new [`analysis_run.updated`](#analysis-run-updated) event. -->



**Event shortcode**: `analysis.updated`

This event is triggered every time one of the configured analyzer returns a result for a particular run. Note, for a single run, there will be multiple events triggered, one for each analyzer. All the past checks for this run will also be present in the payload (`all_checks`). The current one is present in `current_check`.

#### Sample Payload

```json
{
  "id": "370843415782363013",
  "type": "analysis.updated",
  "created": "2021-09-02T07:58:20.654073",
  "version": "v1.0.0",
  "data": {
    "repository_id": "UmVwb3NpdG9yeTplZGVtZ24=",
    "owner": {
      "id": "T3duZXI6emtyd2t3",
      "login": "acme-corp"
    },
    "last_updated_at": "2021-09-02T07:58:20.101990+00:00",
    "run_id": "ce3844a5-8b09-423c-b020-67d7b0ea9d00",
    "status": "fail",
    "branch_name": "master",
    "commit_sha": "cf5403a9b99384c7e6df02abd935cbda1d979523",
    "total_raised": 110,
    "total_resolved": 0,
    "all_checks": {
      "python": {
        "check_id": "Q2hlY2s6eWx3b2prZw==",
        "raised": 110,
        "resolved": 0
      },
      "javascript": {
        "check_id": "Q2hlY2s6cWRqeWdrZw==",
        "raised": 0,
        "resolved": 0
      }
    },
    "current_check": {
      "python": {
        "check_id": "Q2hlY2s6eWx3b2prZw==",
        "raised": 110,
        "resolved": 0
      }
    },
    "errors": []
  }
}
```

### Analysis Run Started

**Event shortcode**: `analysis_run.started`

`data.object` is an `AnalysisRun`.

This event is triggered every time an analysis run is triggered. Since this event is triggered each time an analysis run starts, expect the `summary` attribute to be empty.

#### Sample Payload

```json
{
  "id": "390880430405976346",
  "type": "analysis_run.started",
  "createdAt": 1642512492,
  "data": {
    "object": {
      "id": "UnVaOmZvcG64eQ==",
      "object": "AnalysisRun",
      "runUid": "75d0dd35-d12c-4f8d-67f1-494b9c1abcdef",
      "status": "PENDING",
      "branchName": "patch-1",
      "baseOid": "07e790b6d5a7e720acf5f2af4b707c2ff1cabceed",
      "commitOid": "99da4fzf3e680e28c3z86afebz3693d3f80bf67b",
      "createdAt": 1642069941,
      "updatedAt": 1642069966,
      "repository": {
        "id": "UmVwb2Npb99yeTp7z3Z23HY=",
        "object": "Repository",
        "name": "demo-python",
        "vcsProvider": "GITHUB",
        "vcsUrl": "https://github.com/deepsourcelabs/demo-python",
        "defaultBranch": "master",
        "latestCommitOid": "07e790b6d5a7e720acf5f2af4b707c2ff1cabceed",
        "isPrivate": false,
        "isActivated": true,
        "account": {
          "id": "T2dzZXIYmm1n2nBi",
          "object": "Account",
          "login": "deepsourcelabs",
          "vcsProvider": "GITHUB",
          "type": "TEAM",
          "avatarUrl": "https://static.deepsource.io/avatars/avatar.png",
          "vcsUrl": "https://github.com/deepsourcelabs"
        }
      },
      "summary": {
        "object": "AnalysisRunSummary",
        "occurrencesIntroduced": 0,
        "occurrencesResolved": 0,
        "occurrenceDistributionByAnalyzer": [
          {
            "object": "OccurrenceDistributionByAnalyzer",
            "analyzerShortcode": "python",
            "introduced": 0
          }
        ],
        "occurrenceDistributionByCategory": []
      },
      "checks": [
        {
          "id": "Q2haY2s9Ylmno2ph",
          "object": "Check",
          "sequence": 1,
          "status": "PENDING",
          "analyzer": {
            "id": "QW6hbHz6Zxi6bWtiABZ6",
            "object": "Analyzer",
            "shortcode": "python",
            "name": "Python",
            "logoUrl": "https://static.deepsource.io/analyzer_logos/python.svg"
          },
          "createdAt": 1642512491,
          "updatedAt": 1642512491,
          "finishedAt": null,
          "summary": {
            "object": "CheckSummary",
            "occurrencesIntroduced": 0,
            "occurrencesResolved": 0,
            "occurrenceDistributionByCategory": []
          }
        }
      ]
    }
  }
}
```

### Analysis Run Updated

**Event shortcode**: `analysis_run.updated`

`data.object` is an `AnalysisRun`.

This event is triggered every time one of the configured analyzer returns a result for a particular run. For a single run, since any number of analyzers can be configured, there will be multiple events triggered: one per analyzer/check.

All the past checks associated with this run will also be present in the payload (`checks`). The last check in the list is the check that triggered this event.

#### Sample Payload

```json
{
  "id": "390137996571050950",
  "type": "analysis_run.updated",
  "createdAt": 1642069966,
  "data": {
    "object": {
      "id": "UnVaOmZvcG64eQ==",
      "object": "AnalysisRun",
      "runUid": "75d0dd35-d12c-4f8d-67f1-494b9c1abcdef",
      "status": "PENDING",
      "branchName": "patch-1",
      "baseOid": "07e790b6d5a7e720acf5f2af4b707c2ff1cabceed",
      "commitOid": "99da4fzf3e680e28c3z86afebz3693d3f80bf67b",
      "createdAt": 1642069941,
      "updatedAt": 1642069966,
      "repository": {
        "id": "UmVwb2Npb99yeTp7z3Z23HY=",
        "object": "Repository",
        "name": "demo-go",
        "vcsProvider": "GITHUB",
        "vcsUrl": "https://github.com/deepsourcelabs/demo-go",
        "defaultBranch": "master",
        "latestCommitOid": "07e790b6d5a7e720acf5f2af4b707c2ff1cabceed",
        "isPrivate": false,
        "isActivated": true,
        "account": {
          "id": "T2dzZXIYmm1n2nBi",
          "object": "Account",
          "login": "deepsourcelabs",
          "vcsProvider": "GITHUB",
          "type": "TEAM",
          "avatarUrl": "https://static.deepsource.io/avatars/avatar.png",
          "vcsUrl": "https://github.com/deepsourcelabs"
        }
      },
      "summary": {
        "object": "AnalysisRunSummary",
        "occurrencesIntroduced": 6,
        "occurrencesResolved": 0,
        "occurrenceDistributionByAnalyzer": [
          {
            "object": "OccurrenceDistributionByAnalyzer",
            "analyzerShortcode": "docker",
            "introduced": 0
          },
          {
            "object": "OccurrenceDistributionByAnalyzer",
            "analyzerShortcode": "secrets",
            "introduced": 0
          },
          {
            "object": "OccurrenceDistributionByAnalyzer",
            "analyzerShortcode": "go",
            "introduced": 6
          }
        ],
        "occurrenceDistributionByCategory": [
          {
            "object": "OccurrenceDistributionByCategory",
            "category": "ANTI_PATTERN",
            "introduced": 4
          },
          {
            "object": "OccurrenceDistributionByCategory",
            "category": "BUG_RISK",
            "introduced": 2
          }
        ]
      },
      "checks": [
        {
          "id": "Q5zyY2s2onlyZW53",
          "object": "Check",
          "sequence": 2,
          "status": "PENDING",
          "analyzer": {
            "id": "Q3ZhbZl6ZXI7b1x3cW5i",
            "object": "Analyzer",
            "shortcode": "docker",
            "name": "Docker",
            "logoUrl": "https://static.deepsource.io/analyzer_logos/docker.svg"
          },
          "createdAt": 1642069941,
          "updatedAt": 1642069942,
          "finishedAt": null,
          "summary": {
            "object": "CheckSummary",
            "occurrencesIntroduced": 0,
            "occurrencesResolved": 0,
            "occurrenceDistributionByCategory": []
          }
        },
        {
          "id": "Z8abY2s6YzF4cd5k",
          "object": "Check",
          "sequence": 3,
          "status": "SUCCESS",
          "analyzer": {
            "id": "DZ9hbHl6ZXI6aHpjZW26",
            "object": "Analyzer",
            "shortcode": "secrets",
            "name": "Secrets",
            "logoUrl": "https://static.deepsource.io/analyzer_logos/secrets.svg"
          },
          "createdAt": 1642069941,
          "updatedAt": 1642069946,
          "finishedAt": 1642069945,
          "summary": {
            "object": "CheckSummary",
            "occurrencesIntroduced": 0,
            "occurrencesResolved": 0,
            "occurrenceDistributionByCategory": []
          }
        },
        {
          "id": "P1hlF1s6Ymd2Z3bv",
          "object": "Check",
          "sequence": 1,
          "status": "FAILURE",
          "analyzer": {
            "id": "YU5hbHl6API6c78ieXZ6",
            "object": "Analyzer",
            "shortcode": "go",
            "name": "Go",
            "logoUrl": "https://static.deepsource.io/analyzer_logos/go.svg"
          },
          "createdAt": 1642069941,
          "updatedAt": 1642069966,
          "finishedAt": 1642069966,
          "summary": {
            "object": "CheckSummary",
            "occurrencesIntroduced": 6,
            "occurrencesResolved": 0,
            "occurrenceDistributionByCategory": [
              {
                "object": "OccurrenceDistributionByCategory",
                "category": "ANTI_PATTERN",
                "introduced": 4
              },
              {
                "object": "OccurrenceDistributionByCategory",
                "category": "BUG_RISK",
                "introduced": 2
              }
            ]
          }
        }
      ]
    }
  }
}
```


### Autofix Run Started

**Event shortcode**: `autofix_run.started`

`data.object` is an `AutofixRun`.

This event is triggered when a new Autofix is created.

#### Sample Payload

```json
{
  "id": "402328203101736027",
  "type": "autofix_run.started",
  "createdAt": 1649335896,
  "data": {
    "object": {
      "object": "AutofixRun",
      "runUid": "8d494192-a837-49d7-a3a9-a0ea78dc667d",
      "createdAt": 1649335896,
      "finishedAt": null,
      "status": "PENDING",
      "sourceCommit": {
        "sha": "898d5b958d9cca3e6ced85002e66748e149760f7",
        "branch": "feature-branch"
      },
      "autofixCommit": null,
      "sourcePullRequest": {
        "number": 1,
        "url": "https://github.com/deepsourcelabs/demo-python/pull/1",
        "title": "Change methods not using its bound instance to staticmethods"
      },
      "autofixPullRequest": null,
      "affectedIssues": [
        {
          "id": "SXNzdWU6enJnb2ti",
          "object": "Issue",
          "shortcode": "PYL-R0201",
          "title": "Consider decorating method with `@staticmethod`",
          "shortDescription": "The method doesn't use its bound instance. Decorate this method with `@staticmethod` decorator, so that Python does not have to instantiate a bound method for every instance of this class thereby saving memory and computation. Read more about staticmethods [here](https://docs.python.org/3/library/functions.html#staticmethod).",
          "category": "PERFORMANCE",
          "autofixAvailable": true,
          "isRecommended": false,
          "analyzer": {
            "id": "QW5hbHl6ZXI6bGtiZXZ6",
            "object": "Analyzer",
            "shortcode": "python",
            "name": "Python",
            "logoUrl": "https://dev-asgard-static.s3.us-east-1.amazonaws.com/analyzer_logos/python.svg"
          }
        }
      ],
      "repository": {
        "id": "UmVwb2Npb99yeTp7z3Z23HY=",
        "object": "Repository",
        "name": "demo-python",
        "vcsProvider": "GITHUB",
        "vcsUrl": "https://github.com/deepsourcelabs/demo-python",
        "defaultBranch": "master",
        "latestCommitOid": "07e790b6d5a7e720acf5f2af4b707c2ff1cabceed",
        "isPrivate": false,
        "isActivated": true,
        "account": {
          "id": "T2dzZXIYmm1n2nBi",
          "object": "Account",
          "login": "deepsourcelabs",
          "vcsProvider": "GITHUB",
          "type": "TEAM",
          "avatarUrl": "https://static.deepsource.io/avatars/avatar.png",
          "vcsUrl": "https://github.com/deepsourcelabs"
        }
      }
    }
  }
}
```


### Autofix Run Updated

**Event shortcode**: `autofix_run.updated`

`data.object` is an `AutofixRun`.

This event is triggered when the status or corresponding PR of an Autofix is updated.

#### Sample Payload

```json
{
  "id": "402328306801706043",
  "type": "autofix_run.updated",
  "createdAt": 1649335958,
  "data": {
    "object": {
      "object": "AutofixRun",
      "runUid": "8d494192-a837-49d7-a3a9-a0ea78dc667d",
      "createdAt": 1649335896,
      "finishedAt": 1649335901,
      "status": "SUCCESS",
      "sourceCommit": {
        "sha": "898d5b958d9cca3e6ced85002e66748e149760f7",
        "branch": "master"
      },
      "autofixCommit": null,
      "sourcePullRequest": null,
      "autofixPullRequest": {
        "number": 1,
        "url": "https://github.com/deepsourcelabs/demo-python/pull/1",
        "title": "Change methods not using its bound instance to staticmethods",
        "status": "OPEN"
      },
      "affectedIssues": [
        {
          "id": "SXNzdWU6enJnb2ti",
          "object": "Issue",
          "shortcode": "PYL-R0201",
          "title": "Consider decorating method with `@staticmethod`",
          "shortDescription": "The method doesn't use its bound instance. Decorate this method with `@staticmethod` decorator, so that Python does not have to instantiate a bound method for every instance of this class thereby saving memory and computation. Read more about staticmethods [here](https://docs.python.org/3/library/functions.html#staticmethod).",
          "category": "PERFORMANCE",
          "autofixAvailable": true,
          "isRecommended": false,
          "analyzer": {
            "id": "QW5hbHl6ZXI6bGtiZXZ6",
            "object": "Analyzer",
            "shortcode": "python",
            "name": "Python",
            "logoUrl": "https://dev-asgard-static.s3.us-east-1.amazonaws.com/analyzer_logos/python.svg"
          }
        }
      ],
      "repository": {
        "id": "UmVwb2Npb99yeTp7z3Z23HY=",
        "object": "Repository",
        "name": "demo-python",
        "vcsProvider": "GITHUB",
        "vcsUrl": "https://github.com/deepsourcelabs/demo-python",
        "defaultBranch": "master",
        "latestCommitOid": "07e790b6d5a7e720acf5f2af4b707c2ff1cabceed",
        "isPrivate": false,
        "isActivated": true,
        "account": {
          "id": "T2dzZXIYmm1n2nBi",
          "object": "Account",
          "login": "deepsourcelabs",
          "vcsProvider": "GITHUB",
          "type": "TEAM",
          "avatarUrl": "https://static.deepsource.io/avatars/avatar.png",
          "vcsUrl": "https://github.com/deepsourcelabs"
        }
      }
    }
  }
}
```


### Repository Analysis Activated

**Event shortcode**: `repository.analysis.activated`

`data.object` is a `Repository`.

This event is triggered when analysis is activated on a repository.

#### Sample Payload

```json
{
  "id": "370847944204618991",
  "type": "repository.analysis.activated",
  "createdAt": 1642070207,
  "data": {
    "object": {
        "id": "UmVwb2Npb99yeTp7z3Z23HY=",
        "object": "Repository",
        "name": "demo-go",
        "vcsProvider": "GITHUB",
        "vcsUrl": "https://github.com/deepsourcelabs/demo-go",
        "defaultBranch": "master",
        "latestCommitOid": "07e790b6d5a7e720acf5f2af4b707c2ff1cabceed",
        "isPrivate": false,
        "isActivated": true,
        "account": {
          "id": "T2dzZXIYmm1n2nBi",
          "object": "Account",
          "login": "deepsourcelabs",
          "vcsProvider": "GITHUB",
          "type": "TEAM",
          "avatarUrl": "https://static.deepsource.io/avatars/avatar.png",
          "vcsUrl": "https://github.com/deepsourcelabs"
        }
    }
  }
}
```

### Repository Analysis Deactivated

**Event shortcode**: `repository.analysis.deactivated`

`data.object` is a `Repository`.

This event is triggered when analysis is deactivated on a repository.

#### Sample Payload

```json
{
  "id": "370847944204618991",
  "type": "repository.analysis.deactivated",
  "createdAt": 1642070207,
  "data": {
    "object": {
        "id": "UmVwb2Npb99yeTp7z3Z23HY=",
        "object": "Repository",
        "name": "demo-go",
        "vcsProvider": "GITHUB",
        "vcsUrl": "https://github.com/deepsourcelabs/demo-go",
        "defaultBranch": "master",
        "latestCommitOid": "07e790b6d5a7e720acf5f2af4b707c2ff1cabceed",
        "isPrivate": false,
        "isActivated": false,
        "account": {
          "id": "T2dzZXIYmm1n2nBi",
          "object": "Account",
          "login": "deepsourcelabs",
          "vcsProvider": "GITHUB",
          "type": "TEAM",
          "avatarUrl": "https://static.deepsource.io/avatars/avatar.png",
          "vcsUrl": "https://github.com/deepsourcelabs"
        }
    }
  }
}
```

### Repository Issue Introduced

**Event shortcode**: `repository_issue.introduced`

`data.object` is a `RepositoryIssue`.

`data.issueOccurrencesIntroduced` is the total count of issue occurrences introduced in the commit.

This event is triggered whenever an issue has been detected in the default branch of the repository.

For instance, if 3 occurrences of issue X and 5 occurrences of issue Y are introduced in the default branch after a commit, two events, one for each issue will be triggered.

This event is not triggered for full runs on the default branch. A full run is when your repository's full code base is analyzed. This happens, e.g., when the repository is (re)activated, or if the `.deepsource.toml` gets updated. This is to prevent noise which can arise from a large number of issues being reported in such runs.

#### Sample Payload

```json
{
  "id": "380143400734187723",
  "type": "repository_issue.introduced",
  "createdAt": 1642070207,
  "data": {
    "object": {
      "id": "PhVnb3NpdG9yeUl8c3VlOnp4a2E2bA==",
      "object": "RepositoryIssue",
      "repository": {
        "id": "ZAb3b3NpdG9yeTp9b3Z2eHY=",
        "object": "Repository",
        "name": "demo-go",
        "vcsProvider": "GITHUB",
        "vcsUrl": "https://github.com/deepsourcelabs/demo-go",
        "defaultBranch": "master",
        "latestCommitOid": "72df1dcc3dd4d3211746a236f553065416d3766723",
        "isPrivate": false,
        "isActivated": true,
        "account": {
          "id": "Y2duZXI6Y2dd4hBi",
          "object": "Account",
          "login": "deepsourcelabs",
          "vcsProvider": "GITHUB",
          "vcsUrl": "https://github.com/deepsourcelabs",
          "type": "TEAM",
          "avatarUrl": "https://static.deepsource.io/avatar.png"
        }
      },
      "issue": {
        "id": "UIOzdWU6end2b23i",
        "object": "Issue",
        "shortcode": "CRT-A0016",
        "title": "Simplify slice expression to sliced value itself",
        "shortDescription": "If a value is of type slice already, it need not be converted to slice again.",
        "category": "ANTI_PATTERN",
        "autofixAvailable": true,
        "isRecommended": false,
        "analyzer": {
          "id": "TW5hbTl6ZTI6c12ieXZ6",
          "object": "Analyzer",
          "shortcode": "go",
          "name": "Go",
          "logoUrl": "https://static.deepsource.io/analyzer_logos/go.svg"
        }
      },
      "occurrences": [
        {
          "id": "Q10lY2tJc7N1ZTpZeGpxZW9l",
          "object": "Occurrence",
          "title": "could simplify allProducts[:] to allProducts",
          "path": "code.go",
          "beginLine": 160,
          "beginColumn": 14,
          "endLine": 160,
          "endColumn": 14
        }
      ]
    },
    "issueOccurrencesIntroduced": 1
  }
}
```

### Repository Issue Resolved

**Event shortcode**: `repository_issue.resolved`

`data.object` is a `RepositoryIssue`.`

`data.issueOccurrencesResolved` is the total count of issue occurrences resolved in the commit.

`data.object.occurrences` will always be an empty list.

This event is triggered whenever an issue is resolved in the default branch of the repository.

For instance, if 3 occurrences of issue X and 5 occurrences of issue Y are resolved in the default branch after a commit, two events, one for each issue will be triggered.

This event is not triggered for full runs on the default branch. A full run is when your repository's full code base is analyzed. This happens, e.g., when the repository is (re)activated, or if the `.deepsource.toml` gets updated. This is to prevent noise which can arise from a large number of issues being reported in such runs.

#### Sample Payload

```json
{
  "id": "380143400734187723",
  "type": "repository_issue.resolved",
  "createdAt": 1642070207,
  "data": {
    "object": {
      "id": "PhVnb3NpdG9yeUl8c3VlOnp4a2E2bA==",
      "object": "RepositoryIssue",
      "repository": {
        "id": "ZAb3b3NpdG9yeTp9b3Z2eHY=",
        "object": "Repository",
        "name": "demo-go",
        "vcsProvider": "GITHUB",
        "vcsUrl": "https://github.com/deepsourcelabs/demo-go",
        "defaultBranch": "master",
        "latestCommitOid": "72df1dcc3dd4d3211746a236f553065416d3766723",
        "isPrivate": false,
        "isActivated": true,
        "account": {
          "id": "Y2duZXI6Y2dd4hBi",
          "object": "Account",
          "login": "deepsourcelabs",
          "vcsProvider": "GITHUB",
          "vcsUrl": "https://github.com/deepsourcelabs",
          "type": "TEAM",
          "avatarUrl": "https://static.deepsource.io/avatar.png"
        }
      },
      "issue": {
        "id": "UIOzdWU6end2b23i",
        "object": "Issue",
        "shortcode": "CRT-A0016",
        "title": "Simplify slice expression to sliced value itself",
        "shortDescription": "If a value is of type slice already, it need not be converted to slice again.",
        "category": "ANTI_PATTERN",
        "autofixAvailable": true,
        "isRecommended": false,
        "analyzer": {
          "id": "TW5hbTl6ZTI6c12ieXZ6",
          "object": "Analyzer",
          "shortcode": "go",
          "name": "Go",
          "logoUrl": "https://static.deepsource.io/analyzer_logos/go.svg"
        }
      },
      "occurrences": []
    },
    "issueOccurrencesResolved": 1
  }
}
```


### Team Member Added

**Event shortcode**: `team_member.added`

`data.object` is a `TeamMember`.

This event is triggered when a new member is added to a team.

#### Sample Payload

```json
{
  "id": "370847944204618991",
  "type": "team_member.added",
  "createdAt": 1642070207,
  "data": {
    "object": {
      "object": "TeamMember",
      "role": "MEMBER",
      "isOwner": false,
      "joinedAt": 1647264507,
      "team": {
        "id": "Y2duZXI6Y2dd4hBi",
        "object": "Account",
        "login": "deepsourcelabs",
        "vcsProvider": "GITHUB",
        "vcsUrl": "https://github.com/deepsourcelabs",
        "type": "TEAM",
        "avatarUrl": "https://static.deepsource.io/avatar.png"
      },
      "user": {
        "id": "VXNlcla6529Bk2I=",
        "object": "User",
        "email": "john.doe@example.com",
        "firstName": "John",
        "lastName": "Doe"
      }
    }
}
```

### Team Member Removed

**Event shortcode**: `team_member.removed`

`data.object` is a `TeamMember`.

This event is triggered when a team member is removed.

#### Sample Payload

```json
{
  "id": "370847944204618991",
  "type": "team_member.removed",
  "createdAt": 1642070207,
  "data": {
    "object": {
      "object": "TeamMember",
      "role": "MEMBER",
      "isOwner": false,
      "joinedAt": 1647264507,
      "team": {
        "id": "Y2duZXI6Y2dd4hBi",
        "object": "Account",
        "login": "deepsourcelabs",
        "vcsProvider": "GITHUB",
        "vcsUrl": "https://github.com/deepsourcelabs",
        "type": "TEAM",
        "avatarUrl": "https://static.deepsource.io/avatar.png"
      },
      "user": {
        "id": "VXNlcla6529Bk2I=",
        "object": "User",
        "email": "john.doe@example.com",
        "firstName": "John",
        "lastName": "Doe"
      }
    }
}
```

### Team Member Role Updated

**Event shortcode**: `team_member.updated`

`data.object` is a `TeamMember`.

`data.oldRole` is the user's old role in the team.

`data.newRole` is the user's new role in the team.

This event is triggered when the role of a team member is changed.

#### Sample Payload

```json
{
  "id": "370847944204618991",
  "type": "team_member.updated",
  "createdAt": 1642070207,
  "data": {
    "object": {
      "object": "TeamMember",
      "role": "CONTRIBUTOR",
      "isOwner": false,
      "joinedAt": 1647264507,
      "team": {
        "id": "Y2duZXI6Y2dd4hBi",
        "object": "Account",
        "login": "deepsourcelabs",
        "vcsProvider": "GITHUB",
        "vcsUrl": "https://github.com/deepsourcelabs",
        "type": "TEAM",
        "avatarUrl": "https://static.deepsource.io/avatar.png"
      },
      "user": {
        "id": "VXNlcla6529Bk2I=",
        "object": "User",
        "email": "john.doe@example.com",
        "firstName": "John",
        "lastName": "Doe"
      }
    },
    "oldRole": "MEMBER",
    "newRole": "CONTRIBUTOR"
}
```

### Test

**Event shortcode:** `test.event`

This event **does not** correspond to any activity on DeepSource. It is used exclusively for testing and verification of your endpoint.

#### Sample Payload

```json
{
  "id": "370847944204618991",
  "type": "test.event",
  "createdAt": 1642070207,
  "data": {
    "test": true
  }
}
```
