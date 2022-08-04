---
title: 'C# (Beta)'
category: 'Analyzers'
position: 209
---

## Configuration - `.deepsource.toml`

This section covers configuration specific to the `C#` analyzer. Please make sure you read the general [configuration guide](#) first.

### `name`

- **Type**: [String](https://toml.io/en/v1.0.0#string)
- **Presence**: mandatory
- **Description**: Shortcode of the analyzer.
- **Example**:

```toml
name = "csharp"
```

### `enabled`

- **Type**: [Boolean](https://toml.io/en/v1.0.0#boolean)
- **Presence**: mandatory
- **Description**: Toggle whether this analyzer should be run.
- **Example**:

```toml
enabled = true
```

## Sample config

```toml
version = 1

test_patterns = [
  "tests/**",
  "*Test.cs"
]

exclude_patterns = [
  "**/examples/**"
]

[[analyzers]]
name = "csharp"
enabled = true
```
