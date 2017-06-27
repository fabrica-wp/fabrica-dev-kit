const path = require('path');

module.exports = (data) => `
# Wordmove configuration
# for more info see https://github.com/welaika/wordmove/wiki/Movefile-configurations-explained

# Development site settings - do not modify
local:
  vhost: "localhost:${data.webPort}"
  wordpress_path: '${path.resolve(`${__dirname}/www/`)}'

  database:
    name: "wordpress"
    user: "wordpress"
    password: "wordpress"
    host: "127.0.0.1"
    port: "${data.dbPort}"

# Production site settings - uncomment and specify for your staging/production environments as required
# production:
#   vhost: "url" # production URL - only needed if you plan to pull/push the database
#   wordpress_path: "server path" # remote path to WordPress (relative to FTP or SSH login)
#
#   database: # remote database credentials - only needed if you plan to pull/push the database
#     name: "name"
#     user: "user"
#     password: "pass"
#     host: "url"
#     port: "3308" # optional (for exotic configs)
#
#   exclude:
#     - ".git/"
#     - ".gitignore"
#     - ".sass-cache/"
#     - "bin/"
#     - "tmp/*"
#     - "Gemfile*"
#     - "Movefile"
#     - "wp-config.php"
#     - "wp-content/*.sql"
#
#   ftp: # be sure to specify the wordpress_path parameter above too
#     user: "user"
#     password: "password"
#     host: "host"
#     passive: true
#     scheme: "ftps" # optional (default "ftp")
#     port: "3308" # optional (for exotic configs)
#
#   ssh: # be sure to specify the wordpress_path parameter above too
#     host: "host"
#     user: "user"
#     password: "password" # password is optional, will use public keys if available.
#     port: 22 # Port is optional
#     rsync_options: "--verbose" # Additional rsync options, optional
#     gateway: # Gateway is optional
#       host: "host"
#       user: "user"
#       password: "password" # password is optional, will use public keys if available.
`;