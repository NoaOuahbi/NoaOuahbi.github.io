# Security and privacy

## Scope and ownership

This family-managed public website is maintained by
[@NoaOuahbi](https://github.com/NoaOuahbi) as part of the ECO-SYS ecosystem.
Keep exact age, school, location, routines, contact details, private media,
and private account information out of public pages and repository content.

The static website is public. Hiding a route or source file is not access
control; private data and protected actions must be authorized by the API on
every request.

## Family account access

The repository owner and guardian approve maintainers and accounts allowed to
use protected family features. The API must enforce exact
`ALLOWED_GITHUB_LOGINS` values and deny access if the allowlist is missing,
empty, or invalid. Never add a child's account to the allowlist. A valid
GitHub login or access to the public repository does not imply approval.

Keep OAuth client secrets and database credentials only in the API host's
environment or ignored local `.env` files. Do not store GitHub access tokens in
the database, browser storage, logs, or source control. Limit OAuth,
repository, database, and hosting access to approved adults who need it.

## Media and local storage

Publish only guardian-approved media that is licensed for use. Visitor-selected
files and playback preferences stay in that visitor's browser; do not assume
they are encrypted or uploaded by the site. Do not put private links or
personal information in playlists or public profile fields.

## Vulnerability reporting

Do not publish unpatched vulnerability details in a public issue or
discussion. Use this repository's GitHub private vulnerability reporting when
available. Otherwise, contact
[@NoaOuahbi](https://github.com/NoaOuahbi) privately. Do not include
credentials, private URLs, or children's personal information in reports.
