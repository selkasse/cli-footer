/**
 * @name cli-footer
 *
 * * Generate a CLI help menu footer
 * * Works well with `meow` and `cli-meow-help` packages
 *
 * ? Reasoning: Newer versions of `meow` validate flags
 * ? containing hyphens ('-').
 *
 * ? As such, flags beginning with '--no' are invalid.
 * ? However, `meow` still generates the flags.
 * * ^ The '--no' flags do not appear in the help menu
 * * when using `cli-meow-help`
 *
 * @author Sharif <https://github.com/selkasse>
 */
