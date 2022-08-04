---
title: "Repository settings"
category: "Dashboard"
position: 405
---

You can manage several Settings to configure your analysis specifically to that repository. To access repository settings, Go to the [analysis information page](#) of any repository and click on the **Settings** tab.

<p class="text-center">
  <img src="/images/docs/dashboard/repo-overview/settings.png" style="width: 95%; margin: auto; display: block;" class="figure" alt="Repository Settings">
</p>

## General

When you go to the repository settings, General settings will be selected by default. In the **General** Settings, you can control the default analysis branch, issue configuration, analysis settings, etc.

### Default analysis branch

The default analysis branch is the branch that will be analyzed by DeepSource every time a change is made to that branch. The first-time analysis of the repository is made on the **master/main** branch by default.

To change the default analysis branch, you can enter the branch name in the box and press enter. The branch will be updated, and it will initiate the analysis on that branch.

<p class="text-center">
  <img src="/images/docs/dashboard/repo-settings/default_analysis_branch.png" style="width: 95%; margin: auto; display: block;" class="figure" alt="Repository Settings">
</p>

### Enable git submodules

You can enable analysis on any git submodules in your repository. Toggle **"Enable git submodules"** in `Settings > General`.

If DeepSource [starts complaining about cloning](#), you need to give read access to these submodules (see the screencast below):

1. Navigate to `Settings > SSH Access` and click on `+ Generate SSH key pair`.
1. Copy the key and paste it as a deploy key in the submodule repository.


	If you have multiple submodules, you must add the generated SSH key to all submodules. In case of GitHub, this won't work – it would complain that this key is in use elsewhere.  To fix this, create a <a href="https://docs.github.com/en/developers/overview/managing-deploy-keys#machine-users">machine user</a>, add the generated SSH key for that user, and give this machine user access to all your submodule repositories.


### Analysis settings

In the Analysis setting, you can control the scope of analysis, generate or modify the configuration, and activate or deactivate the analysis on the repository.

#### Analysis scope

DeepSource offers two different modes of analysis scopes that you can set according to your choice.

- **Granular analysis:** This is the default analysis scope in which issues will be reported only on newly added (or) modified lines and recentyly introduced issues on the file due to changed lines.

- **Broad analysis:** This is another mode that you can activate to detect and list all the issues of that file that are raised.

Read this [discuss post](https://discuss.deepsource.io/t/whats-the-difference-between-granular-and-broad-analysis-scopes/66/2) to know more.

<p class="text-center">
  <img src="/images/docs/dashboard/repo-settings/scope.png" style="width: 95%; margin: auto; display: block;" class="figure" alt="Changing scope of analysis">
</p>

#### Analysis configuration

You can click on the **Generate configuration** button to generate the `.deepsource.toml` file at the repository's root. You can also use this to modify the configuration.

#### See also

- [Generating configuration (`.deepsource.toml`) file](#)

<p class="text-center">
  <img src="/images/docs/dashboard/repo-settings/config.png" style="width: 95%; margin: auto; display: block;" class="figure" alt="Generating deepsource configuration file">
</p>

#### Analysis status

You can **Deactivate analysis** in a repository whenever you want. To do so, you need to go to the General settings under Repository settings. When the analysis on your repository is active, the button will be green and display the status **Analysis active** on the button.

The status on the button will change to **Deactivate analysis** in red when you hover the cursor on the button. Click on it to deactivate analysis.

<p class="text-center">
  <img src="/images/docs/dashboard/repo-settings/status1.png" style="width: 95%; margin: auto; display: block;" class="figure" alt="Active analysis">
</p>

<p class="text-center">
  <img src="/images/docs/dashboard/repo-settings/status2.png" style="width: 95%; margin: auto; display: block;" class="figure" alt="Deactivate analysis">
</p>

## Badges

You can embed these badges in the project's README, wiki, or website to display your repository's code quality status, which is linked to the DeepSource dashboard of your project.

To add the badge, click on the **Copy** button to copy the badge code and paste it into the project's README, wiki, or website.

- **Preview:** In this section, you will see the preview of the badge and how it will look in your README.

<p class="text-center">
  <img src="/images/docs/dashboard/repo-settings/preview.png" style="width: 95%; margin: auto; display: block;" class="figure" alt="Badge preview">
</p>

- **Badge Type:** There are two types of badges: **Active issues** and **Resolved issues**. You can select any one of them; the Preview and the badge code will be updated. You can copy the code and add it to your README.

<p class="text-center">
  <img src="/images/docs/dashboard/repo-settings/type.png" style="width: 95%; margin: auto; display: block;" class="figure" alt="Badge type">
</p>

- **Trend:** You can toggle this on to add a trendline showing how the metric's value (Active issues or Resolved issues) has varied in the last six months.

<p class="text-center">
  <img src="/images/docs/dashboard/repo-settings/trend.png" style="width: 95%; margin: auto; display: block;" class="figure" alt="Display trend on badge">
</p>

- **Format:** DeepSource gives you options to choose from several formats for badge code. You can select anyone from the drop-down menu, and the badge code will be updated in the preview section. By default, markdown is selected as the format for badge code.

<p class="text-center">
  <img src="/images/docs/dashboard/repo-settings/format.png" style="width: 95%; margin: auto; display: block;" class="figure" alt="Badge code format">
</p>

## Autofix settings

You can go to the Autofix settings under Repository settings to check whether Autofix is enabled in a repository or not. If Autofix is not enabled in the repository, it will ask you to install the **Autofix app** in the repository, as shown in the image below.

<p class="text-center">
  <img src="/images/docs/dashboard/repo-settings/autofix_not_installed.png" style="width: 95%; margin: auto; display: block;" class="figure" alt="Autofix not installed">
</p>

If the Autofix is already up and running in the repository, it will display the prompt below.

<p class="text-center">
  <img src="/images/docs/dashboard/repo-settings/autofix_installed.png" style="width: 95%; margin: auto; display: block;" class="figure" alt="Autofix insatalled">
</p>



DeepSource Autofix app needs the necessary permissions to create pull requests automatically.



## Ignore rules

You can go to the Ignore rules tab under repository settings if you want to take a look at all the to ignore rules that you have added or if you're going to remove any ignore rules.

To remove an Ignore rule, click on the bin icon next to it.

<p class="text-center">
  <img src="/images/docs/dashboard/repo-settings/ignore_rules.png" style="width: 95%; margin: auto; display: block;" class="figure" alt="Ignore rules settings">
</p>

## SSH Access

If your repository has external private dependencies, you need to grant DeepSource access to fetch those dependencies via this public key.

To give DeepSource access to your private dependencies, please follow these steps:

1. In your repository's dashboard on DeepSource, go to **Settings** and then select **SSH access** in the navigation.

   <p class="text-center">
     <img src="/images/docs/dashboard/repo-settings/ssh_access_key_generation.png" style="width: 95%; margin: auto; display: block;" class="figure" alt="Generate SSH key from Repository settings">
   </p>

2. Next, click on **Generate SSH key pair** in the **SSH access** section to generate the key pair. Having done that, click on **Copy** to copy the public key for this repository. You'll need to add this public key to all private dependencies this repository requires access to. On GitHub, you can do so by adding this key as a Deploy key in the repository's settings.

   <p class="text-center">
     <img src="/images/docs/dashboard/repo-settings/ssh_access_key_copy.png" style="width: 95%; margin: auto; display: block;" class="figure" alt="Copy the generated SSH key">
   </p>

Once the key has been added to the repository, DeepSource should now have access to your private dependencies.

## Reporting

### GitLab Integration Mode


This setting is visible only for a GitLab repository.


<p class="text-center">
  <img src="/images/docs/dashboard/repo-settings/reporting_gl_mode.png" style="width: 95%; margin: auto; display: block;" class="figure" alt="Reporting: GitLab Integration Mode">
</p>

Our GitLab integration comes in two modes,
- **Commit Status:** We use the GitLab Commit Status API to create a [pipeline](https://docs.gitlab.com/ee/ci/pipelines/?ref=deepsource.io). This can be used to block merges based on the results from DeepSource. This is the default mode for any new repositories onboarded on DeepSource after this change was released (May 19, 2022).
- **Comments:** We post a comment on the respective merge request with the analysis results. This is deprecated and will be removed soon.

You can choose between these two integration modes on per repository basis. [Learn more](https://deepsource.io/blog/integration-with-gitlab-pipelines/).

### DSN

If you want to use [DeepSource CLI](#) or you are using [Test Coverage analyzer](#) in your repository, then you'll need to retrieve the DSN that can be obtained from Reporting tab under Repository Settings.



The DSN sends any external information about the repository to DeepSource from external sources, such as DeepSource CLI. Please keep this value confidential.



#### See also

- [Looking up your DSN](#)

<p class="text-center">
  <img src="/images/docs/dashboard/repo-settings/reporting.png" style="width: 95%; margin: auto; display: block;" class="figure" alt="Reporting">
</p>

### Issue configuration

You can configure what type of issues you want to be reported by DeepSource after analysis. You can also configure to block a pull request when a particular issue is caught in the pull requests created for that repository.

<p class="text-center">
  <img src="/images/docs/dashboard/repo-settings/issue_configuration.png" style="width: 95%; margin: auto; display: block;" class="figure" alt="Issue configuration">
</p>

### Metric configuration

You can configure what metrics you want to be reported by DeepSource after analysis. You can also configure to block a pull request when a particular metric fails its configured threshold condition in the pull requests created for that repository.

<p class="text-center">
  <img src="/images/docs/dashboard/repo-settings/metric_configuration.png" style="width: 95%; margin: auto; display: block;" class="figure" alt="Metric configuration">
</p>


## Audit log

As the name suggests, the Audit log is the report of all the activities done in a DeepSource account. It will capture and display events by recording who performed an activity, what when, and where the activity was performed, along with other information such as IP address.

<p class="text-center">
  <img src="/images/docs/dashboard/repo-settings/auditlog.png" style="width: 95%; margin: auto; display: block;" class="figure" alt="Audit log of DeepSource">
</p>

## Repository members

You can customize access to each repository in your team with granular permission levels, giving people access to the features and tasks they need.

#### See also

- [Managing access to your team's repositories](#)

This setting is only available in a Team's repository.


<p class="text-center">
  <img src="/images/docs/dashboard/repo-settings/repomembers.png" style="width: 95%; margin: auto; display: block;" class="figure" alt="Repository members">
</p>
