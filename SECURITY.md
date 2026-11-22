# Security and privacy

This is a family-managed public website. Keep private family information out of
the repository and public pages, including exact age, school, location,
routines, contact details, and private account information.

## Family sign-in

The optional API supports GitHub OAuth only for guardian-approved adult
accounts. It denies all accounts unless `ALLOWED_GITHUB_LOGINS` is configured
with the approved login names. Never add a child's account to this allowlist.
OAuth secrets and database credentials belong only in the API host's
environment or ignored local `.env` files.

The API does not store GitHub access tokens. It stores approved adult profile
details and hashes of random session tokens in the configured database. The
static website works without the API; the family area stays unavailable until
the service is configured.

## Media and local storage

Only add guardian-approved media. The music player keeps visitor-selected
files and preferences in that visitor's browser; it does not upload those
files to the project API.

## Reporting an issue

Please do not publish details of an unpatched security issue in a public
discussion. Use the repository's private vulnerability reporting feature when
available. Do not include passwords, tokens, private URLs, or children's
personal information in a report.
