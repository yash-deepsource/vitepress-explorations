---
title: "Managing members in your team"
category: 'Access Control'
position: 601
---

## Invite new users to join your team

Administrators can invite anyone to become a member of your team using their email address, or using an invitation link.



If your team has a paid per-user subscription, an empty seat must be available before you can invite a new member to join the team. For more information, see [https://deepsource.io/pricing/](https://deepsource.io/pricing/)



<ol>

<li>

Go to [https://deepsource.io/dashboard/](https://deepsource.io/dashboard). On the top left corner, click on the **account switcher** and then select the team you want to add the user to.

</li>

<p class="text-center"><img src="/images/docs/accesscontrol/team-members/accountswitcher.png" style="margin: auto; display: block" class="figure" alt="account switcher">
</p>

<li>

Go to the **My team** tab on the left sidebar.

</li>


<p class="text-center"><img src="/images/docs/accesscontrol/team-members/myteam.png" style="margin: auto; display: block" class="figure" alt="My team">
</p>

<li>

Click on the **Invite new member** button.

</li>

<p class="text-center"><img src="/images/docs/accesscontrol/team-members/myteamoverview.png" style="margin: auto; display: block" class="figure" alt="My team overview">
</p>

<li>

You can now invite the team members via [e-mail](#via-email) or [via invitation link](#via-invitation-link).

</li>

<p class="text-center"><img src="/images/docs/accesscontrol/team-members/newinvite.png" style="margin: auto; display: block" class="figure" alt="Invite new member">
</p>

</ol>

### Via email

<ol>

<li>

Type the **email address** of the person you want to invite.

</li>

<li>

Choose the appropriate role for the user (check [Permission levels for teams](#) for more information).

</li>

<p class="text-center"><img src="/images/docs/accesscontrol/team-members/teaminvite.png" style="margin: auto; display: block" class="figure" alt="Invite new member using email">
</p>

<li>

Click **Send Invite**.

</li>

<li>

The invited person will receive an email inviting them to the team. They will need to accept the invitation before becoming a member. 

</li>



You can click on **+ Add more emails** if you want to invite many team members in a single click.



</ol>

### Via invitation link

<ol>

<li>

Clicking **Copy Link** will copy the invite link to your clipboard.

</li>

<p class="text-center"><img src="/images/docs/accesscontrol/team-members/invitelink.png" style="margin: auto; display: block" class="figure" alt="Invite new member using link">
</p>

<li>

Send this invitation link to the person you need to invite.

</li>

<li>

When they sign up using this link, we'll automatically add them to your team.

</li>



You can always click on **Reset link** to generate a new invitation link. Doing this will revoke invitation from the older link.



</ol>

## Remove a member from your team

If a member in your team no longer requires access to any repository owned by the team, an administrator can remove them from the team.



If you have [Automatic Sync with GitHub](#) enabled, removing a member from your GitHub organization removes them from the corresponding team on DeepSource as well.



<ol>

<li>

Go to [https://deepsource.io/dashboard/](https://deepsource.io/dashboard), and on the top left corner, click on the **account switcher** and then select the team from which you want to remove a member.

</li>

<p class="text-center"><img src="/images/docs/accesscontrol/team-members/accountswitcher.png" style="margin: auto; display: block" class="figure" alt="account switcher">
</p>

<li>

Go to the **My team** tab on the left sidebar.

</li>

<p class="text-center"><img src="/images/docs/accesscontrol/team-members/myteam.png" style="margin: auto; display: block" class="figure" alt="My team">
</p>

<li>

Find the member you want to remove. Click on the drop down arrow on the right hand side with their role, and select **Remove from team**.

</li>

<p class="text-center"><img src="/images/docs/accesscontrol/team-members/removemember.png" style="margin: auto; display: block" class="figure" alt="remove a team member">
</p>

</ol>

## Sync members from vcs provider

### About sync

When roles and permissions are changed for any of your team members on your VCS Provider (GitHub, GitLab, or BitBucket), the settings on DeepSource can be updated accordingly by running a Sync.


### Running sync

1. Go to [https://deepsource.io/dashboard](https://deepsource.io/dashboard)

1. Switch to the correct team from the **account switcher** on the upper left corner.

1. Go to **Settings** in the left sidebar.

1. On the settings page, click on the **Access control** tab that is next to the billing tab.

1. Click on the **Manually sync access settings** button to sync access settings from GitHub/GitLab/BitBucket.

1. A modal will inform you that this action cannot be undone. If you still want to continue, click **Sync access settings**.

<p class="text-center"><img src="/images/docs/accesscontrol/team-members/manualsync.png" style="margin: auto; display: block" class="figure" alt="sync setting from vcs provider">
</p>


### Automatic sync with github

By setting up Automatic Sync (currently only available for GitHub), we can sync access settings for you without any manual intervention. Whenever the permissions, or roles are changed on GitHub, whether repository-wide or organization-wide, we are notified via a webhook, and we update the settings automatically.

In case of GitHub, setting up automatic sync also ensures that if a user is removed from your organization on Github, they get removed from the DeepSource team as well.

#### Setting up automatic sync

Team Administrators can setup DeepSource to automatically sync access settings from GitHub.

1. Go to [https://deepsource.io/dashboard/](https://deepsource.io/dashboard/)

1. Switch to the correct team from the **account switcher** on the upper left corner.

1. Go to **Settings** in the left sidebar.

1. On the settings page, click on the **Access control** tab that is next to the billing tab.

1. Toggle on the switch next to **Automatically sync access settings from GitHub**.

1. Automatic Sync has been set up.

<p class="text-center"><img src="/images/docs/accesscontrol/team-members/sync.png" style="margin: auto; display: block" class="figure" alt="sync setting from vcs provider">
</p>
 