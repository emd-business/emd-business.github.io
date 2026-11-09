#!/bin/sh
# كل الاختبارات قبل أي رفع: قواعد المكتبة + المحلّل (189 رسالة) + البناء
set -e
H=$(cd "$(dirname "$0")" && pwd)
node "$H/tests/core.test.js"
(cd "$H/parser" && node run.js | tail -1 | grep -q "TOTAL 189/189" && echo "✅ المحلّل: 189/189" && node sized.js | tail -1)
python3 "$H/build.py" "${1:-$H/../stage1}"
