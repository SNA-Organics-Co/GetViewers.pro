!(function (e, t) {
  'use strict'
  'object' == typeof module && 'object' == typeof module.exports
    ? (module.exports = e.document
        ? t(e, !0)
        : function (e) {
            if (!e.document)
              throw new Error('jQuery requires a window with a document')
            return t(e)
          })
    : t(e)
})('undefined' != typeof window ? window : this, function (e, t) {
  'use strict'
  var n = [],
    i = Object.getPrototypeOf,
    o = n.slice,
    r = n.flat
      ? function (e) {
          return n.flat.call(e)
        }
      : function (e) {
          return n.concat.apply([], e)
        },
    a = n.push,
    s = n.indexOf,
    l = {},
    c = l.toString,
    u = l.hasOwnProperty,
    d = u.toString,
    p = d.call(Object),
    f = {},
    h = function (e) {
      return 'function' == typeof e && 'number' != typeof e.nodeType
    },
    g = function (e) {
      return null != e && e === e.window
    },
    m = e.document,
    _ = { type: !0, src: !0, nonce: !0, noModule: !0 }
  function v (e, t, n) {
    var i,
      o,
      r = (n = n || m).createElement('script')
    if (((r.text = e), t))
      for (i in _)
        (o = t[i] || (t.getAttribute && t.getAttribute(i))) &&
          r.setAttribute(i, o)
    n.head.appendChild(r).parentNode.removeChild(r)
  }
  function y (e) {
    return null == e
      ? e + ''
      : 'object' == typeof e || 'function' == typeof e
      ? l[c.call(e)] || 'object'
      : typeof e
  }
  var b = '3.5.1',
    w = function (e, t) {
      return new w.fn.init(e, t)
    }
  function k (e) {
    var t = !!e && 'length' in e && e.length,
      n = y(e)
    return (
      !h(e) &&
      !g(e) &&
      ('array' === n ||
        0 === t ||
        ('number' == typeof t && 0 < t && t - 1 in e))
    )
  }
  ;(w.fn = w.prototype = {
    jquery: b,
    constructor: w,
    length: 0,
    toArray: function () {
      return o.call(this)
    },
    get: function (e) {
      return null == e ? o.call(this) : e < 0 ? this[e + this.length] : this[e]
    },
    pushStack: function (e) {
      var t = w.merge(this.constructor(), e)
      return (t.prevObject = this), t
    },
    each: function (e) {
      return w.each(this, e)
    },
    map: function (e) {
      return this.pushStack(
        w.map(this, function (t, n) {
          return e.call(t, n, t)
        })
      )
    },
    slice: function () {
      return this.pushStack(o.apply(this, arguments))
    },
    first: function () {
      return this.eq(0)
    },
    last: function () {
      return this.eq(-1)
    },
    even: function () {
      return this.pushStack(
        w.grep(this, function (e, t) {
          return (t + 1) % 2
        })
      )
    },
    odd: function () {
      return this.pushStack(
        w.grep(this, function (e, t) {
          return t % 2
        })
      )
    },
    eq: function (e) {
      var t = this.length,
        n = +e + (e < 0 ? t : 0)
      return this.pushStack(0 <= n && n < t ? [this[n]] : [])
    },
    end: function () {
      return this.prevObject || this.constructor()
    },
    push: a,
    sort: n.sort,
    splice: n.splice
  }),
    (w.extend = w.fn.extend = function () {
      var e,
        t,
        n,
        i,
        o,
        r,
        a = arguments[0] || {},
        s = 1,
        l = arguments.length,
        c = !1
      for (
        'boolean' == typeof a && ((c = a), (a = arguments[s] || {}), s++),
          'object' == typeof a || h(a) || (a = {}),
          s === l && ((a = this), s--);
        s < l;
        s++
      )
        if (null != (e = arguments[s]))
          for (t in e)
            (i = e[t]),
              '__proto__' !== t &&
                a !== i &&
                (c && i && (w.isPlainObject(i) || (o = Array.isArray(i)))
                  ? ((n = a[t]),
                    (r =
                      o && !Array.isArray(n)
                        ? []
                        : o || w.isPlainObject(n)
                        ? n
                        : {}),
                    (o = !1),
                    (a[t] = w.extend(c, r, i)))
                  : void 0 !== i && (a[t] = i))
      return a
    }),
    w.extend({
      expando: 'jQuery' + (b + Math.random()).replace(/\D/g, ''),
      isReady: !0,
      error: function (e) {
        throw new Error(e)
      },
      noop: function () {},
      isPlainObject: function (e) {
        var t, n
        return !(
          !e ||
          '[object Object]' !== c.call(e) ||
          ((t = i(e)) &&
            ('function' !=
              typeof (n = u.call(t, 'constructor') && t.constructor) ||
              d.call(n) !== p))
        )
      },
      isEmptyObject: function (e) {
        var t
        for (t in e) return !1
        return !0
      },
      globalEval: function (e, t, n) {
        v(e, { nonce: t && t.nonce }, n)
      },
      each: function (e, t) {
        var n,
          i = 0
        if (k(e))
          for (n = e.length; i < n && !1 !== t.call(e[i], i, e[i]); i++);
        else for (i in e) if (!1 === t.call(e[i], i, e[i])) break
        return e
      },
      makeArray: function (e, t) {
        var n = t || []
        return (
          null != e &&
            (k(Object(e))
              ? w.merge(n, 'string' == typeof e ? [e] : e)
              : a.call(n, e)),
          n
        )
      },
      inArray: function (e, t, n) {
        return null == t ? -1 : s.call(t, e, n)
      },
      merge: function (e, t) {
        for (var n = +t.length, i = 0, o = e.length; i < n; i++) e[o++] = t[i]
        return (e.length = o), e
      },
      grep: function (e, t, n) {
        for (var i = [], o = 0, r = e.length, a = !n; o < r; o++)
          !t(e[o], o) !== a && i.push(e[o])
        return i
      },
      map: function (e, t, n) {
        var i,
          o,
          a = 0,
          s = []
        if (k(e))
          for (i = e.length; a < i; a++)
            null != (o = t(e[a], a, n)) && s.push(o)
        else for (a in e) null != (o = t(e[a], a, n)) && s.push(o)
        return r(s)
      },
      guid: 1,
      support: f
    }),
    'function' == typeof Symbol && (w.fn[Symbol.iterator] = n[Symbol.iterator]),
    w.each(
      'Boolean Number String Function Array Date RegExp Object Error Symbol'.split(
        ' '
      ),
      function (e, t) {
        l['[object ' + t + ']'] = t.toLowerCase()
      }
    )
  var T = (function (e) {
    var t,
      n,
      i,
      o,
      r,
      a,
      s,
      l,
      c,
      u,
      d,
      p,
      f,
      h,
      g,
      m,
      _,
      v,
      y,
      b = 'sizzle' + 1 * new Date(),
      w = e.document,
      k = 0,
      T = 0,
      x = le(),
      C = le(),
      S = le(),
      E = le(),
      A = function (e, t) {
        return e === t && (d = !0), 0
      },
      j = {}.hasOwnProperty,
      D = [],
      $ = D.pop,
      N = D.push,
      O = D.push,
      I = D.slice,
      P = function (e, t) {
        for (var n = 0, i = e.length; n < i; n++) if (e[n] === t) return n
        return -1
      },
      L =
        'checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped',
      q = '[\\x20\\t\\r\\n\\f]',
      H =
        '(?:\\\\[\\da-fA-F]{1,6}' +
        q +
        '?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+',
      M =
        '\\[' +
        q +
        '*(' +
        H +
        ')(?:' +
        q +
        '*([*^$|!~]?=)' +
        q +
        '*(?:\'((?:\\\\.|[^\\\\\'])*)\'|"((?:\\\\.|[^\\\\"])*)"|(' +
        H +
        '))|)' +
        q +
        '*\\]',
      R =
        ':(' +
        H +
        ')(?:\\(((\'((?:\\\\.|[^\\\\\'])*)\'|"((?:\\\\.|[^\\\\"])*)")|((?:\\\\.|[^\\\\()[\\]]|' +
        M +
        ')*)|.*)\\)|)',
      z = new RegExp(q + '+', 'g'),
      F = new RegExp('^' + q + '+|((?:^|[^\\\\])(?:\\\\.)*)' + q + '+$', 'g'),
      W = new RegExp('^' + q + '*,' + q + '*'),
      B = new RegExp('^' + q + '*([>+~]|' + q + ')' + q + '*'),
      U = new RegExp(q + '|>'),
      K = new RegExp(R),
      Q = new RegExp('^' + H + '$'),
      Y = {
        ID: new RegExp('^#(' + H + ')'),
        CLASS: new RegExp('^\\.(' + H + ')'),
        TAG: new RegExp('^(' + H + '|[*])'),
        ATTR: new RegExp('^' + M),
        PSEUDO: new RegExp('^' + R),
        CHILD: new RegExp(
          '^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(' +
            q +
            '*(even|odd|(([+-]|)(\\d*)n|)' +
            q +
            '*(?:([+-]|)' +
            q +
            '*(\\d+)|))' +
            q +
            '*\\)|)',
          'i'
        ),
        bool: new RegExp('^(?:' + L + ')$', 'i'),
        needsContext: new RegExp(
          '^' +
            q +
            '*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(' +
            q +
            '*((?:-\\d)?\\d*)' +
            q +
            '*\\)|)(?=[^-]|$)',
          'i'
        )
      },
      V = /HTML$/i,
      X = /^(?:input|select|textarea|button)$/i,
      G = /^h\d$/i,
      J = /^[^{]+\{\s*\[native \w/,
      Z = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
      ee = /[+~]/,
      te = new RegExp('\\\\[\\da-fA-F]{1,6}' + q + '?|\\\\([^\\r\\n\\f])', 'g'),
      ne = function (e, t) {
        var n = '0x' + e.slice(1) - 65536
        return (
          t ||
          (n < 0
            ? String.fromCharCode(n + 65536)
            : String.fromCharCode((n >> 10) | 55296, (1023 & n) | 56320))
        )
      },
      ie = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
      oe = function (e, t) {
        return t
          ? '\0' === e
            ? '�'
            : e.slice(0, -1) +
              '\\' +
              e.charCodeAt(e.length - 1).toString(16) +
              ' '
          : '\\' + e
      },
      re = function () {
        p()
      },
      ae = be(
        function (e) {
          return !0 === e.disabled && 'fieldset' === e.nodeName.toLowerCase()
        },
        { dir: 'parentNode', next: 'legend' }
      )
    try {
      O.apply((D = I.call(w.childNodes)), w.childNodes),
        D[w.childNodes.length].nodeType
    } catch (t) {
      O = {
        apply: D.length
          ? function (e, t) {
              N.apply(e, I.call(t))
            }
          : function (e, t) {
              for (var n = e.length, i = 0; (e[n++] = t[i++]); );
              e.length = n - 1
            }
      }
    }
    function se (e, t, i, o) {
      var r,
        s,
        c,
        u,
        d,
        h,
        _,
        v = t && t.ownerDocument,
        w = t ? t.nodeType : 9
      if (
        ((i = i || []),
        'string' != typeof e || !e || (1 !== w && 9 !== w && 11 !== w))
      )
        return i
      if (!o && (p(t), (t = t || f), g)) {
        if (11 !== w && (d = Z.exec(e)))
          if ((r = d[1])) {
            if (9 === w) {
              if (!(c = t.getElementById(r))) return i
              if (c.id === r) return i.push(c), i
            } else if (v && (c = v.getElementById(r)) && y(t, c) && c.id === r)
              return i.push(c), i
          } else {
            if (d[2]) return O.apply(i, t.getElementsByTagName(e)), i
            if (
              (r = d[3]) &&
              n.getElementsByClassName &&
              t.getElementsByClassName
            )
              return O.apply(i, t.getElementsByClassName(r)), i
          }
        if (
          n.qsa &&
          !E[e + ' '] &&
          (!m || !m.test(e)) &&
          (1 !== w || 'object' !== t.nodeName.toLowerCase())
        ) {
          if (((_ = e), (v = t), 1 === w && (U.test(e) || B.test(e)))) {
            for (
              ((v = (ee.test(e) && _e(t.parentNode)) || t) === t && n.scope) ||
                ((u = t.getAttribute('id'))
                  ? (u = u.replace(ie, oe))
                  : t.setAttribute('id', (u = b))),
                s = (h = a(e)).length;
              s--;

            )
              h[s] = (u ? '#' + u : ':scope') + ' ' + ye(h[s])
            _ = h.join(',')
          }
          try {
            return O.apply(i, v.querySelectorAll(_)), i
          } catch (t) {
            E(e, !0)
          } finally {
            u === b && t.removeAttribute('id')
          }
        }
      }
      return l(e.replace(F, '$1'), t, i, o)
    }
    function le () {
      var e = []
      return function t (n, o) {
        return (
          e.push(n + ' ') > i.cacheLength && delete t[e.shift()],
          (t[n + ' '] = o)
        )
      }
    }
    function ce (e) {
      return (e[b] = !0), e
    }
    function ue (e) {
      var t = f.createElement('fieldset')
      try {
        return !!e(t)
      } catch (e) {
        return !1
      } finally {
        t.parentNode && t.parentNode.removeChild(t), (t = null)
      }
    }
    function de (e, t) {
      for (var n = e.split('|'), o = n.length; o--; ) i.attrHandle[n[o]] = t
    }
    function pe (e, t) {
      var n = t && e,
        i =
          n &&
          1 === e.nodeType &&
          1 === t.nodeType &&
          e.sourceIndex - t.sourceIndex
      if (i) return i
      if (n) for (; (n = n.nextSibling); ) if (n === t) return -1
      return e ? 1 : -1
    }
    function fe (e) {
      return function (t) {
        return 'input' === t.nodeName.toLowerCase() && t.type === e
      }
    }
    function he (e) {
      return function (t) {
        var n = t.nodeName.toLowerCase()
        return ('input' === n || 'button' === n) && t.type === e
      }
    }
    function ge (e) {
      return function (t) {
        return 'form' in t
          ? t.parentNode && !1 === t.disabled
            ? 'label' in t
              ? 'label' in t.parentNode
                ? t.parentNode.disabled === e
                : t.disabled === e
              : t.isDisabled === e || (t.isDisabled !== !e && ae(t) === e)
            : t.disabled === e
          : 'label' in t && t.disabled === e
      }
    }
    function me (e) {
      return ce(function (t) {
        return (
          (t = +t),
          ce(function (n, i) {
            for (var o, r = e([], n.length, t), a = r.length; a--; )
              n[(o = r[a])] && (n[o] = !(i[o] = n[o]))
          })
        )
      })
    }
    function _e (e) {
      return e && void 0 !== e.getElementsByTagName && e
    }
    for (t in ((n = se.support = {}),
    (r = se.isXML = function (e) {
      var t = e.namespaceURI,
        n = (e.ownerDocument || e).documentElement
      return !V.test(t || (n && n.nodeName) || 'HTML')
    }),
    (p = se.setDocument = function (e) {
      var t,
        o,
        a = e ? e.ownerDocument || e : w
      return (
        a != f &&
          9 === a.nodeType &&
          a.documentElement &&
          ((h = (f = a).documentElement),
          (g = !r(f)),
          w != f &&
            (o = f.defaultView) &&
            o.top !== o &&
            (o.addEventListener
              ? o.addEventListener('unload', re, !1)
              : o.attachEvent && o.attachEvent('onunload', re)),
          (n.scope = ue(function (e) {
            return (
              h.appendChild(e).appendChild(f.createElement('div')),
              void 0 !== e.querySelectorAll &&
                !e.querySelectorAll(':scope fieldset div').length
            )
          })),
          (n.attributes = ue(function (e) {
            return (e.className = 'i'), !e.getAttribute('className')
          })),
          (n.getElementsByTagName = ue(function (e) {
            return (
              e.appendChild(f.createComment('')),
              !e.getElementsByTagName('*').length
            )
          })),
          (n.getElementsByClassName = J.test(f.getElementsByClassName)),
          (n.getById = ue(function (e) {
            return (
              (h.appendChild(e).id = b),
              !f.getElementsByName || !f.getElementsByName(b).length
            )
          })),
          n.getById
            ? ((i.filter.ID = function (e) {
                var t = e.replace(te, ne)
                return function (e) {
                  return e.getAttribute('id') === t
                }
              }),
              (i.find.ID = function (e, t) {
                if (void 0 !== t.getElementById && g) {
                  var n = t.getElementById(e)
                  return n ? [n] : []
                }
              }))
            : ((i.filter.ID = function (e) {
                var t = e.replace(te, ne)
                return function (e) {
                  var n =
                    void 0 !== e.getAttributeNode && e.getAttributeNode('id')
                  return n && n.value === t
                }
              }),
              (i.find.ID = function (e, t) {
                if (void 0 !== t.getElementById && g) {
                  var n,
                    i,
                    o,
                    r = t.getElementById(e)
                  if (r) {
                    if ((n = r.getAttributeNode('id')) && n.value === e)
                      return [r]
                    for (o = t.getElementsByName(e), i = 0; (r = o[i++]); )
                      if ((n = r.getAttributeNode('id')) && n.value === e)
                        return [r]
                  }
                  return []
                }
              })),
          (i.find.TAG = n.getElementsByTagName
            ? function (e, t) {
                return void 0 !== t.getElementsByTagName
                  ? t.getElementsByTagName(e)
                  : n.qsa
                  ? t.querySelectorAll(e)
                  : void 0
              }
            : function (e, t) {
                var n,
                  i = [],
                  o = 0,
                  r = t.getElementsByTagName(e)
                if ('*' === e) {
                  for (; (n = r[o++]); ) 1 === n.nodeType && i.push(n)
                  return i
                }
                return r
              }),
          (i.find.CLASS =
            n.getElementsByClassName &&
            function (e, t) {
              if (void 0 !== t.getElementsByClassName && g)
                return t.getElementsByClassName(e)
            }),
          (_ = []),
          (m = []),
          (n.qsa = J.test(f.querySelectorAll)) &&
            (ue(function (e) {
              var t
              ;(h.appendChild(e).innerHTML =
                "<a id='" +
                b +
                "'></a><select id='" +
                b +
                "-\r\\' msallowcapture=''><option selected=''></option></select>"),
                e.querySelectorAll("[msallowcapture^='']").length &&
                  m.push('[*^$]=' + q + '*(?:\'\'|"")'),
                e.querySelectorAll('[selected]').length ||
                  m.push('\\[' + q + '*(?:value|' + L + ')'),
                e.querySelectorAll('[id~=' + b + '-]').length || m.push('~='),
                (t = f.createElement('input')).setAttribute('name', ''),
                e.appendChild(t),
                e.querySelectorAll("[name='']").length ||
                  m.push('\\[' + q + '*name' + q + '*=' + q + '*(?:\'\'|"")'),
                e.querySelectorAll(':checked').length || m.push(':checked'),
                e.querySelectorAll('a#' + b + '+*').length ||
                  m.push('.#.+[+~]'),
                e.querySelectorAll('\\\f'),
                m.push('[\\r\\n\\f]')
            }),
            ue(function (e) {
              e.innerHTML =
                "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>"
              var t = f.createElement('input')
              t.setAttribute('type', 'hidden'),
                e.appendChild(t).setAttribute('name', 'D'),
                e.querySelectorAll('[name=d]').length &&
                  m.push('name' + q + '*[*^$|!~]?='),
                2 !== e.querySelectorAll(':enabled').length &&
                  m.push(':enabled', ':disabled'),
                (h.appendChild(e).disabled = !0),
                2 !== e.querySelectorAll(':disabled').length &&
                  m.push(':enabled', ':disabled'),
                e.querySelectorAll('*,:x'),
                m.push(',.*:')
            })),
          (n.matchesSelector = J.test(
            (v =
              h.matches ||
              h.webkitMatchesSelector ||
              h.mozMatchesSelector ||
              h.oMatchesSelector ||
              h.msMatchesSelector)
          )) &&
            ue(function (e) {
              ;(n.disconnectedMatch = v.call(e, '*')),
                v.call(e, "[s!='']:x"),
                _.push('!=', R)
            }),
          (m = m.length && new RegExp(m.join('|'))),
          (_ = _.length && new RegExp(_.join('|'))),
          (t = J.test(h.compareDocumentPosition)),
          (y =
            t || J.test(h.contains)
              ? function (e, t) {
                  var n = 9 === e.nodeType ? e.documentElement : e,
                    i = t && t.parentNode
                  return (
                    e === i ||
                    !(
                      !i ||
                      1 !== i.nodeType ||
                      !(n.contains
                        ? n.contains(i)
                        : e.compareDocumentPosition &&
                          16 & e.compareDocumentPosition(i))
                    )
                  )
                }
              : function (e, t) {
                  if (t) for (; (t = t.parentNode); ) if (t === e) return !0
                  return !1
                }),
          (A = t
            ? function (e, t) {
                if (e === t) return (d = !0), 0
                var i = !e.compareDocumentPosition - !t.compareDocumentPosition
                return (
                  i ||
                  (1 &
                    (i =
                      (e.ownerDocument || e) == (t.ownerDocument || t)
                        ? e.compareDocumentPosition(t)
                        : 1) ||
                  (!n.sortDetached && t.compareDocumentPosition(e) === i)
                    ? e == f || (e.ownerDocument == w && y(w, e))
                      ? -1
                      : t == f || (t.ownerDocument == w && y(w, t))
                      ? 1
                      : u
                      ? P(u, e) - P(u, t)
                      : 0
                    : 4 & i
                    ? -1
                    : 1)
                )
              }
            : function (e, t) {
                if (e === t) return (d = !0), 0
                var n,
                  i = 0,
                  o = e.parentNode,
                  r = t.parentNode,
                  a = [e],
                  s = [t]
                if (!o || !r)
                  return e == f
                    ? -1
                    : t == f
                    ? 1
                    : o
                    ? -1
                    : r
                    ? 1
                    : u
                    ? P(u, e) - P(u, t)
                    : 0
                if (o === r) return pe(e, t)
                for (n = e; (n = n.parentNode); ) a.unshift(n)
                for (n = t; (n = n.parentNode); ) s.unshift(n)
                for (; a[i] === s[i]; ) i++
                return i ? pe(a[i], s[i]) : a[i] == w ? -1 : s[i] == w ? 1 : 0
              })),
        f
      )
    }),
    (se.matches = function (e, t) {
      return se(e, null, null, t)
    }),
    (se.matchesSelector = function (e, t) {
      if (
        (p(e),
        n.matchesSelector &&
          g &&
          !E[t + ' '] &&
          (!_ || !_.test(t)) &&
          (!m || !m.test(t)))
      )
        try {
          var i = v.call(e, t)
          if (
            i ||
            n.disconnectedMatch ||
            (e.document && 11 !== e.document.nodeType)
          )
            return i
        } catch (e) {
          E(t, !0)
        }
      return 0 < se(t, f, null, [e]).length
    }),
    (se.contains = function (e, t) {
      return (e.ownerDocument || e) != f && p(e), y(e, t)
    }),
    (se.attr = function (e, t) {
      ;(e.ownerDocument || e) != f && p(e)
      var o = i.attrHandle[t.toLowerCase()],
        r = o && j.call(i.attrHandle, t.toLowerCase()) ? o(e, t, !g) : void 0
      return void 0 !== r
        ? r
        : n.attributes || !g
        ? e.getAttribute(t)
        : (r = e.getAttributeNode(t)) && r.specified
        ? r.value
        : null
    }),
    (se.escape = function (e) {
      return (e + '').replace(ie, oe)
    }),
    (se.error = function (e) {
      throw new Error('Syntax error, unrecognized expression: ' + e)
    }),
    (se.uniqueSort = function (e) {
      var t,
        i = [],
        o = 0,
        r = 0
      if (
        ((d = !n.detectDuplicates),
        (u = !n.sortStable && e.slice(0)),
        e.sort(A),
        d)
      ) {
        for (; (t = e[r++]); ) t === e[r] && (o = i.push(r))
        for (; o--; ) e.splice(i[o], 1)
      }
      return (u = null), e
    }),
    (o = se.getText = function (e) {
      var t,
        n = '',
        i = 0,
        r = e.nodeType
      if (r) {
        if (1 === r || 9 === r || 11 === r) {
          if ('string' == typeof e.textContent) return e.textContent
          for (e = e.firstChild; e; e = e.nextSibling) n += o(e)
        } else if (3 === r || 4 === r) return e.nodeValue
      } else for (; (t = e[i++]); ) n += o(t)
      return n
    }),
    ((i = se.selectors = {
      cacheLength: 50,
      createPseudo: ce,
      match: Y,
      attrHandle: {},
      find: {},
      relative: {
        '>': { dir: 'parentNode', first: !0 },
        ' ': { dir: 'parentNode' },
        '+': { dir: 'previousSibling', first: !0 },
        '~': { dir: 'previousSibling' }
      },
      preFilter: {
        ATTR: function (e) {
          return (
            (e[1] = e[1].replace(te, ne)),
            (e[3] = (e[3] || e[4] || e[5] || '').replace(te, ne)),
            '~=' === e[2] && (e[3] = ' ' + e[3] + ' '),
            e.slice(0, 4)
          )
        },
        CHILD: function (e) {
          return (
            (e[1] = e[1].toLowerCase()),
            'nth' === e[1].slice(0, 3)
              ? (e[3] || se.error(e[0]),
                (e[4] = +(e[4]
                  ? e[5] + (e[6] || 1)
                  : 2 * ('even' === e[3] || 'odd' === e[3]))),
                (e[5] = +(e[7] + e[8] || 'odd' === e[3])))
              : e[3] && se.error(e[0]),
            e
          )
        },
        PSEUDO: function (e) {
          var t,
            n = !e[6] && e[2]
          return Y.CHILD.test(e[0])
            ? null
            : (e[3]
                ? (e[2] = e[4] || e[5] || '')
                : n &&
                  K.test(n) &&
                  (t = a(n, !0)) &&
                  (t = n.indexOf(')', n.length - t) - n.length) &&
                  ((e[0] = e[0].slice(0, t)), (e[2] = n.slice(0, t))),
              e.slice(0, 3))
        }
      },
      filter: {
        TAG: function (e) {
          var t = e.replace(te, ne).toLowerCase()
          return '*' === e
            ? function () {
                return !0
              }
            : function (e) {
                return e.nodeName && e.nodeName.toLowerCase() === t
              }
        },
        CLASS: function (e) {
          var t = x[e + ' ']
          return (
            t ||
            ((t = new RegExp('(^|' + q + ')' + e + '(' + q + '|$)')) &&
              x(e, function (e) {
                return t.test(
                  ('string' == typeof e.className && e.className) ||
                    (void 0 !== e.getAttribute && e.getAttribute('class')) ||
                    ''
                )
              }))
          )
        },
        ATTR: function (e, t, n) {
          return function (i) {
            var o = se.attr(i, e)
            return null == o
              ? '!=' === t
              : !t ||
                  ((o += ''),
                  '=' === t
                    ? o === n
                    : '!=' === t
                    ? o !== n
                    : '^=' === t
                    ? n && 0 === o.indexOf(n)
                    : '*=' === t
                    ? n && -1 < o.indexOf(n)
                    : '$=' === t
                    ? n && o.slice(-n.length) === n
                    : '~=' === t
                    ? -1 < (' ' + o.replace(z, ' ') + ' ').indexOf(n)
                    : '|=' === t &&
                      (o === n || o.slice(0, n.length + 1) === n + '-'))
          }
        },
        CHILD: function (e, t, n, i, o) {
          var r = 'nth' !== e.slice(0, 3),
            a = 'last' !== e.slice(-4),
            s = 'of-type' === t
          return 1 === i && 0 === o
            ? function (e) {
                return !!e.parentNode
              }
            : function (t, n, l) {
                var c,
                  u,
                  d,
                  p,
                  f,
                  h,
                  g = r !== a ? 'nextSibling' : 'previousSibling',
                  m = t.parentNode,
                  _ = s && t.nodeName.toLowerCase(),
                  v = !l && !s,
                  y = !1
                if (m) {
                  if (r) {
                    for (; g; ) {
                      for (p = t; (p = p[g]); )
                        if (
                          s ? p.nodeName.toLowerCase() === _ : 1 === p.nodeType
                        )
                          return !1
                      h = g = 'only' === e && !h && 'nextSibling'
                    }
                    return !0
                  }
                  if (((h = [a ? m.firstChild : m.lastChild]), a && v)) {
                    for (
                      y =
                        (f =
                          (c =
                            (u =
                              (d = (p = m)[b] || (p[b] = {}))[p.uniqueID] ||
                              (d[p.uniqueID] = {}))[e] || [])[0] === k &&
                          c[1]) && c[2],
                        p = f && m.childNodes[f];
                      (p = (++f && p && p[g]) || (y = f = 0) || h.pop());

                    )
                      if (1 === p.nodeType && ++y && p === t) {
                        u[e] = [k, f, y]
                        break
                      }
                  } else if (
                    (v &&
                      (y = f =
                        (c =
                          (u =
                            (d = (p = t)[b] || (p[b] = {}))[p.uniqueID] ||
                            (d[p.uniqueID] = {}))[e] || [])[0] === k && c[1]),
                    !1 === y)
                  )
                    for (
                      ;
                      (p = (++f && p && p[g]) || (y = f = 0) || h.pop()) &&
                      ((s
                        ? p.nodeName.toLowerCase() !== _
                        : 1 !== p.nodeType) ||
                        !++y ||
                        (v &&
                          ((u =
                            (d = p[b] || (p[b] = {}))[p.uniqueID] ||
                            (d[p.uniqueID] = {}))[e] = [k, y]),
                        p !== t));

                    );
                  return (y -= o) === i || (y % i == 0 && 0 <= y / i)
                }
              }
        },
        PSEUDO: function (e, t) {
          var n,
            o =
              i.pseudos[e] ||
              i.setFilters[e.toLowerCase()] ||
              se.error('unsupported pseudo: ' + e)
          return o[b]
            ? o(t)
            : 1 < o.length
            ? ((n = [e, e, '', t]),
              i.setFilters.hasOwnProperty(e.toLowerCase())
                ? ce(function (e, n) {
                    for (var i, r = o(e, t), a = r.length; a--; )
                      e[(i = P(e, r[a]))] = !(n[i] = r[a])
                  })
                : function (e) {
                    return o(e, 0, n)
                  })
            : o
        }
      },
      pseudos: {
        not: ce(function (e) {
          var t = [],
            n = [],
            i = s(e.replace(F, '$1'))
          return i[b]
            ? ce(function (e, t, n, o) {
                for (var r, a = i(e, null, o, []), s = e.length; s--; )
                  (r = a[s]) && (e[s] = !(t[s] = r))
              })
            : function (e, o, r) {
                return (t[0] = e), i(t, null, r, n), (t[0] = null), !n.pop()
              }
        }),
        has: ce(function (e) {
          return function (t) {
            return 0 < se(e, t).length
          }
        }),
        contains: ce(function (e) {
          return (
            (e = e.replace(te, ne)),
            function (t) {
              return -1 < (t.textContent || o(t)).indexOf(e)
            }
          )
        }),
        lang: ce(function (e) {
          return (
            Q.test(e || '') || se.error('unsupported lang: ' + e),
            (e = e.replace(te, ne).toLowerCase()),
            function (t) {
              var n
              do {
                if (
                  (n = g
                    ? t.lang
                    : t.getAttribute('xml:lang') || t.getAttribute('lang'))
                )
                  return (n = n.toLowerCase()) === e || 0 === n.indexOf(e + '-')
              } while ((t = t.parentNode) && 1 === t.nodeType)
              return !1
            }
          )
        }),
        target: function (t) {
          var n = e.location && e.location.hash
          return n && n.slice(1) === t.id
        },
        root: function (e) {
          return e === h
        },
        focus: function (e) {
          return (
            e === f.activeElement &&
            (!f.hasFocus || f.hasFocus()) &&
            !!(e.type || e.href || ~e.tabIndex)
          )
        },
        enabled: ge(!1),
        disabled: ge(!0),
        checked: function (e) {
          var t = e.nodeName.toLowerCase()
          return (
            ('input' === t && !!e.checked) || ('option' === t && !!e.selected)
          )
        },
        selected: function (e) {
          return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected
        },
        empty: function (e) {
          for (e = e.firstChild; e; e = e.nextSibling)
            if (e.nodeType < 6) return !1
          return !0
        },
        parent: function (e) {
          return !i.pseudos.empty(e)
        },
        header: function (e) {
          return G.test(e.nodeName)
        },
        input: function (e) {
          return X.test(e.nodeName)
        },
        button: function (e) {
          var t = e.nodeName.toLowerCase()
          return ('input' === t && 'button' === e.type) || 'button' === t
        },
        text: function (e) {
          var t
          return (
            'input' === e.nodeName.toLowerCase() &&
            'text' === e.type &&
            (null == (t = e.getAttribute('type')) || 'text' === t.toLowerCase())
          )
        },
        first: me(function () {
          return [0]
        }),
        last: me(function (e, t) {
          return [t - 1]
        }),
        eq: me(function (e, t, n) {
          return [n < 0 ? n + t : n]
        }),
        even: me(function (e, t) {
          for (var n = 0; n < t; n += 2) e.push(n)
          return e
        }),
        odd: me(function (e, t) {
          for (var n = 1; n < t; n += 2) e.push(n)
          return e
        }),
        lt: me(function (e, t, n) {
          for (var i = n < 0 ? n + t : t < n ? t : n; 0 <= --i; ) e.push(i)
          return e
        }),
        gt: me(function (e, t, n) {
          for (var i = n < 0 ? n + t : n; ++i < t; ) e.push(i)
          return e
        })
      }
    }).pseudos.nth = i.pseudos.eq),
    { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 }))
      i.pseudos[t] = fe(t)
    for (t in { submit: !0, reset: !0 }) i.pseudos[t] = he(t)
    function ve () {}
    function ye (e) {
      for (var t = 0, n = e.length, i = ''; t < n; t++) i += e[t].value
      return i
    }
    function be (e, t, n) {
      var i = t.dir,
        o = t.next,
        r = o || i,
        a = n && 'parentNode' === r,
        s = T++
      return t.first
        ? function (t, n, o) {
            for (; (t = t[i]); ) if (1 === t.nodeType || a) return e(t, n, o)
            return !1
          }
        : function (t, n, l) {
            var c,
              u,
              d,
              p = [k, s]
            if (l) {
              for (; (t = t[i]); )
                if ((1 === t.nodeType || a) && e(t, n, l)) return !0
            } else
              for (; (t = t[i]); )
                if (1 === t.nodeType || a)
                  if (
                    ((u =
                      (d = t[b] || (t[b] = {}))[t.uniqueID] ||
                      (d[t.uniqueID] = {})),
                    o && o === t.nodeName.toLowerCase())
                  )
                    t = t[i] || t
                  else {
                    if ((c = u[r]) && c[0] === k && c[1] === s)
                      return (p[2] = c[2])
                    if (((u[r] = p)[2] = e(t, n, l))) return !0
                  }
            return !1
          }
    }
    function we (e) {
      return 1 < e.length
        ? function (t, n, i) {
            for (var o = e.length; o--; ) if (!e[o](t, n, i)) return !1
            return !0
          }
        : e[0]
    }
    function ke (e, t, n, i, o) {
      for (var r, a = [], s = 0, l = e.length, c = null != t; s < l; s++)
        (r = e[s]) && ((n && !n(r, i, o)) || (a.push(r), c && t.push(s)))
      return a
    }
    function Te (e, t, n, i, o, r) {
      return (
        i && !i[b] && (i = Te(i)),
        o && !o[b] && (o = Te(o, r)),
        ce(function (r, a, s, l) {
          var c,
            u,
            d,
            p = [],
            f = [],
            h = a.length,
            g =
              r ||
              (function (e, t, n) {
                for (var i = 0, o = t.length; i < o; i++) se(e, t[i], n)
                return n
              })(t || '*', s.nodeType ? [s] : s, []),
            m = !e || (!r && t) ? g : ke(g, p, e, s, l),
            _ = n ? (o || (r ? e : h || i) ? [] : a) : m
          if ((n && n(m, _, s, l), i))
            for (c = ke(_, f), i(c, [], s, l), u = c.length; u--; )
              (d = c[u]) && (_[f[u]] = !(m[f[u]] = d))
          if (r) {
            if (o || e) {
              if (o) {
                for (c = [], u = _.length; u--; )
                  (d = _[u]) && c.push((m[u] = d))
                o(null, (_ = []), c, l)
              }
              for (u = _.length; u--; )
                (d = _[u]) &&
                  -1 < (c = o ? P(r, d) : p[u]) &&
                  (r[c] = !(a[c] = d))
            }
          } else (_ = ke(_ === a ? _.splice(h, _.length) : _)), o ? o(null, a, _, l) : O.apply(a, _)
        })
      )
    }
    function xe (e) {
      for (
        var t,
          n,
          o,
          r = e.length,
          a = i.relative[e[0].type],
          s = a || i.relative[' '],
          l = a ? 1 : 0,
          u = be(
            function (e) {
              return e === t
            },
            s,
            !0
          ),
          d = be(
            function (e) {
              return -1 < P(t, e)
            },
            s,
            !0
          ),
          p = [
            function (e, n, i) {
              var o =
                (!a && (i || n !== c)) ||
                ((t = n).nodeType ? u(e, n, i) : d(e, n, i))
              return (t = null), o
            }
          ];
        l < r;
        l++
      )
        if ((n = i.relative[e[l].type])) p = [be(we(p), n)]
        else {
          if ((n = i.filter[e[l].type].apply(null, e[l].matches))[b]) {
            for (o = ++l; o < r && !i.relative[e[o].type]; o++);
            return Te(
              1 < l && we(p),
              1 < l &&
                ye(
                  e
                    .slice(0, l - 1)
                    .concat({ value: ' ' === e[l - 2].type ? '*' : '' })
                ).replace(F, '$1'),
              n,
              l < o && xe(e.slice(l, o)),
              o < r && xe((e = e.slice(o))),
              o < r && ye(e)
            )
          }
          p.push(n)
        }
      return we(p)
    }
    return (
      (ve.prototype = i.filters = i.pseudos),
      (i.setFilters = new ve()),
      (a = se.tokenize = function (e, t) {
        var n,
          o,
          r,
          a,
          s,
          l,
          c,
          u = C[e + ' ']
        if (u) return t ? 0 : u.slice(0)
        for (s = e, l = [], c = i.preFilter; s; ) {
          for (a in ((n && !(o = W.exec(s))) ||
            (o && (s = s.slice(o[0].length) || s), l.push((r = []))),
          (n = !1),
          (o = B.exec(s)) &&
            ((n = o.shift()),
            r.push({ value: n, type: o[0].replace(F, ' ') }),
            (s = s.slice(n.length))),
          i.filter))
            !(o = Y[a].exec(s)) ||
              (c[a] && !(o = c[a](o))) ||
              ((n = o.shift()),
              r.push({ value: n, type: a, matches: o }),
              (s = s.slice(n.length)))
          if (!n) break
        }
        return t ? s.length : s ? se.error(e) : C(e, l).slice(0)
      }),
      (s = se.compile = function (e, t) {
        var n,
          o,
          r,
          s,
          l,
          u,
          d = [],
          h = [],
          m = S[e + ' ']
        if (!m) {
          for (t || (t = a(e)), n = t.length; n--; )
            (m = xe(t[n]))[b] ? d.push(m) : h.push(m)
          ;(m = S(
            e,
            ((o = h),
            (s = 0 < (r = d).length),
            (l = 0 < o.length),
            (u = function (e, t, n, a, u) {
              var d,
                h,
                m,
                _ = 0,
                v = '0',
                y = e && [],
                b = [],
                w = c,
                T = e || (l && i.find.TAG('*', u)),
                x = (k += null == w ? 1 : Math.random() || 0.1),
                C = T.length
              for (
                u && (c = t == f || t || u);
                v !== C && null != (d = T[v]);
                v++
              ) {
                if (l && d) {
                  for (
                    h = 0, t || d.ownerDocument == f || (p(d), (n = !g));
                    (m = o[h++]);

                  )
                    if (m(d, t || f, n)) {
                      a.push(d)
                      break
                    }
                  u && (k = x)
                }
                s && ((d = !m && d) && _--, e && y.push(d))
              }
              if (((_ += v), s && v !== _)) {
                for (h = 0; (m = r[h++]); ) m(y, b, t, n)
                if (e) {
                  if (0 < _) for (; v--; ) y[v] || b[v] || (b[v] = $.call(a))
                  b = ke(b)
                }
                O.apply(a, b),
                  u &&
                    !e &&
                    0 < b.length &&
                    1 < _ + r.length &&
                    se.uniqueSort(a)
              }
              return u && ((k = x), (c = w)), y
            }),
            s ? ce(u) : u)
          )).selector = e
        }
        return m
      }),
      (l = se.select = function (e, t, n, o) {
        var r,
          l,
          c,
          u,
          d,
          p = 'function' == typeof e && e,
          f = !o && a((e = p.selector || e))
        if (((n = n || []), 1 === f.length)) {
          if (
            2 < (l = f[0] = f[0].slice(0)).length &&
            'ID' === (c = l[0]).type &&
            9 === t.nodeType &&
            g &&
            i.relative[l[1].type]
          ) {
            if (!(t = (i.find.ID(c.matches[0].replace(te, ne), t) || [])[0]))
              return n
            p && (t = t.parentNode), (e = e.slice(l.shift().value.length))
          }
          for (
            r = Y.needsContext.test(e) ? 0 : l.length;
            r-- && ((c = l[r]), !i.relative[(u = c.type)]);

          )
            if (
              (d = i.find[u]) &&
              (o = d(
                c.matches[0].replace(te, ne),
                (ee.test(l[0].type) && _e(t.parentNode)) || t
              ))
            ) {
              if ((l.splice(r, 1), !(e = o.length && ye(l))))
                return O.apply(n, o), n
              break
            }
        }
        return (
          (p || s(e, f))(
            o,
            t,
            !g,
            n,
            !t || (ee.test(e) && _e(t.parentNode)) || t
          ),
          n
        )
      }),
      (n.sortStable =
        b
          .split('')
          .sort(A)
          .join('') === b),
      (n.detectDuplicates = !!d),
      p(),
      (n.sortDetached = ue(function (e) {
        return 1 & e.compareDocumentPosition(f.createElement('fieldset'))
      })),
      ue(function (e) {
        return (
          (e.innerHTML = "<a href='#'></a>"),
          '#' === e.firstChild.getAttribute('href')
        )
      }) ||
        de('type|href|height|width', function (e, t, n) {
          if (!n) return e.getAttribute(t, 'type' === t.toLowerCase() ? 1 : 2)
        }),
      (n.attributes &&
        ue(function (e) {
          return (
            (e.innerHTML = '<input/>'),
            e.firstChild.setAttribute('value', ''),
            '' === e.firstChild.getAttribute('value')
          )
        })) ||
        de('value', function (e, t, n) {
          if (!n && 'input' === e.nodeName.toLowerCase()) return e.defaultValue
        }),
      ue(function (e) {
        return null == e.getAttribute('disabled')
      }) ||
        de(L, function (e, t, n) {
          var i
          if (!n)
            return !0 === e[t]
              ? t.toLowerCase()
              : (i = e.getAttributeNode(t)) && i.specified
              ? i.value
              : null
        }),
      se
    )
  })(e)
  ;(w.find = T),
    (w.expr = T.selectors),
    (w.expr[':'] = w.expr.pseudos),
    (w.uniqueSort = w.unique = T.uniqueSort),
    (w.text = T.getText),
    (w.isXMLDoc = T.isXML),
    (w.contains = T.contains),
    (w.escapeSelector = T.escape)
  var x = function (e, t, n) {
      for (var i = [], o = void 0 !== n; (e = e[t]) && 9 !== e.nodeType; )
        if (1 === e.nodeType) {
          if (o && w(e).is(n)) break
          i.push(e)
        }
      return i
    },
    C = function (e, t) {
      for (var n = []; e; e = e.nextSibling)
        1 === e.nodeType && e !== t && n.push(e)
      return n
    },
    S = w.expr.match.needsContext
  function E (e, t) {
    return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
  }
  var A = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i
  function j (e, t, n) {
    return h(t)
      ? w.grep(e, function (e, i) {
          return !!t.call(e, i, e) !== n
        })
      : t.nodeType
      ? w.grep(e, function (e) {
          return (e === t) !== n
        })
      : 'string' != typeof t
      ? w.grep(e, function (e) {
          return -1 < s.call(t, e) !== n
        })
      : w.filter(t, e, n)
  }
  ;(w.filter = function (e, t, n) {
    var i = t[0]
    return (
      n && (e = ':not(' + e + ')'),
      1 === t.length && 1 === i.nodeType
        ? w.find.matchesSelector(i, e)
          ? [i]
          : []
        : w.find.matches(
            e,
            w.grep(t, function (e) {
              return 1 === e.nodeType
            })
          )
    )
  }),
    w.fn.extend({
      find: function (e) {
        var t,
          n,
          i = this.length,
          o = this
        if ('string' != typeof e)
          return this.pushStack(
            w(e).filter(function () {
              for (t = 0; t < i; t++) if (w.contains(o[t], this)) return !0
            })
          )
        for (n = this.pushStack([]), t = 0; t < i; t++) w.find(e, o[t], n)
        return 1 < i ? w.uniqueSort(n) : n
      },
      filter: function (e) {
        return this.pushStack(j(this, e || [], !1))
      },
      not: function (e) {
        return this.pushStack(j(this, e || [], !0))
      },
      is: function (e) {
        return !!j(this, 'string' == typeof e && S.test(e) ? w(e) : e || [], !1)
          .length
      }
    })
  var D,
    $ = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/
  ;((w.fn.init = function (e, t, n) {
    var i, o
    if (!e) return this
    if (((n = n || D), 'string' == typeof e)) {
      if (
        !(i =
          '<' === e[0] && '>' === e[e.length - 1] && 3 <= e.length
            ? [null, e, null]
            : $.exec(e)) ||
        (!i[1] && t)
      )
        return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e)
      if (i[1]) {
        if (
          ((t = t instanceof w ? t[0] : t),
          w.merge(
            this,
            w.parseHTML(i[1], t && t.nodeType ? t.ownerDocument || t : m, !0)
          ),
          A.test(i[1]) && w.isPlainObject(t))
        )
          for (i in t) h(this[i]) ? this[i](t[i]) : this.attr(i, t[i])
        return this
      }
      return (
        (o = m.getElementById(i[2])) && ((this[0] = o), (this.length = 1)), this
      )
    }
    return e.nodeType
      ? ((this[0] = e), (this.length = 1), this)
      : h(e)
      ? void 0 !== n.ready
        ? n.ready(e)
        : e(w)
      : w.makeArray(e, this)
  }).prototype = w.fn),
    (D = w(m))
  var N = /^(?:parents|prev(?:Until|All))/,
    O = { children: !0, contents: !0, next: !0, prev: !0 }
  function I (e, t) {
    for (; (e = e[t]) && 1 !== e.nodeType; );
    return e
  }
  w.fn.extend({
    has: function (e) {
      var t = w(e, this),
        n = t.length
      return this.filter(function () {
        for (var e = 0; e < n; e++) if (w.contains(this, t[e])) return !0
      })
    },
    closest: function (e, t) {
      var n,
        i = 0,
        o = this.length,
        r = [],
        a = 'string' != typeof e && w(e)
      if (!S.test(e))
        for (; i < o; i++)
          for (n = this[i]; n && n !== t; n = n.parentNode)
            if (
              n.nodeType < 11 &&
              (a
                ? -1 < a.index(n)
                : 1 === n.nodeType && w.find.matchesSelector(n, e))
            ) {
              r.push(n)
              break
            }
      return this.pushStack(1 < r.length ? w.uniqueSort(r) : r)
    },
    index: function (e) {
      return e
        ? 'string' == typeof e
          ? s.call(w(e), this[0])
          : s.call(this, e.jquery ? e[0] : e)
        : this[0] && this[0].parentNode
        ? this.first().prevAll().length
        : -1
    },
    add: function (e, t) {
      return this.pushStack(w.uniqueSort(w.merge(this.get(), w(e, t))))
    },
    addBack: function (e) {
      return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
    }
  }),
    w.each(
      {
        parent: function (e) {
          var t = e.parentNode
          return t && 11 !== t.nodeType ? t : null
        },
        parents: function (e) {
          return x(e, 'parentNode')
        },
        parentsUntil: function (e, t, n) {
          return x(e, 'parentNode', n)
        },
        next: function (e) {
          return I(e, 'nextSibling')
        },
        prev: function (e) {
          return I(e, 'previousSibling')
        },
        nextAll: function (e) {
          return x(e, 'nextSibling')
        },
        prevAll: function (e) {
          return x(e, 'previousSibling')
        },
        nextUntil: function (e, t, n) {
          return x(e, 'nextSibling', n)
        },
        prevUntil: function (e, t, n) {
          return x(e, 'previousSibling', n)
        },
        siblings: function (e) {
          return C((e.parentNode || {}).firstChild, e)
        },
        children: function (e) {
          return C(e.firstChild)
        },
        contents: function (e) {
          return null != e.contentDocument && i(e.contentDocument)
            ? e.contentDocument
            : (E(e, 'template') && (e = e.content || e),
              w.merge([], e.childNodes))
        }
      },
      function (e, t) {
        w.fn[e] = function (n, i) {
          var o = w.map(this, t, n)
          return (
            'Until' !== e.slice(-5) && (i = n),
            i && 'string' == typeof i && (o = w.filter(i, o)),
            1 < this.length &&
              (O[e] || w.uniqueSort(o), N.test(e) && o.reverse()),
            this.pushStack(o)
          )
        }
      }
    )
  var P = /[^\x20\t\r\n\f]+/g
  function L (e) {
    return e
  }
  function q (e) {
    throw e
  }
  function H (e, t, n, i) {
    var o
    try {
      e && h((o = e.promise))
        ? o
            .call(e)
            .done(t)
            .fail(n)
        : e && h((o = e.then))
        ? o.call(e, t, n)
        : t.apply(void 0, [e].slice(i))
    } catch (e) {
      n.apply(void 0, [e])
    }
  }
  ;(w.Callbacks = function (e) {
    var t, n
    e =
      'string' == typeof e
        ? ((t = e),
          (n = {}),
          w.each(t.match(P) || [], function (e, t) {
            n[t] = !0
          }),
          n)
        : w.extend({}, e)
    var i,
      o,
      r,
      a,
      s = [],
      l = [],
      c = -1,
      u = function () {
        for (a = a || e.once, r = i = !0; l.length; c = -1)
          for (o = l.shift(); ++c < s.length; )
            !1 === s[c].apply(o[0], o[1]) &&
              e.stopOnFalse &&
              ((c = s.length), (o = !1))
        e.memory || (o = !1), (i = !1), a && (s = o ? [] : '')
      },
      d = {
        add: function () {
          return (
            s &&
              (o && !i && ((c = s.length - 1), l.push(o)),
              (function t (n) {
                w.each(n, function (n, i) {
                  h(i)
                    ? (e.unique && d.has(i)) || s.push(i)
                    : i && i.length && 'string' !== y(i) && t(i)
                })
              })(arguments),
              o && !i && u()),
            this
          )
        },
        remove: function () {
          return (
            w.each(arguments, function (e, t) {
              for (var n; -1 < (n = w.inArray(t, s, n)); )
                s.splice(n, 1), n <= c && c--
            }),
            this
          )
        },
        has: function (e) {
          return e ? -1 < w.inArray(e, s) : 0 < s.length
        },
        empty: function () {
          return s && (s = []), this
        },
        disable: function () {
          return (a = l = []), (s = o = ''), this
        },
        disabled: function () {
          return !s
        },
        lock: function () {
          return (a = l = []), o || i || (s = o = ''), this
        },
        locked: function () {
          return !!a
        },
        fireWith: function (e, t) {
          return (
            a ||
              ((t = [e, (t = t || []).slice ? t.slice() : t]),
              l.push(t),
              i || u()),
            this
          )
        },
        fire: function () {
          return d.fireWith(this, arguments), this
        },
        fired: function () {
          return !!r
        }
      }
    return d
  }),
    w.extend({
      Deferred: function (t) {
        var n = [
            [
              'notify',
              'progress',
              w.Callbacks('memory'),
              w.Callbacks('memory'),
              2
            ],
            [
              'resolve',
              'done',
              w.Callbacks('once memory'),
              w.Callbacks('once memory'),
              0,
              'resolved'
            ],
            [
              'reject',
              'fail',
              w.Callbacks('once memory'),
              w.Callbacks('once memory'),
              1,
              'rejected'
            ]
          ],
          i = 'pending',
          o = {
            state: function () {
              return i
            },
            always: function () {
              return r.done(arguments).fail(arguments), this
            },
            catch: function (e) {
              return o.then(null, e)
            },
            pipe: function () {
              var e = arguments
              return w
                .Deferred(function (t) {
                  w.each(n, function (n, i) {
                    var o = h(e[i[4]]) && e[i[4]]
                    r[i[1]](function () {
                      var e = o && o.apply(this, arguments)
                      e && h(e.promise)
                        ? e
                            .promise()
                            .progress(t.notify)
                            .done(t.resolve)
                            .fail(t.reject)
                        : t[i[0] + 'With'](this, o ? [e] : arguments)
                    })
                  }),
                    (e = null)
                })
                .promise()
            },
            then: function (t, i, o) {
              var r = 0
              function a (t, n, i, o) {
                return function () {
                  var s = this,
                    l = arguments,
                    c = function () {
                      var e, c
                      if (!(t < r)) {
                        if ((e = i.apply(s, l)) === n.promise())
                          throw new TypeError('Thenable self-resolution')
                        ;(c =
                          e &&
                          ('object' == typeof e || 'function' == typeof e) &&
                          e.then),
                          h(c)
                            ? o
                              ? c.call(e, a(r, n, L, o), a(r, n, q, o))
                              : (r++,
                                c.call(
                                  e,
                                  a(r, n, L, o),
                                  a(r, n, q, o),
                                  a(r, n, L, n.notifyWith)
                                ))
                            : (i !== L && ((s = void 0), (l = [e])),
                              (o || n.resolveWith)(s, l))
                      }
                    },
                    u = o
                      ? c
                      : function () {
                          try {
                            c()
                          } catch (e) {
                            w.Deferred.exceptionHook &&
                              w.Deferred.exceptionHook(e, u.stackTrace),
                              r <= t + 1 &&
                                (i !== q && ((s = void 0), (l = [e])),
                                n.rejectWith(s, l))
                          }
                        }
                  t
                    ? u()
                    : (w.Deferred.getStackHook &&
                        (u.stackTrace = w.Deferred.getStackHook()),
                      e.setTimeout(u))
                }
              }
              return w
                .Deferred(function (e) {
                  n[0][3].add(a(0, e, h(o) ? o : L, e.notifyWith)),
                    n[1][3].add(a(0, e, h(t) ? t : L)),
                    n[2][3].add(a(0, e, h(i) ? i : q))
                })
                .promise()
            },
            promise: function (e) {
              return null != e ? w.extend(e, o) : o
            }
          },
          r = {}
        return (
          w.each(n, function (e, t) {
            var a = t[2],
              s = t[5]
            ;(o[t[1]] = a.add),
              s &&
                a.add(
                  function () {
                    i = s
                  },
                  n[3 - e][2].disable,
                  n[3 - e][3].disable,
                  n[0][2].lock,
                  n[0][3].lock
                ),
              a.add(t[3].fire),
              (r[t[0]] = function () {
                return (
                  r[t[0] + 'With'](this === r ? void 0 : this, arguments), this
                )
              }),
              (r[t[0] + 'With'] = a.fireWith)
          }),
          o.promise(r),
          t && t.call(r, r),
          r
        )
      },
      when: function (e) {
        var t = arguments.length,
          n = t,
          i = Array(n),
          r = o.call(arguments),
          a = w.Deferred(),
          s = function (e) {
            return function (n) {
              ;(i[e] = this),
                (r[e] = 1 < arguments.length ? o.call(arguments) : n),
                --t || a.resolveWith(i, r)
            }
          }
        if (
          t <= 1 &&
          (H(e, a.done(s(n)).resolve, a.reject, !t),
          'pending' === a.state() || h(r[n] && r[n].then))
        )
          return a.then()
        for (; n--; ) H(r[n], s(n), a.reject)
        return a.promise()
      }
    })
  var M = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/
  ;(w.Deferred.exceptionHook = function (t, n) {
    e.console &&
      e.console.warn &&
      t &&
      M.test(t.name) &&
      e.console.warn('jQuery.Deferred exception: ' + t.message, t.stack, n)
  }),
    (w.readyException = function (t) {
      e.setTimeout(function () {
        throw t
      })
    })
  var R = w.Deferred()
  function z () {
    m.removeEventListener('DOMContentLoaded', z),
      e.removeEventListener('load', z),
      w.ready()
  }
  ;(w.fn.ready = function (e) {
    return (
      R.then(e).catch(function (e) {
        w.readyException(e)
      }),
      this
    )
  }),
    w.extend({
      isReady: !1,
      readyWait: 1,
      ready: function (e) {
        ;(!0 === e ? --w.readyWait : w.isReady) ||
          ((w.isReady = !0) !== e && 0 < --w.readyWait) ||
          R.resolveWith(m, [w])
      }
    }),
    (w.ready.then = R.then),
    'complete' === m.readyState ||
    ('loading' !== m.readyState && !m.documentElement.doScroll)
      ? e.setTimeout(w.ready)
      : (m.addEventListener('DOMContentLoaded', z),
        e.addEventListener('load', z))
  var F = function (e, t, n, i, o, r, a) {
      var s = 0,
        l = e.length,
        c = null == n
      if ('object' === y(n)) for (s in ((o = !0), n)) F(e, t, s, n[s], !0, r, a)
      else if (
        void 0 !== i &&
        ((o = !0),
        h(i) || (a = !0),
        c &&
          (a
            ? (t.call(e, i), (t = null))
            : ((c = t),
              (t = function (e, t, n) {
                return c.call(w(e), n)
              }))),
        t)
      )
        for (; s < l; s++) t(e[s], n, a ? i : i.call(e[s], s, t(e[s], n)))
      return o ? e : c ? t.call(e) : l ? t(e[0], n) : r
    },
    W = /^-ms-/,
    B = /-([a-z])/g
  function U (e, t) {
    return t.toUpperCase()
  }
  function K (e) {
    return e.replace(W, 'ms-').replace(B, U)
  }
  var Q = function (e) {
    return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType
  }
  function Y () {
    this.expando = w.expando + Y.uid++
  }
  ;(Y.uid = 1),
    (Y.prototype = {
      cache: function (e) {
        var t = e[this.expando]
        return (
          t ||
            ((t = {}),
            Q(e) &&
              (e.nodeType
                ? (e[this.expando] = t)
                : Object.defineProperty(e, this.expando, {
                    value: t,
                    configurable: !0
                  }))),
          t
        )
      },
      set: function (e, t, n) {
        var i,
          o = this.cache(e)
        if ('string' == typeof t) o[K(t)] = n
        else for (i in t) o[K(i)] = t[i]
        return o
      },
      get: function (e, t) {
        return void 0 === t
          ? this.cache(e)
          : e[this.expando] && e[this.expando][K(t)]
      },
      access: function (e, t, n) {
        return void 0 === t || (t && 'string' == typeof t && void 0 === n)
          ? this.get(e, t)
          : (this.set(e, t, n), void 0 !== n ? n : t)
      },
      remove: function (e, t) {
        var n,
          i = e[this.expando]
        if (void 0 !== i) {
          if (void 0 !== t) {
            n = (t = Array.isArray(t)
              ? t.map(K)
              : (t = K(t)) in i
              ? [t]
              : t.match(P) || []).length
            for (; n--; ) delete i[t[n]]
          }
          ;(void 0 === t || w.isEmptyObject(i)) &&
            (e.nodeType ? (e[this.expando] = void 0) : delete e[this.expando])
        }
      },
      hasData: function (e) {
        var t = e[this.expando]
        return void 0 !== t && !w.isEmptyObject(t)
      }
    })
  var V = new Y(),
    X = new Y(),
    G = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
    J = /[A-Z]/g
  function Z (e, t, n) {
    var i, o
    if (void 0 === n && 1 === e.nodeType)
      if (
        ((i = 'data-' + t.replace(J, '-$&').toLowerCase()),
        'string' == typeof (n = e.getAttribute(i)))
      ) {
        try {
          n =
            'true' === (o = n) ||
            ('false' !== o &&
              ('null' === o
                ? null
                : o === +o + ''
                ? +o
                : G.test(o)
                ? JSON.parse(o)
                : o))
        } catch (e) {}
        X.set(e, t, n)
      } else n = void 0
    return n
  }
  w.extend({
    hasData: function (e) {
      return X.hasData(e) || V.hasData(e)
    },
    data: function (e, t, n) {
      return X.access(e, t, n)
    },
    removeData: function (e, t) {
      X.remove(e, t)
    },
    _data: function (e, t, n) {
      return V.access(e, t, n)
    },
    _removeData: function (e, t) {
      V.remove(e, t)
    }
  }),
    w.fn.extend({
      data: function (e, t) {
        var n,
          i,
          o,
          r = this[0],
          a = r && r.attributes
        if (void 0 === e) {
          if (
            this.length &&
            ((o = X.get(r)), 1 === r.nodeType && !V.get(r, 'hasDataAttrs'))
          ) {
            for (n = a.length; n--; )
              a[n] &&
                0 === (i = a[n].name).indexOf('data-') &&
                ((i = K(i.slice(5))), Z(r, i, o[i]))
            V.set(r, 'hasDataAttrs', !0)
          }
          return o
        }
        return 'object' == typeof e
          ? this.each(function () {
              X.set(this, e)
            })
          : F(
              this,
              function (t) {
                var n
                if (r && void 0 === t)
                  return void 0 !== (n = X.get(r, e)) ||
                    void 0 !== (n = Z(r, e))
                    ? n
                    : void 0
                this.each(function () {
                  X.set(this, e, t)
                })
              },
              null,
              t,
              1 < arguments.length,
              null,
              !0
            )
      },
      removeData: function (e) {
        return this.each(function () {
          X.remove(this, e)
        })
      }
    }),
    w.extend({
      queue: function (e, t, n) {
        var i
        if (e)
          return (
            (t = (t || 'fx') + 'queue'),
            (i = V.get(e, t)),
            n &&
              (!i || Array.isArray(n)
                ? (i = V.access(e, t, w.makeArray(n)))
                : i.push(n)),
            i || []
          )
      },
      dequeue: function (e, t) {
        t = t || 'fx'
        var n = w.queue(e, t),
          i = n.length,
          o = n.shift(),
          r = w._queueHooks(e, t)
        'inprogress' === o && ((o = n.shift()), i--),
          o &&
            ('fx' === t && n.unshift('inprogress'),
            delete r.stop,
            o.call(
              e,
              function () {
                w.dequeue(e, t)
              },
              r
            )),
          !i && r && r.empty.fire()
      },
      _queueHooks: function (e, t) {
        var n = t + 'queueHooks'
        return (
          V.get(e, n) ||
          V.access(e, n, {
            empty: w.Callbacks('once memory').add(function () {
              V.remove(e, [t + 'queue', n])
            })
          })
        )
      }
    }),
    w.fn.extend({
      queue: function (e, t) {
        var n = 2
        return (
          'string' != typeof e && ((t = e), (e = 'fx'), n--),
          arguments.length < n
            ? w.queue(this[0], e)
            : void 0 === t
            ? this
            : this.each(function () {
                var n = w.queue(this, e, t)
                w._queueHooks(this, e),
                  'fx' === e && 'inprogress' !== n[0] && w.dequeue(this, e)
              })
        )
      },
      dequeue: function (e) {
        return this.each(function () {
          w.dequeue(this, e)
        })
      },
      clearQueue: function (e) {
        return this.queue(e || 'fx', [])
      },
      promise: function (e, t) {
        var n,
          i = 1,
          o = w.Deferred(),
          r = this,
          a = this.length,
          s = function () {
            --i || o.resolveWith(r, [r])
          }
        for (
          'string' != typeof e && ((t = e), (e = void 0)), e = e || 'fx';
          a--;

        )
          (n = V.get(r[a], e + 'queueHooks')) &&
            n.empty &&
            (i++, n.empty.add(s))
        return s(), o.promise(t)
      }
    })
  var ee = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
    te = new RegExp('^(?:([+-])=|)(' + ee + ')([a-z%]*)$', 'i'),
    ne = ['Top', 'Right', 'Bottom', 'Left'],
    ie = m.documentElement,
    oe = function (e) {
      return w.contains(e.ownerDocument, e)
    },
    re = { composed: !0 }
  ie.getRootNode &&
    (oe = function (e) {
      return (
        w.contains(e.ownerDocument, e) || e.getRootNode(re) === e.ownerDocument
      )
    })
  var ae = function (e, t) {
    return (
      'none' === (e = t || e).style.display ||
      ('' === e.style.display && oe(e) && 'none' === w.css(e, 'display'))
    )
  }
  function se (e, t, n, i) {
    var o,
      r,
      a = 20,
      s = i
        ? function () {
            return i.cur()
          }
        : function () {
            return w.css(e, t, '')
          },
      l = s(),
      c = (n && n[3]) || (w.cssNumber[t] ? '' : 'px'),
      u =
        e.nodeType &&
        (w.cssNumber[t] || ('px' !== c && +l)) &&
        te.exec(w.css(e, t))
    if (u && u[3] !== c) {
      for (l /= 2, c = c || u[3], u = +l || 1; a--; )
        w.style(e, t, u + c),
          (1 - r) * (1 - (r = s() / l || 0.5)) <= 0 && (a = 0),
          (u /= r)
      ;(u *= 2), w.style(e, t, u + c), (n = n || [])
    }
    return (
      n &&
        ((u = +u || +l || 0),
        (o = n[1] ? u + (n[1] + 1) * n[2] : +n[2]),
        i && ((i.unit = c), (i.start = u), (i.end = o))),
      o
    )
  }
  var le = {}
  function ce (e, t) {
    for (var n, i, o, r, a, s, l, c = [], u = 0, d = e.length; u < d; u++)
      (i = e[u]).style &&
        ((n = i.style.display),
        t
          ? ('none' === n &&
              ((c[u] = V.get(i, 'display') || null),
              c[u] || (i.style.display = '')),
            '' === i.style.display &&
              ae(i) &&
              (c[u] =
                ((l = a = r = void 0),
                (a = (o = i).ownerDocument),
                (s = o.nodeName),
                (l = le[s]) ||
                  ((r = a.body.appendChild(a.createElement(s))),
                  (l = w.css(r, 'display')),
                  r.parentNode.removeChild(r),
                  'none' === l && (l = 'block'),
                  (le[s] = l)))))
          : 'none' !== n && ((c[u] = 'none'), V.set(i, 'display', n)))
    for (u = 0; u < d; u++) null != c[u] && (e[u].style.display = c[u])
    return e
  }
  w.fn.extend({
    show: function () {
      return ce(this, !0)
    },
    hide: function () {
      return ce(this)
    },
    toggle: function (e) {
      return 'boolean' == typeof e
        ? e
          ? this.show()
          : this.hide()
        : this.each(function () {
            ae(this) ? w(this).show() : w(this).hide()
          })
    }
  })
  var ue,
    de,
    pe = /^(?:checkbox|radio)$/i,
    fe = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i,
    he = /^$|^module$|\/(?:java|ecma)script/i
  ;(ue = m.createDocumentFragment().appendChild(m.createElement('div'))),
    (de = m.createElement('input')).setAttribute('type', 'radio'),
    de.setAttribute('checked', 'checked'),
    de.setAttribute('name', 't'),
    ue.appendChild(de),
    (f.checkClone = ue.cloneNode(!0).cloneNode(!0).lastChild.checked),
    (ue.innerHTML = '<textarea>x</textarea>'),
    (f.noCloneChecked = !!ue.cloneNode(!0).lastChild.defaultValue),
    (ue.innerHTML = '<option></option>'),
    (f.option = !!ue.lastChild)
  var ge = {
    thead: [1, '<table>', '</table>'],
    col: [2, '<table><colgroup>', '</colgroup></table>'],
    tr: [2, '<table><tbody>', '</tbody></table>'],
    td: [3, '<table><tbody><tr>', '</tr></tbody></table>'],
    _default: [0, '', '']
  }
  function me (e, t) {
    var n
    return (
      (n =
        void 0 !== e.getElementsByTagName
          ? e.getElementsByTagName(t || '*')
          : void 0 !== e.querySelectorAll
          ? e.querySelectorAll(t || '*')
          : []),
      void 0 === t || (t && E(e, t)) ? w.merge([e], n) : n
    )
  }
  function _e (e, t) {
    for (var n = 0, i = e.length; n < i; n++)
      V.set(e[n], 'globalEval', !t || V.get(t[n], 'globalEval'))
  }
  ;(ge.tbody = ge.tfoot = ge.colgroup = ge.caption = ge.thead),
    (ge.th = ge.td),
    f.option ||
      (ge.optgroup = ge.option = [
        1,
        "<select multiple='multiple'>",
        '</select>'
      ])
  var ve = /<|&#?\w+;/
  function ye (e, t, n, i, o) {
    for (
      var r,
        a,
        s,
        l,
        c,
        u,
        d = t.createDocumentFragment(),
        p = [],
        f = 0,
        h = e.length;
      f < h;
      f++
    )
      if ((r = e[f]) || 0 === r)
        if ('object' === y(r)) w.merge(p, r.nodeType ? [r] : r)
        else if (ve.test(r)) {
          for (
            a = a || d.appendChild(t.createElement('div')),
              s = (fe.exec(r) || ['', ''])[1].toLowerCase(),
              l = ge[s] || ge._default,
              a.innerHTML = l[1] + w.htmlPrefilter(r) + l[2],
              u = l[0];
            u--;

          )
            a = a.lastChild
          w.merge(p, a.childNodes), ((a = d.firstChild).textContent = '')
        } else p.push(t.createTextNode(r))
    for (d.textContent = '', f = 0; (r = p[f++]); )
      if (i && -1 < w.inArray(r, i)) o && o.push(r)
      else if (
        ((c = oe(r)), (a = me(d.appendChild(r), 'script')), c && _e(a), n)
      )
        for (u = 0; (r = a[u++]); ) he.test(r.type || '') && n.push(r)
    return d
  }
  var be = /^key/,
    we = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
    ke = /^([^.]*)(?:\.(.+)|)/
  function Te () {
    return !0
  }
  function xe () {
    return !1
  }
  function Ce (e, t) {
    return (
      (e ===
        (function () {
          try {
            return m.activeElement
          } catch (e) {}
        })()) ==
      ('focus' === t)
    )
  }
  function Se (e, t, n, i, o, r) {
    var a, s
    if ('object' == typeof t) {
      for (s in ('string' != typeof n && ((i = i || n), (n = void 0)), t))
        Se(e, s, n, i, t[s], r)
      return e
    }
    if (
      (null == i && null == o
        ? ((o = n), (i = n = void 0))
        : null == o &&
          ('string' == typeof n
            ? ((o = i), (i = void 0))
            : ((o = i), (i = n), (n = void 0))),
      !1 === o)
    )
      o = xe
    else if (!o) return e
    return (
      1 === r &&
        ((a = o),
        ((o = function (e) {
          return w().off(e), a.apply(this, arguments)
        }).guid = a.guid || (a.guid = w.guid++))),
      e.each(function () {
        w.event.add(this, t, o, i, n)
      })
    )
  }
  function Ee (e, t, n) {
    n
      ? (V.set(e, t, !1),
        w.event.add(e, t, {
          namespace: !1,
          handler: function (e) {
            var i,
              r,
              a = V.get(this, t)
            if (1 & e.isTrigger && this[t]) {
              if (a.length)
                (w.event.special[t] || {}).delegateType && e.stopPropagation()
              else if (
                ((a = o.call(arguments)),
                V.set(this, t, a),
                (i = n(this, t)),
                this[t](),
                a !== (r = V.get(this, t)) || i ? V.set(this, t, !1) : (r = {}),
                a !== r)
              )
                return e.stopImmediatePropagation(), e.preventDefault(), r.value
            } else
              a.length &&
                (V.set(this, t, {
                  value: w.event.trigger(
                    w.extend(a[0], w.Event.prototype),
                    a.slice(1),
                    this
                  )
                }),
                e.stopImmediatePropagation())
          }
        }))
      : void 0 === V.get(e, t) && w.event.add(e, t, Te)
  }
  ;(w.event = {
    global: {},
    add: function (e, t, n, i, o) {
      var r,
        a,
        s,
        l,
        c,
        u,
        d,
        p,
        f,
        h,
        g,
        m = V.get(e)
      if (Q(e))
        for (
          n.handler && ((n = (r = n).handler), (o = r.selector)),
            o && w.find.matchesSelector(ie, o),
            n.guid || (n.guid = w.guid++),
            (l = m.events) || (l = m.events = Object.create(null)),
            (a = m.handle) ||
              (a = m.handle = function (t) {
                return void 0 !== w && w.event.triggered !== t.type
                  ? w.event.dispatch.apply(e, arguments)
                  : void 0
              }),
            c = (t = (t || '').match(P) || ['']).length;
          c--;

        )
          (f = g = (s = ke.exec(t[c]) || [])[1]),
            (h = (s[2] || '').split('.').sort()),
            f &&
              ((d = w.event.special[f] || {}),
              (f = (o ? d.delegateType : d.bindType) || f),
              (d = w.event.special[f] || {}),
              (u = w.extend(
                {
                  type: f,
                  origType: g,
                  data: i,
                  handler: n,
                  guid: n.guid,
                  selector: o,
                  needsContext: o && w.expr.match.needsContext.test(o),
                  namespace: h.join('.')
                },
                r
              )),
              (p = l[f]) ||
                (((p = l[f] = []).delegateCount = 0),
                (d.setup && !1 !== d.setup.call(e, i, h, a)) ||
                  (e.addEventListener && e.addEventListener(f, a))),
              d.add &&
                (d.add.call(e, u), u.handler.guid || (u.handler.guid = n.guid)),
              o ? p.splice(p.delegateCount++, 0, u) : p.push(u),
              (w.event.global[f] = !0))
    },
    remove: function (e, t, n, i, o) {
      var r,
        a,
        s,
        l,
        c,
        u,
        d,
        p,
        f,
        h,
        g,
        m = V.hasData(e) && V.get(e)
      if (m && (l = m.events)) {
        for (c = (t = (t || '').match(P) || ['']).length; c--; )
          if (
            ((f = g = (s = ke.exec(t[c]) || [])[1]),
            (h = (s[2] || '').split('.').sort()),
            f)
          ) {
            for (
              d = w.event.special[f] || {},
                p = l[(f = (i ? d.delegateType : d.bindType) || f)] || [],
                s =
                  s[2] &&
                  new RegExp('(^|\\.)' + h.join('\\.(?:.*\\.|)') + '(\\.|$)'),
                a = r = p.length;
              r--;

            )
              (u = p[r]),
                (!o && g !== u.origType) ||
                  (n && n.guid !== u.guid) ||
                  (s && !s.test(u.namespace)) ||
                  (i && i !== u.selector && ('**' !== i || !u.selector)) ||
                  (p.splice(r, 1),
                  u.selector && p.delegateCount--,
                  d.remove && d.remove.call(e, u))
            a &&
              !p.length &&
              ((d.teardown && !1 !== d.teardown.call(e, h, m.handle)) ||
                w.removeEvent(e, f, m.handle),
              delete l[f])
          } else for (f in l) w.event.remove(e, f + t[c], n, i, !0)
        w.isEmptyObject(l) && V.remove(e, 'handle events')
      }
    },
    dispatch: function (e) {
      var t,
        n,
        i,
        o,
        r,
        a,
        s = new Array(arguments.length),
        l = w.event.fix(e),
        c = (V.get(this, 'events') || Object.create(null))[l.type] || [],
        u = w.event.special[l.type] || {}
      for (s[0] = l, t = 1; t < arguments.length; t++) s[t] = arguments[t]
      if (
        ((l.delegateTarget = this),
        !u.preDispatch || !1 !== u.preDispatch.call(this, l))
      ) {
        for (
          a = w.event.handlers.call(this, l, c), t = 0;
          (o = a[t++]) && !l.isPropagationStopped();

        )
          for (
            l.currentTarget = o.elem, n = 0;
            (r = o.handlers[n++]) && !l.isImmediatePropagationStopped();

          )
            (l.rnamespace &&
              !1 !== r.namespace &&
              !l.rnamespace.test(r.namespace)) ||
              ((l.handleObj = r),
              (l.data = r.data),
              void 0 !==
                (i = (
                  (w.event.special[r.origType] || {}).handle || r.handler
                ).apply(o.elem, s)) &&
                !1 === (l.result = i) &&
                (l.preventDefault(), l.stopPropagation()))
        return u.postDispatch && u.postDispatch.call(this, l), l.result
      }
    },
    handlers: function (e, t) {
      var n,
        i,
        o,
        r,
        a,
        s = [],
        l = t.delegateCount,
        c = e.target
      if (l && c.nodeType && !('click' === e.type && 1 <= e.button))
        for (; c !== this; c = c.parentNode || this)
          if (1 === c.nodeType && ('click' !== e.type || !0 !== c.disabled)) {
            for (r = [], a = {}, n = 0; n < l; n++)
              void 0 === a[(o = (i = t[n]).selector + ' ')] &&
                (a[o] = i.needsContext
                  ? -1 < w(o, this).index(c)
                  : w.find(o, this, null, [c]).length),
                a[o] && r.push(i)
            r.length && s.push({ elem: c, handlers: r })
          }
      return (
        (c = this), l < t.length && s.push({ elem: c, handlers: t.slice(l) }), s
      )
    },
    addProp: function (e, t) {
      Object.defineProperty(w.Event.prototype, e, {
        enumerable: !0,
        configurable: !0,
        get: h(t)
          ? function () {
              if (this.originalEvent) return t(this.originalEvent)
            }
          : function () {
              if (this.originalEvent) return this.originalEvent[e]
            },
        set: function (t) {
          Object.defineProperty(this, e, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: t
          })
        }
      })
    },
    fix: function (e) {
      return e[w.expando] ? e : new w.Event(e)
    },
    special: {
      load: { noBubble: !0 },
      click: {
        setup: function (e) {
          var t = this || e
          return (
            pe.test(t.type) && t.click && E(t, 'input') && Ee(t, 'click', Te),
            !1
          )
        },
        trigger: function (e) {
          var t = this || e
          return (
            pe.test(t.type) && t.click && E(t, 'input') && Ee(t, 'click'), !0
          )
        },
        _default: function (e) {
          var t = e.target
          return (
            (pe.test(t.type) &&
              t.click &&
              E(t, 'input') &&
              V.get(t, 'click')) ||
            E(t, 'a')
          )
        }
      },
      beforeunload: {
        postDispatch: function (e) {
          void 0 !== e.result &&
            e.originalEvent &&
            (e.originalEvent.returnValue = e.result)
        }
      }
    }
  }),
    (w.removeEvent = function (e, t, n) {
      e.removeEventListener && e.removeEventListener(t, n)
    }),
    (w.Event = function (e, t) {
      if (!(this instanceof w.Event)) return new w.Event(e, t)
      e && e.type
        ? ((this.originalEvent = e),
          (this.type = e.type),
          (this.isDefaultPrevented =
            e.defaultPrevented ||
            (void 0 === e.defaultPrevented && !1 === e.returnValue)
              ? Te
              : xe),
          (this.target =
            e.target && 3 === e.target.nodeType
              ? e.target.parentNode
              : e.target),
          (this.currentTarget = e.currentTarget),
          (this.relatedTarget = e.relatedTarget))
        : (this.type = e),
        t && w.extend(this, t),
        (this.timeStamp = (e && e.timeStamp) || Date.now()),
        (this[w.expando] = !0)
    }),
    (w.Event.prototype = {
      constructor: w.Event,
      isDefaultPrevented: xe,
      isPropagationStopped: xe,
      isImmediatePropagationStopped: xe,
      isSimulated: !1,
      preventDefault: function () {
        var e = this.originalEvent
        ;(this.isDefaultPrevented = Te),
          e && !this.isSimulated && e.preventDefault()
      },
      stopPropagation: function () {
        var e = this.originalEvent
        ;(this.isPropagationStopped = Te),
          e && !this.isSimulated && e.stopPropagation()
      },
      stopImmediatePropagation: function () {
        var e = this.originalEvent
        ;(this.isImmediatePropagationStopped = Te),
          e && !this.isSimulated && e.stopImmediatePropagation(),
          this.stopPropagation()
      }
    }),
    w.each(
      {
        altKey: !0,
        bubbles: !0,
        cancelable: !0,
        changedTouches: !0,
        ctrlKey: !0,
        detail: !0,
        eventPhase: !0,
        metaKey: !0,
        pageX: !0,
        pageY: !0,
        shiftKey: !0,
        view: !0,
        char: !0,
        code: !0,
        charCode: !0,
        key: !0,
        keyCode: !0,
        button: !0,
        buttons: !0,
        clientX: !0,
        clientY: !0,
        offsetX: !0,
        offsetY: !0,
        pointerId: !0,
        pointerType: !0,
        screenX: !0,
        screenY: !0,
        targetTouches: !0,
        toElement: !0,
        touches: !0,
        which: function (e) {
          var t = e.button
          return null == e.which && be.test(e.type)
            ? null != e.charCode
              ? e.charCode
              : e.keyCode
            : !e.which && void 0 !== t && we.test(e.type)
            ? 1 & t
              ? 1
              : 2 & t
              ? 3
              : 4 & t
              ? 2
              : 0
            : e.which
        }
      },
      w.event.addProp
    ),
    w.each({ focus: 'focusin', blur: 'focusout' }, function (e, t) {
      w.event.special[e] = {
        setup: function () {
          return Ee(this, e, Ce), !1
        },
        trigger: function () {
          return Ee(this, e), !0
        },
        delegateType: t
      }
    }),
    w.each(
      {
        mouseenter: 'mouseover',
        mouseleave: 'mouseout',
        pointerenter: 'pointerover',
        pointerleave: 'pointerout'
      },
      function (e, t) {
        w.event.special[e] = {
          delegateType: t,
          bindType: t,
          handle: function (e) {
            var n,
              i = e.relatedTarget,
              o = e.handleObj
            return (
              (i && (i === this || w.contains(this, i))) ||
                ((e.type = o.origType),
                (n = o.handler.apply(this, arguments)),
                (e.type = t)),
              n
            )
          }
        }
      }
    ),
    w.fn.extend({
      on: function (e, t, n, i) {
        return Se(this, e, t, n, i)
      },
      one: function (e, t, n, i) {
        return Se(this, e, t, n, i, 1)
      },
      off: function (e, t, n) {
        var i, o
        if (e && e.preventDefault && e.handleObj)
          return (
            (i = e.handleObj),
            w(e.delegateTarget).off(
              i.namespace ? i.origType + '.' + i.namespace : i.origType,
              i.selector,
              i.handler
            ),
            this
          )
        if ('object' == typeof e) {
          for (o in e) this.off(o, t, e[o])
          return this
        }
        return (
          (!1 !== t && 'function' != typeof t) || ((n = t), (t = void 0)),
          !1 === n && (n = xe),
          this.each(function () {
            w.event.remove(this, e, n, t)
          })
        )
      }
    })
  var Ae = /<script|<style|<link/i,
    je = /checked\s*(?:[^=]|=\s*.checked.)/i,
    De = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g
  function $e (e, t) {
    return (
      (E(e, 'table') &&
        E(11 !== t.nodeType ? t : t.firstChild, 'tr') &&
        w(e).children('tbody')[0]) ||
      e
    )
  }
  function Ne (e) {
    return (e.type = (null !== e.getAttribute('type')) + '/' + e.type), e
  }
  function Oe (e) {
    return (
      'true/' === (e.type || '').slice(0, 5)
        ? (e.type = e.type.slice(5))
        : e.removeAttribute('type'),
      e
    )
  }
  function Ie (e, t) {
    var n, i, o, r, a, s
    if (1 === t.nodeType) {
      if (V.hasData(e) && (s = V.get(e).events))
        for (o in (V.remove(t, 'handle events'), s))
          for (n = 0, i = s[o].length; n < i; n++) w.event.add(t, o, s[o][n])
      X.hasData(e) && ((r = X.access(e)), (a = w.extend({}, r)), X.set(t, a))
    }
  }
  function Pe (e, t, n, i) {
    t = r(t)
    var o,
      a,
      s,
      l,
      c,
      u,
      d = 0,
      p = e.length,
      g = p - 1,
      m = t[0],
      _ = h(m)
    if (_ || (1 < p && 'string' == typeof m && !f.checkClone && je.test(m)))
      return e.each(function (o) {
        var r = e.eq(o)
        _ && (t[0] = m.call(this, o, r.html())), Pe(r, t, n, i)
      })
    if (
      p &&
      ((a = (o = ye(t, e[0].ownerDocument, !1, e, i)).firstChild),
      1 === o.childNodes.length && (o = a),
      a || i)
    ) {
      for (l = (s = w.map(me(o, 'script'), Ne)).length; d < p; d++)
        (c = o),
          d !== g &&
            ((c = w.clone(c, !0, !0)), l && w.merge(s, me(c, 'script'))),
          n.call(e[d], c, d)
      if (l)
        for (u = s[s.length - 1].ownerDocument, w.map(s, Oe), d = 0; d < l; d++)
          (c = s[d]),
            he.test(c.type || '') &&
              !V.access(c, 'globalEval') &&
              w.contains(u, c) &&
              (c.src && 'module' !== (c.type || '').toLowerCase()
                ? w._evalUrl &&
                  !c.noModule &&
                  w._evalUrl(
                    c.src,
                    { nonce: c.nonce || c.getAttribute('nonce') },
                    u
                  )
                : v(c.textContent.replace(De, ''), c, u))
    }
    return e
  }
  function Le (e, t, n) {
    for (var i, o = t ? w.filter(t, e) : e, r = 0; null != (i = o[r]); r++)
      n || 1 !== i.nodeType || w.cleanData(me(i)),
        i.parentNode &&
          (n && oe(i) && _e(me(i, 'script')), i.parentNode.removeChild(i))
    return e
  }
  w.extend({
    htmlPrefilter: function (e) {
      return e
    },
    clone: function (e, t, n) {
      var i,
        o,
        r,
        a,
        s,
        l,
        c,
        u = e.cloneNode(!0),
        d = oe(e)
      if (
        !(
          f.noCloneChecked ||
          (1 !== e.nodeType && 11 !== e.nodeType) ||
          w.isXMLDoc(e)
        )
      )
        for (a = me(u), i = 0, o = (r = me(e)).length; i < o; i++)
          (s = r[i]),
            'input' === (c = (l = a[i]).nodeName.toLowerCase()) &&
            pe.test(s.type)
              ? (l.checked = s.checked)
              : ('input' !== c && 'textarea' !== c) ||
                (l.defaultValue = s.defaultValue)
      if (t)
        if (n)
          for (r = r || me(e), a = a || me(u), i = 0, o = r.length; i < o; i++)
            Ie(r[i], a[i])
        else Ie(e, u)
      return 0 < (a = me(u, 'script')).length && _e(a, !d && me(e, 'script')), u
    },
    cleanData: function (e) {
      for (var t, n, i, o = w.event.special, r = 0; void 0 !== (n = e[r]); r++)
        if (Q(n)) {
          if ((t = n[V.expando])) {
            if (t.events)
              for (i in t.events)
                o[i] ? w.event.remove(n, i) : w.removeEvent(n, i, t.handle)
            n[V.expando] = void 0
          }
          n[X.expando] && (n[X.expando] = void 0)
        }
    }
  }),
    w.fn.extend({
      detach: function (e) {
        return Le(this, e, !0)
      },
      remove: function (e) {
        return Le(this, e)
      },
      text: function (e) {
        return F(
          this,
          function (e) {
            return void 0 === e
              ? w.text(this)
              : this.empty().each(function () {
                  ;(1 !== this.nodeType &&
                    11 !== this.nodeType &&
                    9 !== this.nodeType) ||
                    (this.textContent = e)
                })
          },
          null,
          e,
          arguments.length
        )
      },
      append: function () {
        return Pe(this, arguments, function (e) {
          ;(1 !== this.nodeType &&
            11 !== this.nodeType &&
            9 !== this.nodeType) ||
            $e(this, e).appendChild(e)
        })
      },
      prepend: function () {
        return Pe(this, arguments, function (e) {
          if (
            1 === this.nodeType ||
            11 === this.nodeType ||
            9 === this.nodeType
          ) {
            var t = $e(this, e)
            t.insertBefore(e, t.firstChild)
          }
        })
      },
      before: function () {
        return Pe(this, arguments, function (e) {
          this.parentNode && this.parentNode.insertBefore(e, this)
        })
      },
      after: function () {
        return Pe(this, arguments, function (e) {
          this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
        })
      },
      empty: function () {
        for (var e, t = 0; null != (e = this[t]); t++)
          1 === e.nodeType && (w.cleanData(me(e, !1)), (e.textContent = ''))
        return this
      },
      clone: function (e, t) {
        return (
          (e = null != e && e),
          (t = null == t ? e : t),
          this.map(function () {
            return w.clone(this, e, t)
          })
        )
      },
      html: function (e) {
        return F(
          this,
          function (e) {
            var t = this[0] || {},
              n = 0,
              i = this.length
            if (void 0 === e && 1 === t.nodeType) return t.innerHTML
            if (
              'string' == typeof e &&
              !Ae.test(e) &&
              !ge[(fe.exec(e) || ['', ''])[1].toLowerCase()]
            ) {
              e = w.htmlPrefilter(e)
              try {
                for (; n < i; n++)
                  1 === (t = this[n] || {}).nodeType &&
                    (w.cleanData(me(t, !1)), (t.innerHTML = e))
                t = 0
              } catch (e) {}
            }
            t && this.empty().append(e)
          },
          null,
          e,
          arguments.length
        )
      },
      replaceWith: function () {
        var e = []
        return Pe(
          this,
          arguments,
          function (t) {
            var n = this.parentNode
            w.inArray(this, e) < 0 &&
              (w.cleanData(me(this)), n && n.replaceChild(t, this))
          },
          e
        )
      }
    }),
    w.each(
      {
        appendTo: 'append',
        prependTo: 'prepend',
        insertBefore: 'before',
        insertAfter: 'after',
        replaceAll: 'replaceWith'
      },
      function (e, t) {
        w.fn[e] = function (e) {
          for (var n, i = [], o = w(e), r = o.length - 1, s = 0; s <= r; s++)
            (n = s === r ? this : this.clone(!0)),
              w(o[s])[t](n),
              a.apply(i, n.get())
          return this.pushStack(i)
        }
      }
    )
  var qe = new RegExp('^(' + ee + ')(?!px)[a-z%]+$', 'i'),
    He = function (t) {
      var n = t.ownerDocument.defaultView
      return (n && n.opener) || (n = e), n.getComputedStyle(t)
    },
    Me = function (e, t, n) {
      var i,
        o,
        r = {}
      for (o in t) (r[o] = e.style[o]), (e.style[o] = t[o])
      for (o in ((i = n.call(e)), t)) e.style[o] = r[o]
      return i
    },
    Re = new RegExp(ne.join('|'), 'i')
  function ze (e, t, n) {
    var i,
      o,
      r,
      a,
      s = e.style
    return (
      (n = n || He(e)) &&
        ('' !== (a = n.getPropertyValue(t) || n[t]) ||
          oe(e) ||
          (a = w.style(e, t)),
        !f.pixelBoxStyles() &&
          qe.test(a) &&
          Re.test(t) &&
          ((i = s.width),
          (o = s.minWidth),
          (r = s.maxWidth),
          (s.minWidth = s.maxWidth = s.width = a),
          (a = n.width),
          (s.width = i),
          (s.minWidth = o),
          (s.maxWidth = r))),
      void 0 !== a ? a + '' : a
    )
  }
  function Fe (e, t) {
    return {
      get: function () {
        if (!e()) return (this.get = t).apply(this, arguments)
        delete this.get
      }
    }
  }
  !(function () {
    function t () {
      if (u) {
        ;(c.style.cssText =
          'position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0'),
          (u.style.cssText =
            'position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%'),
          ie.appendChild(c).appendChild(u)
        var t = e.getComputedStyle(u)
        ;(i = '1%' !== t.top),
          (l = 12 === n(t.marginLeft)),
          (u.style.right = '60%'),
          (a = 36 === n(t.right)),
          (o = 36 === n(t.width)),
          (u.style.position = 'absolute'),
          (r = 12 === n(u.offsetWidth / 3)),
          ie.removeChild(c),
          (u = null)
      }
    }
    function n (e) {
      return Math.round(parseFloat(e))
    }
    var i,
      o,
      r,
      a,
      s,
      l,
      c = m.createElement('div'),
      u = m.createElement('div')
    u.style &&
      ((u.style.backgroundClip = 'content-box'),
      (u.cloneNode(!0).style.backgroundClip = ''),
      (f.clearCloneStyle = 'content-box' === u.style.backgroundClip),
      w.extend(f, {
        boxSizingReliable: function () {
          return t(), o
        },
        pixelBoxStyles: function () {
          return t(), a
        },
        pixelPosition: function () {
          return t(), i
        },
        reliableMarginLeft: function () {
          return t(), l
        },
        scrollboxSize: function () {
          return t(), r
        },
        reliableTrDimensions: function () {
          var t, n, i, o
          return (
            null == s &&
              ((t = m.createElement('table')),
              (n = m.createElement('tr')),
              (i = m.createElement('div')),
              (t.style.cssText = 'position:absolute;left:-11111px'),
              (n.style.height = '1px'),
              (i.style.height = '9px'),
              ie
                .appendChild(t)
                .appendChild(n)
                .appendChild(i),
              (o = e.getComputedStyle(n)),
              (s = 3 < parseInt(o.height)),
              ie.removeChild(t)),
            s
          )
        }
      }))
  })()
  var We = ['Webkit', 'Moz', 'ms'],
    Be = m.createElement('div').style,
    Ue = {}
  function Ke (e) {
    return (
      w.cssProps[e] ||
      Ue[e] ||
      (e in Be
        ? e
        : (Ue[e] =
            (function (e) {
              for (
                var t = e[0].toUpperCase() + e.slice(1), n = We.length;
                n--;

              )
                if ((e = We[n] + t) in Be) return e
            })(e) || e))
    )
  }
  var Qe = /^(none|table(?!-c[ea]).+)/,
    Ye = /^--/,
    Ve = { position: 'absolute', visibility: 'hidden', display: 'block' },
    Xe = { letterSpacing: '0', fontWeight: '400' }
  function Ge (e, t, n) {
    var i = te.exec(t)
    return i ? Math.max(0, i[2] - (n || 0)) + (i[3] || 'px') : t
  }
  function Je (e, t, n, i, o, r) {
    var a = 'width' === t ? 1 : 0,
      s = 0,
      l = 0
    if (n === (i ? 'border' : 'content')) return 0
    for (; a < 4; a += 2)
      'margin' === n && (l += w.css(e, n + ne[a], !0, o)),
        i
          ? ('content' === n && (l -= w.css(e, 'padding' + ne[a], !0, o)),
            'margin' !== n &&
              (l -= w.css(e, 'border' + ne[a] + 'Width', !0, o)))
          : ((l += w.css(e, 'padding' + ne[a], !0, o)),
            'padding' !== n
              ? (l += w.css(e, 'border' + ne[a] + 'Width', !0, o))
              : (s += w.css(e, 'border' + ne[a] + 'Width', !0, o)))
    return (
      !i &&
        0 <= r &&
        (l +=
          Math.max(
            0,
            Math.ceil(
              e['offset' + t[0].toUpperCase() + t.slice(1)] - r - l - s - 0.5
            )
          ) || 0),
      l
    )
  }
  function Ze (e, t, n) {
    var i = He(e),
      o =
        (!f.boxSizingReliable() || n) &&
        'border-box' === w.css(e, 'boxSizing', !1, i),
      r = o,
      a = ze(e, t, i),
      s = 'offset' + t[0].toUpperCase() + t.slice(1)
    if (qe.test(a)) {
      if (!n) return a
      a = 'auto'
    }
    return (
      ((!f.boxSizingReliable() && o) ||
        (!f.reliableTrDimensions() && E(e, 'tr')) ||
        'auto' === a ||
        (!parseFloat(a) && 'inline' === w.css(e, 'display', !1, i))) &&
        e.getClientRects().length &&
        ((o = 'border-box' === w.css(e, 'boxSizing', !1, i)),
        (r = s in e) && (a = e[s])),
      (a = parseFloat(a) || 0) +
        Je(e, t, n || (o ? 'border' : 'content'), r, i, a) +
        'px'
    )
  }
  function et (e, t, n, i, o) {
    return new et.prototype.init(e, t, n, i, o)
  }
  w.extend({
    cssHooks: {
      opacity: {
        get: function (e, t) {
          if (t) {
            var n = ze(e, 'opacity')
            return '' === n ? '1' : n
          }
        }
      }
    },
    cssNumber: {
      animationIterationCount: !0,
      columnCount: !0,
      fillOpacity: !0,
      flexGrow: !0,
      flexShrink: !0,
      fontWeight: !0,
      gridArea: !0,
      gridColumn: !0,
      gridColumnEnd: !0,
      gridColumnStart: !0,
      gridRow: !0,
      gridRowEnd: !0,
      gridRowStart: !0,
      lineHeight: !0,
      opacity: !0,
      order: !0,
      orphans: !0,
      widows: !0,
      zIndex: !0,
      zoom: !0
    },
    cssProps: {},
    style: function (e, t, n, i) {
      if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
        var o,
          r,
          a,
          s = K(t),
          l = Ye.test(t),
          c = e.style
        if (
          (l || (t = Ke(s)), (a = w.cssHooks[t] || w.cssHooks[s]), void 0 === n)
        )
          return a && 'get' in a && void 0 !== (o = a.get(e, !1, i)) ? o : c[t]
        'string' == (r = typeof n) &&
          (o = te.exec(n)) &&
          o[1] &&
          ((n = se(e, t, o)), (r = 'number')),
          null != n &&
            n == n &&
            ('number' !== r ||
              l ||
              (n += (o && o[3]) || (w.cssNumber[s] ? '' : 'px')),
            f.clearCloneStyle ||
              '' !== n ||
              0 !== t.indexOf('background') ||
              (c[t] = 'inherit'),
            (a && 'set' in a && void 0 === (n = a.set(e, n, i))) ||
              (l ? c.setProperty(t, n) : (c[t] = n)))
      }
    },
    css: function (e, t, n, i) {
      var o,
        r,
        a,
        s = K(t)
      return (
        Ye.test(t) || (t = Ke(s)),
        (a = w.cssHooks[t] || w.cssHooks[s]) &&
          'get' in a &&
          (o = a.get(e, !0, n)),
        void 0 === o && (o = ze(e, t, i)),
        'normal' === o && t in Xe && (o = Xe[t]),
        '' === n || n
          ? ((r = parseFloat(o)), !0 === n || isFinite(r) ? r || 0 : o)
          : o
      )
    }
  }),
    w.each(['height', 'width'], function (e, t) {
      w.cssHooks[t] = {
        get: function (e, n, i) {
          if (n)
            return !Qe.test(w.css(e, 'display')) ||
              (e.getClientRects().length && e.getBoundingClientRect().width)
              ? Ze(e, t, i)
              : Me(e, Ve, function () {
                  return Ze(e, t, i)
                })
        },
        set: function (e, n, i) {
          var o,
            r = He(e),
            a = !f.scrollboxSize() && 'absolute' === r.position,
            s = (a || i) && 'border-box' === w.css(e, 'boxSizing', !1, r),
            l = i ? Je(e, t, i, s, r) : 0
          return (
            s &&
              a &&
              (l -= Math.ceil(
                e['offset' + t[0].toUpperCase() + t.slice(1)] -
                  parseFloat(r[t]) -
                  Je(e, t, 'border', !1, r) -
                  0.5
              )),
            l &&
              (o = te.exec(n)) &&
              'px' !== (o[3] || 'px') &&
              ((e.style[t] = n), (n = w.css(e, t))),
            Ge(0, n, l)
          )
        }
      }
    }),
    (w.cssHooks.marginLeft = Fe(f.reliableMarginLeft, function (e, t) {
      if (t)
        return (
          (parseFloat(ze(e, 'marginLeft')) ||
            e.getBoundingClientRect().left -
              Me(e, { marginLeft: 0 }, function () {
                return e.getBoundingClientRect().left
              })) + 'px'
        )
    })),
    w.each({ margin: '', padding: '', border: 'Width' }, function (e, t) {
      ;(w.cssHooks[e + t] = {
        expand: function (n) {
          for (
            var i = 0, o = {}, r = 'string' == typeof n ? n.split(' ') : [n];
            i < 4;
            i++
          )
            o[e + ne[i] + t] = r[i] || r[i - 2] || r[0]
          return o
        }
      }),
        'margin' !== e && (w.cssHooks[e + t].set = Ge)
    }),
    w.fn.extend({
      css: function (e, t) {
        return F(
          this,
          function (e, t, n) {
            var i,
              o,
              r = {},
              a = 0
            if (Array.isArray(t)) {
              for (i = He(e), o = t.length; a < o; a++)
                r[t[a]] = w.css(e, t[a], !1, i)
              return r
            }
            return void 0 !== n ? w.style(e, t, n) : w.css(e, t)
          },
          e,
          t,
          1 < arguments.length
        )
      }
    }),
    (((w.Tween = et).prototype = {
      constructor: et,
      init: function (e, t, n, i, o, r) {
        ;(this.elem = e),
          (this.prop = n),
          (this.easing = o || w.easing._default),
          (this.options = t),
          (this.start = this.now = this.cur()),
          (this.end = i),
          (this.unit = r || (w.cssNumber[n] ? '' : 'px'))
      },
      cur: function () {
        var e = et.propHooks[this.prop]
        return e && e.get ? e.get(this) : et.propHooks._default.get(this)
      },
      run: function (e) {
        var t,
          n = et.propHooks[this.prop]
        return (
          this.options.duration
            ? (this.pos = t = w.easing[this.easing](
                e,
                this.options.duration * e,
                0,
                1,
                this.options.duration
              ))
            : (this.pos = t = e),
          (this.now = (this.end - this.start) * t + this.start),
          this.options.step &&
            this.options.step.call(this.elem, this.now, this),
          n && n.set ? n.set(this) : et.propHooks._default.set(this),
          this
        )
      }
    }).init.prototype = et.prototype),
    ((et.propHooks = {
      _default: {
        get: function (e) {
          var t
          return 1 !== e.elem.nodeType ||
            (null != e.elem[e.prop] && null == e.elem.style[e.prop])
            ? e.elem[e.prop]
            : (t = w.css(e.elem, e.prop, '')) && 'auto' !== t
            ? t
            : 0
        },
        set: function (e) {
          w.fx.step[e.prop]
            ? w.fx.step[e.prop](e)
            : 1 !== e.elem.nodeType ||
              (!w.cssHooks[e.prop] && null == e.elem.style[Ke(e.prop)])
            ? (e.elem[e.prop] = e.now)
            : w.style(e.elem, e.prop, e.now + e.unit)
        }
      }
    }).scrollTop = et.propHooks.scrollLeft = {
      set: function (e) {
        e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
      }
    }),
    (w.easing = {
      linear: function (e) {
        return e
      },
      swing: function (e) {
        return 0.5 - Math.cos(e * Math.PI) / 2
      },
      _default: 'swing'
    }),
    (w.fx = et.prototype.init),
    (w.fx.step = {})
  var tt,
    nt,
    it,
    ot,
    rt = /^(?:toggle|show|hide)$/,
    at = /queueHooks$/
  function st () {
    nt &&
      (!1 === m.hidden && e.requestAnimationFrame
        ? e.requestAnimationFrame(st)
        : e.setTimeout(st, w.fx.interval),
      w.fx.tick())
  }
  function lt () {
    return (
      e.setTimeout(function () {
        tt = void 0
      }),
      (tt = Date.now())
    )
  }
  function ct (e, t) {
    var n,
      i = 0,
      o = { height: e }
    for (t = t ? 1 : 0; i < 4; i += 2 - t)
      o['margin' + (n = ne[i])] = o['padding' + n] = e
    return t && (o.opacity = o.width = e), o
  }
  function ut (e, t, n) {
    for (
      var i,
        o = (dt.tweeners[t] || []).concat(dt.tweeners['*']),
        r = 0,
        a = o.length;
      r < a;
      r++
    )
      if ((i = o[r].call(n, t, e))) return i
  }
  function dt (e, t, n) {
    var i,
      o,
      r = 0,
      a = dt.prefilters.length,
      s = w.Deferred().always(function () {
        delete l.elem
      }),
      l = function () {
        if (o) return !1
        for (
          var t = tt || lt(),
            n = Math.max(0, c.startTime + c.duration - t),
            i = 1 - (n / c.duration || 0),
            r = 0,
            a = c.tweens.length;
          r < a;
          r++
        )
          c.tweens[r].run(i)
        return (
          s.notifyWith(e, [c, i, n]),
          i < 1 && a
            ? n
            : (a || s.notifyWith(e, [c, 1, 0]), s.resolveWith(e, [c]), !1)
        )
      },
      c = s.promise({
        elem: e,
        props: w.extend({}, t),
        opts: w.extend(!0, { specialEasing: {}, easing: w.easing._default }, n),
        originalProperties: t,
        originalOptions: n,
        startTime: tt || lt(),
        duration: n.duration,
        tweens: [],
        createTween: function (t, n) {
          var i = w.Tween(
            e,
            c.opts,
            t,
            n,
            c.opts.specialEasing[t] || c.opts.easing
          )
          return c.tweens.push(i), i
        },
        stop: function (t) {
          var n = 0,
            i = t ? c.tweens.length : 0
          if (o) return this
          for (o = !0; n < i; n++) c.tweens[n].run(1)
          return (
            t
              ? (s.notifyWith(e, [c, 1, 0]), s.resolveWith(e, [c, t]))
              : s.rejectWith(e, [c, t]),
            this
          )
        }
      }),
      u = c.props
    for (
      (function (e, t) {
        var n, i, o, r, a
        for (n in e)
          if (
            ((o = t[(i = K(n))]),
            (r = e[n]),
            Array.isArray(r) && ((o = r[1]), (r = e[n] = r[0])),
            n !== i && ((e[i] = r), delete e[n]),
            (a = w.cssHooks[i]) && ('expand' in a))
          )
            for (n in ((r = a.expand(r)), delete e[i], r))
              (n in e) || ((e[n] = r[n]), (t[n] = o))
          else t[i] = o
      })(u, c.opts.specialEasing);
      r < a;
      r++
    )
      if ((i = dt.prefilters[r].call(c, e, u, c.opts)))
        return (
          h(i.stop) &&
            (w._queueHooks(c.elem, c.opts.queue).stop = i.stop.bind(i)),
          i
        )
    return (
      w.map(u, ut, c),
      h(c.opts.start) && c.opts.start.call(e, c),
      c
        .progress(c.opts.progress)
        .done(c.opts.done, c.opts.complete)
        .fail(c.opts.fail)
        .always(c.opts.always),
      w.fx.timer(w.extend(l, { elem: e, anim: c, queue: c.opts.queue })),
      c
    )
  }
  ;(w.Animation = w.extend(dt, {
    tweeners: {
      '*': [
        function (e, t) {
          var n = this.createTween(e, t)
          return se(n.elem, e, te.exec(t), n), n
        }
      ]
    },
    tweener: function (e, t) {
      h(e) ? ((t = e), (e = ['*'])) : (e = e.match(P))
      for (var n, i = 0, o = e.length; i < o; i++)
        (n = e[i]),
          (dt.tweeners[n] = dt.tweeners[n] || []),
          dt.tweeners[n].unshift(t)
    },
    prefilters: [
      function (e, t, n) {
        var i,
          o,
          r,
          a,
          s,
          l,
          c,
          u,
          d = 'width' in t || 'height' in t,
          p = this,
          f = {},
          h = e.style,
          g = e.nodeType && ae(e),
          m = V.get(e, 'fxshow')
        for (i in (n.queue ||
          (null == (a = w._queueHooks(e, 'fx')).unqueued &&
            ((a.unqueued = 0),
            (s = a.empty.fire),
            (a.empty.fire = function () {
              a.unqueued || s()
            })),
          a.unqueued++,
          p.always(function () {
            p.always(function () {
              a.unqueued--, w.queue(e, 'fx').length || a.empty.fire()
            })
          })),
        t))
          if (((o = t[i]), rt.test(o))) {
            if (
              (delete t[i],
              (r = r || 'toggle' === o),
              o === (g ? 'hide' : 'show'))
            ) {
              if ('show' !== o || !m || void 0 === m[i]) continue
              g = !0
            }
            f[i] = (m && m[i]) || w.style(e, i)
          }
        if ((l = !w.isEmptyObject(t)) || !w.isEmptyObject(f))
          for (i in (d &&
            1 === e.nodeType &&
            ((n.overflow = [h.overflow, h.overflowX, h.overflowY]),
            null == (c = m && m.display) && (c = V.get(e, 'display')),
            'none' === (u = w.css(e, 'display')) &&
              (c
                ? (u = c)
                : (ce([e], !0),
                  (c = e.style.display || c),
                  (u = w.css(e, 'display')),
                  ce([e]))),
            ('inline' === u || ('inline-block' === u && null != c)) &&
              'none' === w.css(e, 'float') &&
              (l ||
                (p.done(function () {
                  h.display = c
                }),
                null == c && ((u = h.display), (c = 'none' === u ? '' : u))),
              (h.display = 'inline-block'))),
          n.overflow &&
            ((h.overflow = 'hidden'),
            p.always(function () {
              ;(h.overflow = n.overflow[0]),
                (h.overflowX = n.overflow[1]),
                (h.overflowY = n.overflow[2])
            })),
          (l = !1),
          f))
            l ||
              (m
                ? 'hidden' in m && (g = m.hidden)
                : (m = V.access(e, 'fxshow', { display: c })),
              r && (m.hidden = !g),
              g && ce([e], !0),
              p.done(function () {
                for (i in (g || ce([e]), V.remove(e, 'fxshow'), f))
                  w.style(e, i, f[i])
              })),
              (l = ut(g ? m[i] : 0, i, p)),
              i in m ||
                ((m[i] = l.start), g && ((l.end = l.start), (l.start = 0)))
      }
    ],
    prefilter: function (e, t) {
      t ? dt.prefilters.unshift(e) : dt.prefilters.push(e)
    }
  })),
    (w.speed = function (e, t, n) {
      var i =
        e && 'object' == typeof e
          ? w.extend({}, e)
          : {
              complete: n || (!n && t) || (h(e) && e),
              duration: e,
              easing: (n && t) || (t && !h(t) && t)
            }
      return (
        w.fx.off
          ? (i.duration = 0)
          : 'number' != typeof i.duration &&
            (i.duration in w.fx.speeds
              ? (i.duration = w.fx.speeds[i.duration])
              : (i.duration = w.fx.speeds._default)),
        (null != i.queue && !0 !== i.queue) || (i.queue = 'fx'),
        (i.old = i.complete),
        (i.complete = function () {
          h(i.old) && i.old.call(this), i.queue && w.dequeue(this, i.queue)
        }),
        i
      )
    }),
    w.fn.extend({
      fadeTo: function (e, t, n, i) {
        return this.filter(ae)
          .css('opacity', 0)
          .show()
          .end()
          .animate({ opacity: t }, e, n, i)
      },
      animate: function (e, t, n, i) {
        var o = w.isEmptyObject(e),
          r = w.speed(t, n, i),
          a = function () {
            var t = dt(this, w.extend({}, e), r)
            ;(o || V.get(this, 'finish')) && t.stop(!0)
          }
        return (
          (a.finish = a),
          o || !1 === r.queue ? this.each(a) : this.queue(r.queue, a)
        )
      },
      stop: function (e, t, n) {
        var i = function (e) {
          var t = e.stop
          delete e.stop, t(n)
        }
        return (
          'string' != typeof e && ((n = t), (t = e), (e = void 0)),
          t && this.queue(e || 'fx', []),
          this.each(function () {
            var t = !0,
              o = null != e && e + 'queueHooks',
              r = w.timers,
              a = V.get(this)
            if (o) a[o] && a[o].stop && i(a[o])
            else for (o in a) a[o] && a[o].stop && at.test(o) && i(a[o])
            for (o = r.length; o--; )
              r[o].elem !== this ||
                (null != e && r[o].queue !== e) ||
                (r[o].anim.stop(n), (t = !1), r.splice(o, 1))
            ;(!t && n) || w.dequeue(this, e)
          })
        )
      },
      finish: function (e) {
        return (
          !1 !== e && (e = e || 'fx'),
          this.each(function () {
            var t,
              n = V.get(this),
              i = n[e + 'queue'],
              o = n[e + 'queueHooks'],
              r = w.timers,
              a = i ? i.length : 0
            for (
              n.finish = !0,
                w.queue(this, e, []),
                o && o.stop && o.stop.call(this, !0),
                t = r.length;
              t--;

            )
              r[t].elem === this &&
                r[t].queue === e &&
                (r[t].anim.stop(!0), r.splice(t, 1))
            for (t = 0; t < a; t++)
              i[t] && i[t].finish && i[t].finish.call(this)
            delete n.finish
          })
        )
      }
    }),
    w.each(['toggle', 'show', 'hide'], function (e, t) {
      var n = w.fn[t]
      w.fn[t] = function (e, i, o) {
        return null == e || 'boolean' == typeof e
          ? n.apply(this, arguments)
          : this.animate(ct(t, !0), e, i, o)
      }
    }),
    w.each(
      {
        slideDown: ct('show'),
        slideUp: ct('hide'),
        slideToggle: ct('toggle'),
        fadeIn: { opacity: 'show' },
        fadeOut: { opacity: 'hide' },
        fadeToggle: { opacity: 'toggle' }
      },
      function (e, t) {
        w.fn[e] = function (e, n, i) {
          return this.animate(t, e, n, i)
        }
      }
    ),
    (w.timers = []),
    (w.fx.tick = function () {
      var e,
        t = 0,
        n = w.timers
      for (tt = Date.now(); t < n.length; t++)
        (e = n[t])() || n[t] !== e || n.splice(t--, 1)
      n.length || w.fx.stop(), (tt = void 0)
    }),
    (w.fx.timer = function (e) {
      w.timers.push(e), w.fx.start()
    }),
    (w.fx.interval = 13),
    (w.fx.start = function () {
      nt || ((nt = !0), st())
    }),
    (w.fx.stop = function () {
      nt = null
    }),
    (w.fx.speeds = { slow: 600, fast: 200, _default: 400 }),
    (w.fn.delay = function (t, n) {
      return (
        (t = (w.fx && w.fx.speeds[t]) || t),
        (n = n || 'fx'),
        this.queue(n, function (n, i) {
          var o = e.setTimeout(n, t)
          i.stop = function () {
            e.clearTimeout(o)
          }
        })
      )
    }),
    (it = m.createElement('input')),
    (ot = m.createElement('select').appendChild(m.createElement('option'))),
    (it.type = 'checkbox'),
    (f.checkOn = '' !== it.value),
    (f.optSelected = ot.selected),
    ((it = m.createElement('input')).value = 't'),
    (it.type = 'radio'),
    (f.radioValue = 't' === it.value)
  var pt,
    ft = w.expr.attrHandle
  w.fn.extend({
    attr: function (e, t) {
      return F(this, w.attr, e, t, 1 < arguments.length)
    },
    removeAttr: function (e) {
      return this.each(function () {
        w.removeAttr(this, e)
      })
    }
  }),
    w.extend({
      attr: function (e, t, n) {
        var i,
          o,
          r = e.nodeType
        if (3 !== r && 8 !== r && 2 !== r)
          return void 0 === e.getAttribute
            ? w.prop(e, t, n)
            : ((1 === r && w.isXMLDoc(e)) ||
                (o =
                  w.attrHooks[t.toLowerCase()] ||
                  (w.expr.match.bool.test(t) ? pt : void 0)),
              void 0 !== n
                ? null === n
                  ? void w.removeAttr(e, t)
                  : o && 'set' in o && void 0 !== (i = o.set(e, n, t))
                  ? i
                  : (e.setAttribute(t, n + ''), n)
                : o && 'get' in o && null !== (i = o.get(e, t))
                ? i
                : null == (i = w.find.attr(e, t))
                ? void 0
                : i)
      },
      attrHooks: {
        type: {
          set: function (e, t) {
            if (!f.radioValue && 'radio' === t && E(e, 'input')) {
              var n = e.value
              return e.setAttribute('type', t), n && (e.value = n), t
            }
          }
        }
      },
      removeAttr: function (e, t) {
        var n,
          i = 0,
          o = t && t.match(P)
        if (o && 1 === e.nodeType) for (; (n = o[i++]); ) e.removeAttribute(n)
      }
    }),
    (pt = {
      set: function (e, t, n) {
        return !1 === t ? w.removeAttr(e, n) : e.setAttribute(n, n), n
      }
    }),
    w.each(w.expr.match.bool.source.match(/\w+/g), function (e, t) {
      var n = ft[t] || w.find.attr
      ft[t] = function (e, t, i) {
        var o,
          r,
          a = t.toLowerCase()
        return (
          i ||
            ((r = ft[a]),
            (ft[a] = o),
            (o = null != n(e, t, i) ? a : null),
            (ft[a] = r)),
          o
        )
      }
    })
  var ht = /^(?:input|select|textarea|button)$/i,
    gt = /^(?:a|area)$/i
  function mt (e) {
    return (e.match(P) || []).join(' ')
  }
  function _t (e) {
    return (e.getAttribute && e.getAttribute('class')) || ''
  }
  function vt (e) {
    return Array.isArray(e) ? e : ('string' == typeof e && e.match(P)) || []
  }
  w.fn.extend({
    prop: function (e, t) {
      return F(this, w.prop, e, t, 1 < arguments.length)
    },
    removeProp: function (e) {
      return this.each(function () {
        delete this[w.propFix[e] || e]
      })
    }
  }),
    w.extend({
      prop: function (e, t, n) {
        var i,
          o,
          r = e.nodeType
        if (3 !== r && 8 !== r && 2 !== r)
          return (
            (1 === r && w.isXMLDoc(e)) ||
              ((t = w.propFix[t] || t), (o = w.propHooks[t])),
            void 0 !== n
              ? o && 'set' in o && void 0 !== (i = o.set(e, n, t))
                ? i
                : (e[t] = n)
              : o && 'get' in o && null !== (i = o.get(e, t))
              ? i
              : e[t]
          )
      },
      propHooks: {
        tabIndex: {
          get: function (e) {
            var t = w.find.attr(e, 'tabindex')
            return t
              ? parseInt(t, 10)
              : ht.test(e.nodeName) || (gt.test(e.nodeName) && e.href)
              ? 0
              : -1
          }
        }
      },
      propFix: { for: 'htmlFor', class: 'className' }
    }),
    f.optSelected ||
      (w.propHooks.selected = {
        get: function (e) {
          var t = e.parentNode
          return t && t.parentNode && t.parentNode.selectedIndex, null
        },
        set: function (e) {
          var t = e.parentNode
          t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex)
        }
      }),
    w.each(
      [
        'tabIndex',
        'readOnly',
        'maxLength',
        'cellSpacing',
        'cellPadding',
        'rowSpan',
        'colSpan',
        'useMap',
        'frameBorder',
        'contentEditable'
      ],
      function () {
        w.propFix[this.toLowerCase()] = this
      }
    ),
    w.fn.extend({
      addClass: function (e) {
        var t,
          n,
          i,
          o,
          r,
          a,
          s,
          l = 0
        if (h(e))
          return this.each(function (t) {
            w(this).addClass(e.call(this, t, _t(this)))
          })
        if ((t = vt(e)).length)
          for (; (n = this[l++]); )
            if (((o = _t(n)), (i = 1 === n.nodeType && ' ' + mt(o) + ' '))) {
              for (a = 0; (r = t[a++]); )
                i.indexOf(' ' + r + ' ') < 0 && (i += r + ' ')
              o !== (s = mt(i)) && n.setAttribute('class', s)
            }
        return this
      },
      removeClass: function (e) {
        var t,
          n,
          i,
          o,
          r,
          a,
          s,
          l = 0
        if (h(e))
          return this.each(function (t) {
            w(this).removeClass(e.call(this, t, _t(this)))
          })
        if (!arguments.length) return this.attr('class', '')
        if ((t = vt(e)).length)
          for (; (n = this[l++]); )
            if (((o = _t(n)), (i = 1 === n.nodeType && ' ' + mt(o) + ' '))) {
              for (a = 0; (r = t[a++]); )
                for (; -1 < i.indexOf(' ' + r + ' '); )
                  i = i.replace(' ' + r + ' ', ' ')
              o !== (s = mt(i)) && n.setAttribute('class', s)
            }
        return this
      },
      toggleClass: function (e, t) {
        var n = typeof e,
          i = 'string' === n || Array.isArray(e)
        return 'boolean' == typeof t && i
          ? t
            ? this.addClass(e)
            : this.removeClass(e)
          : h(e)
          ? this.each(function (n) {
              w(this).toggleClass(e.call(this, n, _t(this), t), t)
            })
          : this.each(function () {
              var t, o, r, a
              if (i)
                for (o = 0, r = w(this), a = vt(e); (t = a[o++]); )
                  r.hasClass(t) ? r.removeClass(t) : r.addClass(t)
              else
                (void 0 !== e && 'boolean' !== n) ||
                  ((t = _t(this)) && V.set(this, '__className__', t),
                  this.setAttribute &&
                    this.setAttribute(
                      'class',
                      t || !1 === e ? '' : V.get(this, '__className__') || ''
                    ))
            })
      },
      hasClass: function (e) {
        var t,
          n,
          i = 0
        for (t = ' ' + e + ' '; (n = this[i++]); )
          if (1 === n.nodeType && -1 < (' ' + mt(_t(n)) + ' ').indexOf(t))
            return !0
        return !1
      }
    })
  var yt = /\r/g
  w.fn.extend({
    val: function (e) {
      var t,
        n,
        i,
        o = this[0]
      return arguments.length
        ? ((i = h(e)),
          this.each(function (n) {
            var o
            1 === this.nodeType &&
              (null == (o = i ? e.call(this, n, w(this).val()) : e)
                ? (o = '')
                : 'number' == typeof o
                ? (o += '')
                : Array.isArray(o) &&
                  (o = w.map(o, function (e) {
                    return null == e ? '' : e + ''
                  })),
              ((t =
                w.valHooks[this.type] ||
                w.valHooks[this.nodeName.toLowerCase()]) &&
                'set' in t &&
                void 0 !== t.set(this, o, 'value')) ||
                (this.value = o))
          }))
        : o
        ? (t = w.valHooks[o.type] || w.valHooks[o.nodeName.toLowerCase()]) &&
          'get' in t &&
          void 0 !== (n = t.get(o, 'value'))
          ? n
          : 'string' == typeof (n = o.value)
          ? n.replace(yt, '')
          : null == n
          ? ''
          : n
        : void 0
    }
  }),
    w.extend({
      valHooks: {
        option: {
          get: function (e) {
            var t = w.find.attr(e, 'value')
            return null != t ? t : mt(w.text(e))
          }
        },
        select: {
          get: function (e) {
            var t,
              n,
              i,
              o = e.options,
              r = e.selectedIndex,
              a = 'select-one' === e.type,
              s = a ? null : [],
              l = a ? r + 1 : o.length
            for (i = r < 0 ? l : a ? r : 0; i < l; i++)
              if (
                ((n = o[i]).selected || i === r) &&
                !n.disabled &&
                (!n.parentNode.disabled || !E(n.parentNode, 'optgroup'))
              ) {
                if (((t = w(n).val()), a)) return t
                s.push(t)
              }
            return s
          },
          set: function (e, t) {
            for (
              var n, i, o = e.options, r = w.makeArray(t), a = o.length;
              a--;

            )
              ((i = o[a]).selected =
                -1 < w.inArray(w.valHooks.option.get(i), r)) && (n = !0)
            return n || (e.selectedIndex = -1), r
          }
        }
      }
    }),
    w.each(['radio', 'checkbox'], function () {
      ;(w.valHooks[this] = {
        set: function (e, t) {
          if (Array.isArray(t))
            return (e.checked = -1 < w.inArray(w(e).val(), t))
        }
      }),
        f.checkOn ||
          (w.valHooks[this].get = function (e) {
            return null === e.getAttribute('value') ? 'on' : e.value
          })
    }),
    (f.focusin = 'onfocusin' in e)
  var bt = /^(?:focusinfocus|focusoutblur)$/,
    wt = function (e) {
      e.stopPropagation()
    }
  w.extend(w.event, {
    trigger: function (t, n, i, o) {
      var r,
        a,
        s,
        l,
        c,
        d,
        p,
        f,
        _ = [i || m],
        v = u.call(t, 'type') ? t.type : t,
        y = u.call(t, 'namespace') ? t.namespace.split('.') : []
      if (
        ((a = f = s = i = i || m),
        3 !== i.nodeType &&
          8 !== i.nodeType &&
          !bt.test(v + w.event.triggered) &&
          (-1 < v.indexOf('.') && ((v = (y = v.split('.')).shift()), y.sort()),
          (c = v.indexOf(':') < 0 && 'on' + v),
          ((t = t[w.expando]
            ? t
            : new w.Event(v, 'object' == typeof t && t)).isTrigger = o ? 2 : 3),
          (t.namespace = y.join('.')),
          (t.rnamespace = t.namespace
            ? new RegExp('(^|\\.)' + y.join('\\.(?:.*\\.|)') + '(\\.|$)')
            : null),
          (t.result = void 0),
          t.target || (t.target = i),
          (n = null == n ? [t] : w.makeArray(n, [t])),
          (p = w.event.special[v] || {}),
          o || !p.trigger || !1 !== p.trigger.apply(i, n)))
      ) {
        if (!o && !p.noBubble && !g(i)) {
          for (
            l = p.delegateType || v, bt.test(l + v) || (a = a.parentNode);
            a;
            a = a.parentNode
          )
            _.push(a), (s = a)
          s === (i.ownerDocument || m) &&
            _.push(s.defaultView || s.parentWindow || e)
        }
        for (r = 0; (a = _[r++]) && !t.isPropagationStopped(); )
          (f = a),
            (t.type = 1 < r ? l : p.bindType || v),
            (d =
              (V.get(a, 'events') || Object.create(null))[t.type] &&
              V.get(a, 'handle')) && d.apply(a, n),
            (d = c && a[c]) &&
              d.apply &&
              Q(a) &&
              ((t.result = d.apply(a, n)),
              !1 === t.result && t.preventDefault())
        return (
          (t.type = v),
          o ||
            t.isDefaultPrevented() ||
            (p._default && !1 !== p._default.apply(_.pop(), n)) ||
            !Q(i) ||
            (c &&
              h(i[v]) &&
              !g(i) &&
              ((s = i[c]) && (i[c] = null),
              (w.event.triggered = v),
              t.isPropagationStopped() && f.addEventListener(v, wt),
              i[v](),
              t.isPropagationStopped() && f.removeEventListener(v, wt),
              (w.event.triggered = void 0),
              s && (i[c] = s))),
          t.result
        )
      }
    },
    simulate: function (e, t, n) {
      var i = w.extend(new w.Event(), n, { type: e, isSimulated: !0 })
      w.event.trigger(i, null, t)
    }
  }),
    w.fn.extend({
      trigger: function (e, t) {
        return this.each(function () {
          w.event.trigger(e, t, this)
        })
      },
      triggerHandler: function (e, t) {
        var n = this[0]
        if (n) return w.event.trigger(e, t, n, !0)
      }
    }),
    f.focusin ||
      w.each({ focus: 'focusin', blur: 'focusout' }, function (e, t) {
        var n = function (e) {
          w.event.simulate(t, e.target, w.event.fix(e))
        }
        w.event.special[t] = {
          setup: function () {
            var i = this.ownerDocument || this.document || this,
              o = V.access(i, t)
            o || i.addEventListener(e, n, !0), V.access(i, t, (o || 0) + 1)
          },
          teardown: function () {
            var i = this.ownerDocument || this.document || this,
              o = V.access(i, t) - 1
            o
              ? V.access(i, t, o)
              : (i.removeEventListener(e, n, !0), V.remove(i, t))
          }
        }
      })
  var kt = e.location,
    Tt = { guid: Date.now() },
    xt = /\?/
  w.parseXML = function (t) {
    var n
    if (!t || 'string' != typeof t) return null
    try {
      n = new e.DOMParser().parseFromString(t, 'text/xml')
    } catch (t) {
      n = void 0
    }
    return (
      (n && !n.getElementsByTagName('parsererror').length) ||
        w.error('Invalid XML: ' + t),
      n
    )
  }
  var Ct = /\[\]$/,
    St = /\r?\n/g,
    Et = /^(?:submit|button|image|reset|file)$/i,
    At = /^(?:input|select|textarea|keygen)/i
  function jt (e, t, n, i) {
    var o
    if (Array.isArray(t))
      w.each(t, function (t, o) {
        n || Ct.test(e)
          ? i(e, o)
          : jt(
              e + '[' + ('object' == typeof o && null != o ? t : '') + ']',
              o,
              n,
              i
            )
      })
    else if (n || 'object' !== y(t)) i(e, t)
    else for (o in t) jt(e + '[' + o + ']', t[o], n, i)
  }
  ;(w.param = function (e, t) {
    var n,
      i = [],
      o = function (e, t) {
        var n = h(t) ? t() : t
        i[i.length] =
          encodeURIComponent(e) + '=' + encodeURIComponent(null == n ? '' : n)
      }
    if (null == e) return ''
    if (Array.isArray(e) || (e.jquery && !w.isPlainObject(e)))
      w.each(e, function () {
        o(this.name, this.value)
      })
    else for (n in e) jt(n, e[n], t, o)
    return i.join('&')
  }),
    w.fn.extend({
      serialize: function () {
        return w.param(this.serializeArray())
      },
      serializeArray: function () {
        return this.map(function () {
          var e = w.prop(this, 'elements')
          return e ? w.makeArray(e) : this
        })
          .filter(function () {
            var e = this.type
            return (
              this.name &&
              !w(this).is(':disabled') &&
              At.test(this.nodeName) &&
              !Et.test(e) &&
              (this.checked || !pe.test(e))
            )
          })
          .map(function (e, t) {
            var n = w(this).val()
            return null == n
              ? null
              : Array.isArray(n)
              ? w.map(n, function (e) {
                  return { name: t.name, value: e.replace(St, '\r\n') }
                })
              : { name: t.name, value: n.replace(St, '\r\n') }
          })
          .get()
      }
    })
  var Dt = /%20/g,
    $t = /#.*$/,
    Nt = /([?&])_=[^&]*/,
    Ot = /^(.*?):[ \t]*([^\r\n]*)$/gm,
    It = /^(?:GET|HEAD)$/,
    Pt = /^\/\//,
    Lt = {},
    qt = {},
    Ht = '*/'.concat('*'),
    Mt = m.createElement('a')
  function Rt (e) {
    return function (t, n) {
      'string' != typeof t && ((n = t), (t = '*'))
      var i,
        o = 0,
        r = t.toLowerCase().match(P) || []
      if (h(n))
        for (; (i = r[o++]); )
          '+' === i[0]
            ? ((i = i.slice(1) || '*'), (e[i] = e[i] || []).unshift(n))
            : (e[i] = e[i] || []).push(n)
    }
  }
  function zt (e, t, n, i) {
    var o = {},
      r = e === qt
    function a (s) {
      var l
      return (
        (o[s] = !0),
        w.each(e[s] || [], function (e, s) {
          var c = s(t, n, i)
          return 'string' != typeof c || r || o[c]
            ? r
              ? !(l = c)
              : void 0
            : (t.dataTypes.unshift(c), a(c), !1)
        }),
        l
      )
    }
    return a(t.dataTypes[0]) || (!o['*'] && a('*'))
  }
  function Ft (e, t) {
    var n,
      i,
      o = w.ajaxSettings.flatOptions || {}
    for (n in t) void 0 !== t[n] && ((o[n] ? e : i || (i = {}))[n] = t[n])
    return i && w.extend(!0, e, i), e
  }
  ;(Mt.href = kt.href),
    w.extend({
      active: 0,
      lastModified: {},
      etag: {},
      ajaxSettings: {
        url: kt.href,
        type: 'GET',
        isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(
          kt.protocol
        ),
        global: !0,
        processData: !0,
        async: !0,
        contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
        accepts: {
          '*': Ht,
          text: 'text/plain',
          html: 'text/html',
          xml: 'application/xml, text/xml',
          json: 'application/json, text/javascript'
        },
        contents: { xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/ },
        responseFields: {
          xml: 'responseXML',
          text: 'responseText',
          json: 'responseJSON'
        },
        converters: {
          '* text': String,
          'text html': !0,
          'text json': JSON.parse,
          'text xml': w.parseXML
        },
        flatOptions: { url: !0, context: !0 }
      },
      ajaxSetup: function (e, t) {
        return t ? Ft(Ft(e, w.ajaxSettings), t) : Ft(w.ajaxSettings, e)
      },
      ajaxPrefilter: Rt(Lt),
      ajaxTransport: Rt(qt),
      ajax: function (t, n) {
        'object' == typeof t && ((n = t), (t = void 0)), (n = n || {})
        var i,
          o,
          r,
          a,
          s,
          l,
          c,
          u,
          d,
          p,
          f = w.ajaxSetup({}, n),
          h = f.context || f,
          g = f.context && (h.nodeType || h.jquery) ? w(h) : w.event,
          _ = w.Deferred(),
          v = w.Callbacks('once memory'),
          y = f.statusCode || {},
          b = {},
          k = {},
          T = 'canceled',
          x = {
            readyState: 0,
            getResponseHeader: function (e) {
              var t
              if (c) {
                if (!a)
                  for (a = {}; (t = Ot.exec(r)); )
                    a[t[1].toLowerCase() + ' '] = (
                      a[t[1].toLowerCase() + ' '] || []
                    ).concat(t[2])
                t = a[e.toLowerCase() + ' ']
              }
              return null == t ? null : t.join(', ')
            },
            getAllResponseHeaders: function () {
              return c ? r : null
            },
            setRequestHeader: function (e, t) {
              return (
                null == c &&
                  ((e = k[e.toLowerCase()] = k[e.toLowerCase()] || e),
                  (b[e] = t)),
                this
              )
            },
            overrideMimeType: function (e) {
              return null == c && (f.mimeType = e), this
            },
            statusCode: function (e) {
              var t
              if (e)
                if (c) x.always(e[x.status])
                else for (t in e) y[t] = [y[t], e[t]]
              return this
            },
            abort: function (e) {
              var t = e || T
              return i && i.abort(t), C(0, t), this
            }
          }
        if (
          (_.promise(x),
          (f.url = ((t || f.url || kt.href) + '').replace(
            Pt,
            kt.protocol + '//'
          )),
          (f.type = n.method || n.type || f.method || f.type),
          (f.dataTypes = (f.dataType || '*').toLowerCase().match(P) || ['']),
          null == f.crossDomain)
        ) {
          l = m.createElement('a')
          try {
            ;(l.href = f.url),
              (l.href = l.href),
              (f.crossDomain =
                Mt.protocol + '//' + Mt.host != l.protocol + '//' + l.host)
          } catch (t) {
            f.crossDomain = !0
          }
        }
        if (
          (f.data &&
            f.processData &&
            'string' != typeof f.data &&
            (f.data = w.param(f.data, f.traditional)),
          zt(Lt, f, n, x),
          c)
        )
          return x
        for (d in ((u = w.event && f.global) &&
          0 == w.active++ &&
          w.event.trigger('ajaxStart'),
        (f.type = f.type.toUpperCase()),
        (f.hasContent = !It.test(f.type)),
        (o = f.url.replace($t, '')),
        f.hasContent
          ? f.data &&
            f.processData &&
            0 ===
              (f.contentType || '').indexOf(
                'application/x-www-form-urlencoded'
              ) &&
            (f.data = f.data.replace(Dt, '+'))
          : ((p = f.url.slice(o.length)),
            f.data &&
              (f.processData || 'string' == typeof f.data) &&
              ((o += (xt.test(o) ? '&' : '?') + f.data), delete f.data),
            !1 === f.cache &&
              ((o = o.replace(Nt, '$1')),
              (p = (xt.test(o) ? '&' : '?') + '_=' + Tt.guid++ + p)),
            (f.url = o + p)),
        f.ifModified &&
          (w.lastModified[o] &&
            x.setRequestHeader('If-Modified-Since', w.lastModified[o]),
          w.etag[o] && x.setRequestHeader('If-None-Match', w.etag[o])),
        ((f.data && f.hasContent && !1 !== f.contentType) || n.contentType) &&
          x.setRequestHeader('Content-Type', f.contentType),
        x.setRequestHeader(
          'Accept',
          f.dataTypes[0] && f.accepts[f.dataTypes[0]]
            ? f.accepts[f.dataTypes[0]] +
                ('*' !== f.dataTypes[0] ? ', ' + Ht + '; q=0.01' : '')
            : f.accepts['*']
        ),
        f.headers))
          x.setRequestHeader(d, f.headers[d])
        if (f.beforeSend && (!1 === f.beforeSend.call(h, x, f) || c))
          return x.abort()
        if (
          ((T = 'abort'),
          v.add(f.complete),
          x.done(f.success),
          x.fail(f.error),
          (i = zt(qt, f, n, x)))
        ) {
          if (((x.readyState = 1), u && g.trigger('ajaxSend', [x, f]), c))
            return x
          f.async &&
            0 < f.timeout &&
            (s = e.setTimeout(function () {
              x.abort('timeout')
            }, f.timeout))
          try {
            ;(c = !1), i.send(b, C)
          } catch (t) {
            if (c) throw t
            C(-1, t)
          }
        } else C(-1, 'No Transport')
        function C (t, n, a, l) {
          var d,
            p,
            m,
            b,
            k,
            T = n
          c ||
            ((c = !0),
            s && e.clearTimeout(s),
            (i = void 0),
            (r = l || ''),
            (x.readyState = 0 < t ? 4 : 0),
            (d = (200 <= t && t < 300) || 304 === t),
            a &&
              (b = (function (e, t, n) {
                for (
                  var i, o, r, a, s = e.contents, l = e.dataTypes;
                  '*' === l[0];

                )
                  l.shift(),
                    void 0 === i &&
                      (i = e.mimeType || t.getResponseHeader('Content-Type'))
                if (i)
                  for (o in s)
                    if (s[o] && s[o].test(i)) {
                      l.unshift(o)
                      break
                    }
                if (l[0] in n) r = l[0]
                else {
                  for (o in n) {
                    if (!l[0] || e.converters[o + ' ' + l[0]]) {
                      r = o
                      break
                    }
                    a || (a = o)
                  }
                  r = r || a
                }
                if (r) return r !== l[0] && l.unshift(r), n[r]
              })(f, x, a)),
            !d &&
              -1 < w.inArray('script', f.dataTypes) &&
              (f.converters['text script'] = function () {}),
            (b = (function (e, t, n, i) {
              var o,
                r,
                a,
                s,
                l,
                c = {},
                u = e.dataTypes.slice()
              if (u[1])
                for (a in e.converters) c[a.toLowerCase()] = e.converters[a]
              for (r = u.shift(); r; )
                if (
                  (e.responseFields[r] && (n[e.responseFields[r]] = t),
                  !l && i && e.dataFilter && (t = e.dataFilter(t, e.dataType)),
                  (l = r),
                  (r = u.shift()))
                )
                  if ('*' === r) r = l
                  else if ('*' !== l && l !== r) {
                    if (!(a = c[l + ' ' + r] || c['* ' + r]))
                      for (o in c)
                        if (
                          (s = o.split(' '))[1] === r &&
                          (a = c[l + ' ' + s[0]] || c['* ' + s[0]])
                        ) {
                          !0 === a
                            ? (a = c[o])
                            : !0 !== c[o] && ((r = s[0]), u.unshift(s[1]))
                          break
                        }
                    if (!0 !== a)
                      if (a && e.throws) t = a(t)
                      else
                        try {
                          t = a(t)
                        } catch (e) {
                          return {
                            state: 'parsererror',
                            error: a
                              ? e
                              : 'No conversion from ' + l + ' to ' + r
                          }
                        }
                  }
              return { state: 'success', data: t }
            })(f, b, x, d)),
            d
              ? (f.ifModified &&
                  ((k = x.getResponseHeader('Last-Modified')) &&
                    (w.lastModified[o] = k),
                  (k = x.getResponseHeader('etag')) && (w.etag[o] = k)),
                204 === t || 'HEAD' === f.type
                  ? (T = 'nocontent')
                  : 304 === t
                  ? (T = 'notmodified')
                  : ((T = b.state), (p = b.data), (d = !(m = b.error))))
              : ((m = T), (!t && T) || ((T = 'error'), t < 0 && (t = 0))),
            (x.status = t),
            (x.statusText = (n || T) + ''),
            d ? _.resolveWith(h, [p, T, x]) : _.rejectWith(h, [x, T, m]),
            x.statusCode(y),
            (y = void 0),
            u && g.trigger(d ? 'ajaxSuccess' : 'ajaxError', [x, f, d ? p : m]),
            v.fireWith(h, [x, T]),
            u &&
              (g.trigger('ajaxComplete', [x, f]),
              --w.active || w.event.trigger('ajaxStop')))
        }
        return x
      },
      getJSON: function (e, t, n) {
        return w.get(e, t, n, 'json')
      },
      getScript: function (e, t) {
        return w.get(e, void 0, t, 'script')
      }
    }),
    w.each(['get', 'post'], function (e, t) {
      w[t] = function (e, n, i, o) {
        return (
          h(n) && ((o = o || i), (i = n), (n = void 0)),
          w.ajax(
            w.extend(
              { url: e, type: t, dataType: o, data: n, success: i },
              w.isPlainObject(e) && e
            )
          )
        )
      }
    }),
    w.ajaxPrefilter(function (e) {
      var t
      for (t in e.headers)
        'content-type' === t.toLowerCase() &&
          (e.contentType = e.headers[t] || '')
    }),
    (w._evalUrl = function (e, t, n) {
      return w.ajax({
        url: e,
        type: 'GET',
        dataType: 'script',
        cache: !0,
        async: !1,
        global: !1,
        converters: { 'text script': function () {} },
        dataFilter: function (e) {
          w.globalEval(e, t, n)
        }
      })
    }),
    w.fn.extend({
      wrapAll: function (e) {
        var t
        return (
          this[0] &&
            (h(e) && (e = e.call(this[0])),
            (t = w(e, this[0].ownerDocument)
              .eq(0)
              .clone(!0)),
            this[0].parentNode && t.insertBefore(this[0]),
            t
              .map(function () {
                for (var e = this; e.firstElementChild; )
                  e = e.firstElementChild
                return e
              })
              .append(this)),
          this
        )
      },
      wrapInner: function (e) {
        return h(e)
          ? this.each(function (t) {
              w(this).wrapInner(e.call(this, t))
            })
          : this.each(function () {
              var t = w(this),
                n = t.contents()
              n.length ? n.wrapAll(e) : t.append(e)
            })
      },
      wrap: function (e) {
        var t = h(e)
        return this.each(function (n) {
          w(this).wrapAll(t ? e.call(this, n) : e)
        })
      },
      unwrap: function (e) {
        return (
          this.parent(e)
            .not('body')
            .each(function () {
              w(this).replaceWith(this.childNodes)
            }),
          this
        )
      }
    }),
    (w.expr.pseudos.hidden = function (e) {
      return !w.expr.pseudos.visible(e)
    }),
    (w.expr.pseudos.visible = function (e) {
      return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length)
    }),
    (w.ajaxSettings.xhr = function () {
      try {
        return new e.XMLHttpRequest()
      } catch (e) {}
    })
  var Wt = { 0: 200, 1223: 204 },
    Bt = w.ajaxSettings.xhr()
  ;(f.cors = !!Bt && 'withCredentials' in Bt),
    (f.ajax = Bt = !!Bt),
    w.ajaxTransport(function (t) {
      var n, i
      if (f.cors || (Bt && !t.crossDomain))
        return {
          send: function (o, r) {
            var a,
              s = t.xhr()
            if (
              (s.open(t.type, t.url, t.async, t.username, t.password),
              t.xhrFields)
            )
              for (a in t.xhrFields) s[a] = t.xhrFields[a]
            for (a in (t.mimeType &&
              s.overrideMimeType &&
              s.overrideMimeType(t.mimeType),
            t.crossDomain ||
              o['X-Requested-With'] ||
              (o['X-Requested-With'] = 'XMLHttpRequest'),
            o))
              s.setRequestHeader(a, o[a])
            ;(n = function (e) {
              return function () {
                n &&
                  ((n = i = s.onload = s.onerror = s.onabort = s.ontimeout = s.onreadystatechange = null),
                  'abort' === e
                    ? s.abort()
                    : 'error' === e
                    ? 'number' != typeof s.status
                      ? r(0, 'error')
                      : r(s.status, s.statusText)
                    : r(
                        Wt[s.status] || s.status,
                        s.statusText,
                        'text' !== (s.responseType || 'text') ||
                          'string' != typeof s.responseText
                          ? { binary: s.response }
                          : { text: s.responseText },
                        s.getAllResponseHeaders()
                      ))
              }
            }),
              (s.onload = n()),
              (i = s.onerror = s.ontimeout = n('error')),
              void 0 !== s.onabort
                ? (s.onabort = i)
                : (s.onreadystatechange = function () {
                    4 === s.readyState &&
                      e.setTimeout(function () {
                        n && i()
                      })
                  }),
              (n = n('abort'))
            try {
              s.send((t.hasContent && t.data) || null)
            } catch (o) {
              if (n) throw o
            }
          },
          abort: function () {
            n && n()
          }
        }
    }),
    w.ajaxPrefilter(function (e) {
      e.crossDomain && (e.contents.script = !1)
    }),
    w.ajaxSetup({
      accepts: {
        script:
          'text/javascript, application/javascript, application/ecmascript, application/x-ecmascript'
      },
      contents: { script: /\b(?:java|ecma)script\b/ },
      converters: {
        'text script': function (e) {
          return w.globalEval(e), e
        }
      }
    }),
    w.ajaxPrefilter('script', function (e) {
      void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = 'GET')
    }),
    w.ajaxTransport('script', function (e) {
      var t, n
      if (e.crossDomain || e.scriptAttrs)
        return {
          send: function (i, o) {
            ;(t = w('<script>')
              .attr(e.scriptAttrs || {})
              .prop({ charset: e.scriptCharset, src: e.url })
              .on(
                'load error',
                (n = function (e) {
                  t.remove(),
                    (n = null),
                    e && o('error' === e.type ? 404 : 200, e.type)
                })
              )),
              m.head.appendChild(t[0])
          },
          abort: function () {
            n && n()
          }
        }
    })
  var Ut,
    Kt = [],
    Qt = /(=)\?(?=&|$)|\?\?/
  w.ajaxSetup({
    jsonp: 'callback',
    jsonpCallback: function () {
      var e = Kt.pop() || w.expando + '_' + Tt.guid++
      return (this[e] = !0), e
    }
  }),
    w.ajaxPrefilter('json jsonp', function (t, n, i) {
      var o,
        r,
        a,
        s =
          !1 !== t.jsonp &&
          (Qt.test(t.url)
            ? 'url'
            : 'string' == typeof t.data &&
              0 ===
                (t.contentType || '').indexOf(
                  'application/x-www-form-urlencoded'
                ) &&
              Qt.test(t.data) &&
              'data')
      if (s || 'jsonp' === t.dataTypes[0])
        return (
          (o = t.jsonpCallback = h(t.jsonpCallback)
            ? t.jsonpCallback()
            : t.jsonpCallback),
          s
            ? (t[s] = t[s].replace(Qt, '$1' + o))
            : !1 !== t.jsonp &&
              (t.url += (xt.test(t.url) ? '&' : '?') + t.jsonp + '=' + o),
          (t.converters['script json'] = function () {
            return a || w.error(o + ' was not called'), a[0]
          }),
          (t.dataTypes[0] = 'json'),
          (r = e[o]),
          (e[o] = function () {
            a = arguments
          }),
          i.always(function () {
            void 0 === r ? w(e).removeProp(o) : (e[o] = r),
              t[o] && ((t.jsonpCallback = n.jsonpCallback), Kt.push(o)),
              a && h(r) && r(a[0]),
              (a = r = void 0)
          }),
          'script'
        )
    }),
    (f.createHTMLDocument =
      (((Ut = m.implementation.createHTMLDocument('').body).innerHTML =
        '<form></form><form></form>'),
      2 === Ut.childNodes.length)),
    (w.parseHTML = function (e, t, n) {
      return 'string' != typeof e
        ? []
        : ('boolean' == typeof t && ((n = t), (t = !1)),
          t ||
            (f.createHTMLDocument
              ? (((i = (t = m.implementation.createHTMLDocument(
                  ''
                )).createElement('base')).href = m.location.href),
                t.head.appendChild(i))
              : (t = m)),
          (r = !n && []),
          (o = A.exec(e))
            ? [t.createElement(o[1])]
            : ((o = ye([e], t, r)),
              r && r.length && w(r).remove(),
              w.merge([], o.childNodes)))
      var i, o, r
    }),
    (w.fn.load = function (e, t, n) {
      var i,
        o,
        r,
        a = this,
        s = e.indexOf(' ')
      return (
        -1 < s && ((i = mt(e.slice(s))), (e = e.slice(0, s))),
        h(t)
          ? ((n = t), (t = void 0))
          : t && 'object' == typeof t && (o = 'POST'),
        0 < a.length &&
          w
            .ajax({ url: e, type: o || 'GET', dataType: 'html', data: t })
            .done(function (e) {
              ;(r = arguments),
                a.html(
                  i
                    ? w('<div>')
                        .append(w.parseHTML(e))
                        .find(i)
                    : e
                )
            })
            .always(
              n &&
                function (e, t) {
                  a.each(function () {
                    n.apply(this, r || [e.responseText, t, e])
                  })
                }
            ),
        this
      )
    }),
    (w.expr.pseudos.animated = function (e) {
      return w.grep(w.timers, function (t) {
        return e === t.elem
      }).length
    }),
    (w.offset = {
      setOffset: function (e, t, n) {
        var i,
          o,
          r,
          a,
          s,
          l,
          c = w.css(e, 'position'),
          u = w(e),
          d = {}
        'static' === c && (e.style.position = 'relative'),
          (s = u.offset()),
          (r = w.css(e, 'top')),
          (l = w.css(e, 'left')),
          ('absolute' === c || 'fixed' === c) && -1 < (r + l).indexOf('auto')
            ? ((a = (i = u.position()).top), (o = i.left))
            : ((a = parseFloat(r) || 0), (o = parseFloat(l) || 0)),
          h(t) && (t = t.call(e, n, w.extend({}, s))),
          null != t.top && (d.top = t.top - s.top + a),
          null != t.left && (d.left = t.left - s.left + o),
          'using' in t
            ? t.using.call(e, d)
            : ('number' == typeof d.top && (d.top += 'px'),
              'number' == typeof d.left && (d.left += 'px'),
              u.css(d))
      }
    }),
    w.fn.extend({
      offset: function (e) {
        if (arguments.length)
          return void 0 === e
            ? this
            : this.each(function (t) {
                w.offset.setOffset(this, e, t)
              })
        var t,
          n,
          i = this[0]
        return i
          ? i.getClientRects().length
            ? ((t = i.getBoundingClientRect()),
              (n = i.ownerDocument.defaultView),
              { top: t.top + n.pageYOffset, left: t.left + n.pageXOffset })
            : { top: 0, left: 0 }
          : void 0
      },
      position: function () {
        if (this[0]) {
          var e,
            t,
            n,
            i = this[0],
            o = { top: 0, left: 0 }
          if ('fixed' === w.css(i, 'position')) t = i.getBoundingClientRect()
          else {
            for (
              t = this.offset(),
                n = i.ownerDocument,
                e = i.offsetParent || n.documentElement;
              e &&
              (e === n.body || e === n.documentElement) &&
              'static' === w.css(e, 'position');

            )
              e = e.parentNode
            e &&
              e !== i &&
              1 === e.nodeType &&
              (((o = w(e).offset()).top += w.css(e, 'borderTopWidth', !0)),
              (o.left += w.css(e, 'borderLeftWidth', !0)))
          }
          return {
            top: t.top - o.top - w.css(i, 'marginTop', !0),
            left: t.left - o.left - w.css(i, 'marginLeft', !0)
          }
        }
      },
      offsetParent: function () {
        return this.map(function () {
          for (
            var e = this.offsetParent;
            e && 'static' === w.css(e, 'position');

          )
            e = e.offsetParent
          return e || ie
        })
      }
    }),
    w.each({ scrollLeft: 'pageXOffset', scrollTop: 'pageYOffset' }, function (
      e,
      t
    ) {
      var n = 'pageYOffset' === t
      w.fn[e] = function (i) {
        return F(
          this,
          function (e, i, o) {
            var r
            if (
              (g(e) ? (r = e) : 9 === e.nodeType && (r = e.defaultView),
              void 0 === o)
            )
              return r ? r[t] : e[i]
            r
              ? r.scrollTo(n ? r.pageXOffset : o, n ? o : r.pageYOffset)
              : (e[i] = o)
          },
          e,
          i,
          arguments.length
        )
      }
    }),
    w.each(['top', 'left'], function (e, t) {
      w.cssHooks[t] = Fe(f.pixelPosition, function (e, n) {
        if (n) return (n = ze(e, t)), qe.test(n) ? w(e).position()[t] + 'px' : n
      })
    }),
    w.each({ Height: 'height', Width: 'width' }, function (e, t) {
      w.each({ padding: 'inner' + e, content: t, '': 'outer' + e }, function (
        n,
        i
      ) {
        w.fn[i] = function (o, r) {
          var a = arguments.length && (n || 'boolean' != typeof o),
            s = n || (!0 === o || !0 === r ? 'margin' : 'border')
          return F(
            this,
            function (t, n, o) {
              var r
              return g(t)
                ? 0 === i.indexOf('outer')
                  ? t['inner' + e]
                  : t.document.documentElement['client' + e]
                : 9 === t.nodeType
                ? ((r = t.documentElement),
                  Math.max(
                    t.body['scroll' + e],
                    r['scroll' + e],
                    t.body['offset' + e],
                    r['offset' + e],
                    r['client' + e]
                  ))
                : void 0 === o
                ? w.css(t, n, s)
                : w.style(t, n, o, s)
            },
            t,
            a ? o : void 0,
            a
          )
        }
      })
    }),
    w.each(
      [
        'ajaxStart',
        'ajaxStop',
        'ajaxComplete',
        'ajaxError',
        'ajaxSuccess',
        'ajaxSend'
      ],
      function (e, t) {
        w.fn[t] = function (e) {
          return this.on(t, e)
        }
      }
    ),
    w.fn.extend({
      bind: function (e, t, n) {
        return this.on(e, null, t, n)
      },
      unbind: function (e, t) {
        return this.off(e, null, t)
      },
      delegate: function (e, t, n, i) {
        return this.on(t, e, n, i)
      },
      undelegate: function (e, t, n) {
        return 1 === arguments.length
          ? this.off(e, '**')
          : this.off(t, e || '**', n)
      },
      hover: function (e, t) {
        return this.mouseenter(e).mouseleave(t || e)
      }
    }),
    w.each(
      'blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu'.split(
        ' '
      ),
      function (e, t) {
        w.fn[t] = function (e, n) {
          return 0 < arguments.length ? this.on(t, null, e, n) : this.trigger(t)
        }
      }
    )
  var Yt = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g
  ;(w.proxy = function (e, t) {
    var n, i, r
    if (('string' == typeof t && ((n = e[t]), (t = e), (e = n)), h(e)))
      return (
        (i = o.call(arguments, 2)),
        ((r = function () {
          return e.apply(t || this, i.concat(o.call(arguments)))
        }).guid = e.guid = e.guid || w.guid++),
        r
      )
  }),
    (w.holdReady = function (e) {
      e ? w.readyWait++ : w.ready(!0)
    }),
    (w.isArray = Array.isArray),
    (w.parseJSON = JSON.parse),
    (w.nodeName = E),
    (w.isFunction = h),
    (w.isWindow = g),
    (w.camelCase = K),
    (w.type = y),
    (w.now = Date.now),
    (w.isNumeric = function (e) {
      var t = w.type(e)
      return ('number' === t || 'string' === t) && !isNaN(e - parseFloat(e))
    }),
    (w.trim = function (e) {
      return null == e ? '' : (e + '').replace(Yt, '')
    }),
    'function' == typeof define &&
      define.amd &&
      define('jquery', [], function () {
        return w
      })
  var Vt = e.jQuery,
    Xt = e.$
  return (
    (w.noConflict = function (t) {
      return e.$ === w && (e.$ = Xt), t && e.jQuery === w && (e.jQuery = Vt), w
    }),
    void 0 === t && (e.jQuery = e.$ = w),
    w
  )
}),
  (function (e) {
    'use strict'
    'function' == typeof define && define.amd
      ? define(['jquery'], e)
      : 'undefined' != typeof exports
      ? (module.exports = e(require('jquery')))
      : e(jQuery)
  })(function (e) {
    'use strict'
    var t = window.Slick || {}
    ;((t = (function () {
      var t = 0
      return function (n, i) {
        var o,
          r = this
        ;(r.defaults = {
          accessibility: !0,
          adaptiveHeight: !1,
          appendArrows: e(n),
          appendDots: e(n),
          arrows: !0,
          asNavFor: null,
          prevArrow:
            '<button class="slick-prev" aria-label="Previous" type="button">Previous</button>',
          nextArrow:
            '<button class="slick-next" aria-label="Next" type="button">Next</button>',
          autoplay: !1,
          autoplaySpeed: 3e3,
          centerMode: !1,
          centerPadding: '50px',
          cssEase: 'ease',
          customPaging: function (t, n) {
            return e('<button type="button" />').text(n + 1)
          },
          dots: !1,
          dotsClass: 'slick-dots',
          draggable: !0,
          easing: 'linear',
          edgeFriction: 0.35,
          fade: !1,
          focusOnSelect: !1,
          focusOnChange: !1,
          infinite: !0,
          initialSlide: 0,
          lazyLoad: 'ondemand',
          mobileFirst: !1,
          pauseOnHover: !0,
          pauseOnFocus: !0,
          pauseOnDotsHover: !1,
          respondTo: 'window',
          responsive: null,
          rows: 1,
          rtl: !1,
          slide: '',
          slidesPerRow: 1,
          slidesToShow: 1,
          slidesToScroll: 1,
          speed: 500,
          swipe: !0,
          swipeToSlide: !1,
          touchMove: !0,
          touchThreshold: 5,
          useCSS: !0,
          useTransform: !0,
          variableWidth: !1,
          vertical: !1,
          verticalSwiping: !1,
          waitForAnimate: !0,
          zIndex: 1e3
        }),
          (r.initials = {
            animating: !1,
            dragging: !1,
            autoPlayTimer: null,
            currentDirection: 0,
            currentLeft: null,
            currentSlide: 0,
            direction: 1,
            $dots: null,
            listWidth: null,
            listHeight: null,
            loadIndex: 0,
            $nextArrow: null,
            $prevArrow: null,
            scrolling: !1,
            slideCount: null,
            slideWidth: null,
            $slideTrack: null,
            $slides: null,
            sliding: !1,
            slideOffset: 0,
            swipeLeft: null,
            swiping: !1,
            $list: null,
            touchObject: {},
            transformsEnabled: !1,
            unslicked: !1
          }),
          e.extend(r, r.initials),
          (r.activeBreakpoint = null),
          (r.animType = null),
          (r.animProp = null),
          (r.breakpoints = []),
          (r.breakpointSettings = []),
          (r.cssTransitions = !1),
          (r.focussed = !1),
          (r.interrupted = !1),
          (r.hidden = 'hidden'),
          (r.paused = !0),
          (r.positionProp = null),
          (r.respondTo = null),
          (r.rowCount = 1),
          (r.shouldClick = !0),
          (r.$slider = e(n)),
          (r.$slidesCache = null),
          (r.transformType = null),
          (r.transitionType = null),
          (r.visibilityChange = 'visibilitychange'),
          (r.windowWidth = 0),
          (r.windowTimer = null),
          (o = e(n).data('slick') || {}),
          (r.options = e.extend({}, r.defaults, i, o)),
          (r.currentSlide = r.options.initialSlide),
          (r.originalSettings = r.options),
          void 0 !== document.mozHidden
            ? ((r.hidden = 'mozHidden'),
              (r.visibilityChange = 'mozvisibilitychange'))
            : void 0 !== document.webkitHidden &&
              ((r.hidden = 'webkitHidden'),
              (r.visibilityChange = 'webkitvisibilitychange')),
          (r.autoPlay = e.proxy(r.autoPlay, r)),
          (r.autoPlayClear = e.proxy(r.autoPlayClear, r)),
          (r.autoPlayIterator = e.proxy(r.autoPlayIterator, r)),
          (r.changeSlide = e.proxy(r.changeSlide, r)),
          (r.clickHandler = e.proxy(r.clickHandler, r)),
          (r.selectHandler = e.proxy(r.selectHandler, r)),
          (r.setPosition = e.proxy(r.setPosition, r)),
          (r.swipeHandler = e.proxy(r.swipeHandler, r)),
          (r.dragHandler = e.proxy(r.dragHandler, r)),
          (r.keyHandler = e.proxy(r.keyHandler, r)),
          (r.instanceUid = t++),
          (r.htmlExpr = /^(?:\s*(<[\w\W]+>)[^>]*)$/),
          r.registerBreakpoints(),
          r.init(!0)
      }
    })()).prototype.activateADA = function () {
      this.$slideTrack
        .find('.slick-active')
        .attr({ 'aria-hidden': 'false' })
        .find('a, input, button, select')
        .attr({ tabindex: '0' })
    }),
      (t.prototype.addSlide = t.prototype.slickAdd = function (t, n, i) {
        var o = this
        if ('boolean' == typeof n) (i = n), (n = null)
        else if (n < 0 || n >= o.slideCount) return !1
        o.unload(),
          'number' == typeof n
            ? 0 === n && 0 === o.$slides.length
              ? e(t).appendTo(o.$slideTrack)
              : i
              ? e(t).insertBefore(o.$slides.eq(n))
              : e(t).insertAfter(o.$slides.eq(n))
            : !0 === i
            ? e(t).prependTo(o.$slideTrack)
            : e(t).appendTo(o.$slideTrack),
          (o.$slides = o.$slideTrack.children(this.options.slide)),
          o.$slideTrack.children(this.options.slide).detach(),
          o.$slideTrack.append(o.$slides),
          o.$slides.each(function (t, n) {
            e(n).attr('data-slick-index', t)
          }),
          (o.$slidesCache = o.$slides),
          o.reinit()
      }),
      (t.prototype.animateHeight = function () {
        var e = this
        if (
          1 === e.options.slidesToShow &&
          !0 === e.options.adaptiveHeight &&
          !1 === e.options.vertical
        ) {
          var t = e.$slides.eq(e.currentSlide).outerHeight(!0)
          e.$list.animate({ height: t }, e.options.speed)
        }
      }),
      (t.prototype.animateSlide = function (t, n) {
        var i = {},
          o = this
        o.animateHeight(),
          !0 === o.options.rtl && !1 === o.options.vertical && (t = -t),
          !1 === o.transformsEnabled
            ? !1 === o.options.vertical
              ? o.$slideTrack.animate(
                  { left: t },
                  o.options.speed,
                  o.options.easing,
                  n
                )
              : o.$slideTrack.animate(
                  { top: t },
                  o.options.speed,
                  o.options.easing,
                  n
                )
            : !1 === o.cssTransitions
            ? (!0 === o.options.rtl && (o.currentLeft = -o.currentLeft),
              e({ animStart: o.currentLeft }).animate(
                { animStart: t },
                {
                  duration: o.options.speed,
                  easing: o.options.easing,
                  step: function (e) {
                    ;(e = Math.ceil(e)),
                      !1 === o.options.vertical
                        ? ((i[o.animType] = 'translate(' + e + 'px, 0px)'),
                          o.$slideTrack.css(i))
                        : ((i[o.animType] = 'translate(0px,' + e + 'px)'),
                          o.$slideTrack.css(i))
                  },
                  complete: function () {
                    n && n.call()
                  }
                }
              ))
            : (o.applyTransition(),
              (t = Math.ceil(t)),
              !1 === o.options.vertical
                ? (i[o.animType] = 'translate3d(' + t + 'px, 0px, 0px)')
                : (i[o.animType] = 'translate3d(0px,' + t + 'px, 0px)'),
              o.$slideTrack.css(i),
              n &&
                setTimeout(function () {
                  o.disableTransition(), n.call()
                }, o.options.speed))
      }),
      (t.prototype.getNavTarget = function () {
        var t = this.options.asNavFor
        return t && null !== t && (t = e(t).not(this.$slider)), t
      }),
      (t.prototype.asNavFor = function (t) {
        var n = this.getNavTarget()
        null !== n &&
          'object' == typeof n &&
          n.each(function () {
            var n = e(this).slick('getSlick')
            n.unslicked || n.slideHandler(t, !0)
          })
      }),
      (t.prototype.applyTransition = function (e) {
        var t = this,
          n = {}
        !1 === t.options.fade
          ? (n[t.transitionType] =
              t.transformType +
              ' ' +
              t.options.speed +
              'ms ' +
              t.options.cssEase)
          : (n[t.transitionType] =
              'opacity ' + t.options.speed + 'ms ' + t.options.cssEase),
          !1 === t.options.fade ? t.$slideTrack.css(n) : t.$slides.eq(e).css(n)
      }),
      (t.prototype.autoPlay = function () {
        var e = this
        e.autoPlayClear(),
          e.slideCount > e.options.slidesToShow &&
            (e.autoPlayTimer = setInterval(
              e.autoPlayIterator,
              e.options.autoplaySpeed
            ))
      }),
      (t.prototype.autoPlayClear = function () {
        this.autoPlayTimer && clearInterval(this.autoPlayTimer)
      }),
      (t.prototype.autoPlayIterator = function () {
        var e = this,
          t = e.currentSlide + e.options.slidesToScroll
        e.paused ||
          e.interrupted ||
          e.focussed ||
          (!1 === e.options.infinite &&
            (1 === e.direction && e.currentSlide + 1 === e.slideCount - 1
              ? (e.direction = 0)
              : 0 === e.direction &&
                ((t = e.currentSlide - e.options.slidesToScroll),
                e.currentSlide - 1 == 0 && (e.direction = 1))),
          e.slideHandler(t))
      }),
      (t.prototype.buildArrows = function () {
        var t = this
        !0 === t.options.arrows &&
          ((t.$prevArrow = e(t.options.prevArrow).addClass('slick-arrow')),
          (t.$nextArrow = e(t.options.nextArrow).addClass('slick-arrow')),
          t.slideCount > t.options.slidesToShow
            ? (t.$prevArrow
                .removeClass('slick-hidden')
                .removeAttr('aria-hidden tabindex'),
              t.$nextArrow
                .removeClass('slick-hidden')
                .removeAttr('aria-hidden tabindex'),
              t.htmlExpr.test(t.options.prevArrow) &&
                t.$prevArrow.prependTo(t.options.appendArrows),
              t.htmlExpr.test(t.options.nextArrow) &&
                t.$nextArrow.appendTo(t.options.appendArrows),
              !0 !== t.options.infinite &&
                t.$prevArrow
                  .addClass('slick-disabled')
                  .attr('aria-disabled', 'true'))
            : t.$prevArrow
                .add(t.$nextArrow)
                .addClass('slick-hidden')
                .attr({ 'aria-disabled': 'true', tabindex: '-1' }))
      }),
      (t.prototype.buildDots = function () {
        var t,
          n,
          i = this
        if (!0 === i.options.dots) {
          for (
            i.$slider.addClass('slick-dotted'),
              n = e('<ul />').addClass(i.options.dotsClass),
              t = 0;
            t <= i.getDotCount();
            t += 1
          )
            n.append(
              e('<li />').append(i.options.customPaging.call(this, i, t))
            )
          ;(i.$dots = n.appendTo(i.options.appendDots)),
            i.$dots
              .find('li')
              .first()
              .addClass('slick-active')
        }
      }),
      (t.prototype.buildOut = function () {
        var t = this
        ;(t.$slides = t.$slider
          .children(t.options.slide + ':not(.slick-cloned)')
          .addClass('slick-slide')),
          (t.slideCount = t.$slides.length),
          t.$slides.each(function (t, n) {
            e(n)
              .attr('data-slick-index', t)
              .data('originalStyling', e(n).attr('style') || '')
          }),
          t.$slider.addClass('slick-slider'),
          (t.$slideTrack =
            0 === t.slideCount
              ? e('<div class="slick-track"/>').appendTo(t.$slider)
              : t.$slides.wrapAll('<div class="slick-track"/>').parent()),
          (t.$list = t.$slideTrack.wrap('<div class="slick-list"/>').parent()),
          t.$slideTrack.css('opacity', 0),
          (!0 !== t.options.centerMode && !0 !== t.options.swipeToSlide) ||
            (t.options.slidesToScroll = 1),
          e('img[data-lazy]', t.$slider)
            .not('[src]')
            .addClass('slick-loading'),
          t.setupInfinite(),
          t.buildArrows(),
          t.buildDots(),
          t.updateDots(),
          t.setSlideClasses(
            'number' == typeof t.currentSlide ? t.currentSlide : 0
          ),
          !0 === t.options.draggable && t.$list.addClass('draggable')
      }),
      (t.prototype.buildRows = function () {
        var e,
          t,
          n,
          i,
          o,
          r,
          a,
          s = this
        if (
          ((i = document.createDocumentFragment()),
          (r = s.$slider.children()),
          s.options.rows > 1)
        ) {
          for (
            a = s.options.slidesPerRow * s.options.rows,
              o = Math.ceil(r.length / a),
              e = 0;
            e < o;
            e++
          ) {
            var l = document.createElement('div')
            for (t = 0; t < s.options.rows; t++) {
              var c = document.createElement('div')
              for (n = 0; n < s.options.slidesPerRow; n++) {
                var u = e * a + (t * s.options.slidesPerRow + n)
                r.get(u) && c.appendChild(r.get(u))
              }
              l.appendChild(c)
            }
            i.appendChild(l)
          }
          s.$slider.empty().append(i),
            s.$slider
              .children()
              .children()
              .children()
              .css({
                width: 100 / s.options.slidesPerRow + '%',
                display: 'inline-block'
              })
        }
      }),
      (t.prototype.checkResponsive = function (t, n) {
        var i,
          o,
          r,
          a = this,
          s = !1,
          l = a.$slider.width(),
          c = window.innerWidth || e(window).width()
        if (
          ('window' === a.respondTo
            ? (r = c)
            : 'slider' === a.respondTo
            ? (r = l)
            : 'min' === a.respondTo && (r = Math.min(c, l)),
          a.options.responsive &&
            a.options.responsive.length &&
            null !== a.options.responsive)
        ) {
          for (i in ((o = null), a.breakpoints))
            a.breakpoints.hasOwnProperty(i) &&
              (!1 === a.originalSettings.mobileFirst
                ? r < a.breakpoints[i] && (o = a.breakpoints[i])
                : r > a.breakpoints[i] && (o = a.breakpoints[i]))
          null !== o
            ? null !== a.activeBreakpoint
              ? (o !== a.activeBreakpoint || n) &&
                ((a.activeBreakpoint = o),
                'unslick' === a.breakpointSettings[o]
                  ? a.unslick(o)
                  : ((a.options = e.extend(
                      {},
                      a.originalSettings,
                      a.breakpointSettings[o]
                    )),
                    !0 === t && (a.currentSlide = a.options.initialSlide),
                    a.refresh(t)),
                (s = o))
              : ((a.activeBreakpoint = o),
                'unslick' === a.breakpointSettings[o]
                  ? a.unslick(o)
                  : ((a.options = e.extend(
                      {},
                      a.originalSettings,
                      a.breakpointSettings[o]
                    )),
                    !0 === t && (a.currentSlide = a.options.initialSlide),
                    a.refresh(t)),
                (s = o))
            : null !== a.activeBreakpoint &&
              ((a.activeBreakpoint = null),
              (a.options = a.originalSettings),
              !0 === t && (a.currentSlide = a.options.initialSlide),
              a.refresh(t),
              (s = o)),
            t || !1 === s || a.$slider.trigger('breakpoint', [a, s])
        }
      }),
      (t.prototype.changeSlide = function (t, n) {
        var i,
          o,
          r = this,
          a = e(t.currentTarget)
        switch (
          (a.is('a') && t.preventDefault(),
          a.is('li') || (a = a.closest('li')),
          (i =
            r.slideCount % r.options.slidesToScroll != 0
              ? 0
              : (r.slideCount - r.currentSlide) % r.options.slidesToScroll),
          t.data.message)
        ) {
          case 'previous':
            ;(o =
              0 === i ? r.options.slidesToScroll : r.options.slidesToShow - i),
              r.slideCount > r.options.slidesToShow &&
                r.slideHandler(r.currentSlide - o, !1, n)
            break
          case 'next':
            ;(o = 0 === i ? r.options.slidesToScroll : i),
              r.slideCount > r.options.slidesToShow &&
                r.slideHandler(r.currentSlide + o, !1, n)
            break
          case 'index':
            var s =
              0 === t.data.index
                ? 0
                : t.data.index || a.index() * r.options.slidesToScroll
            r.slideHandler(r.checkNavigable(s), !1, n),
              a.children().trigger('focus')
            break
          default:
            return
        }
      }),
      (t.prototype.checkNavigable = function (e) {
        var t, n
        if (((n = 0), e > (t = this.getNavigableIndexes())[t.length - 1]))
          e = t[t.length - 1]
        else
          for (var i in t) {
            if (e < t[i]) {
              e = n
              break
            }
            n = t[i]
          }
        return e
      }),
      (t.prototype.cleanUpEvents = function () {
        var t = this
        t.options.dots &&
          null !== t.$dots &&
          (e('li', t.$dots)
            .off('click.slick', t.changeSlide)
            .off('mouseenter.slick', e.proxy(t.interrupt, t, !0))
            .off('mouseleave.slick', e.proxy(t.interrupt, t, !1)),
          !0 === t.options.accessibility &&
            t.$dots.off('keydown.slick', t.keyHandler)),
          t.$slider.off('focus.slick blur.slick'),
          !0 === t.options.arrows &&
            t.slideCount > t.options.slidesToShow &&
            (t.$prevArrow && t.$prevArrow.off('click.slick', t.changeSlide),
            t.$nextArrow && t.$nextArrow.off('click.slick', t.changeSlide),
            !0 === t.options.accessibility &&
              (t.$prevArrow && t.$prevArrow.off('keydown.slick', t.keyHandler),
              t.$nextArrow && t.$nextArrow.off('keydown.slick', t.keyHandler))),
          t.$list.off('touchstart.slick mousedown.slick', t.swipeHandler),
          t.$list.off('touchmove.slick mousemove.slick', t.swipeHandler),
          t.$list.off('touchend.slick mouseup.slick', t.swipeHandler),
          t.$list.off('touchcancel.slick mouseleave.slick', t.swipeHandler),
          t.$list.off('click.slick', t.clickHandler),
          e(document).off(t.visibilityChange, t.visibility),
          t.cleanUpSlideEvents(),
          !0 === t.options.accessibility &&
            t.$list.off('keydown.slick', t.keyHandler),
          !0 === t.options.focusOnSelect &&
            e(t.$slideTrack)
              .children()
              .off('click.slick', t.selectHandler),
          e(window).off(
            'orientationchange.slick.slick-' + t.instanceUid,
            t.orientationChange
          ),
          e(window).off('resize.slick.slick-' + t.instanceUid, t.resize),
          e('[draggable!=true]', t.$slideTrack).off(
            'dragstart',
            t.preventDefault
          ),
          e(window).off('load.slick.slick-' + t.instanceUid, t.setPosition)
      }),
      (t.prototype.cleanUpSlideEvents = function () {
        var t = this
        t.$list.off('mouseenter.slick', e.proxy(t.interrupt, t, !0)),
          t.$list.off('mouseleave.slick', e.proxy(t.interrupt, t, !1))
      }),
      (t.prototype.cleanUpRows = function () {
        var e,
          t = this
        t.options.rows > 1 &&
          ((e = t.$slides.children().children()).removeAttr('style'),
          t.$slider.empty().append(e))
      }),
      (t.prototype.clickHandler = function (e) {
        !1 === this.shouldClick &&
          (e.stopImmediatePropagation(),
          e.stopPropagation(),
          e.preventDefault())
      }),
      (t.prototype.destroy = function (t) {
        var n = this
        n.autoPlayClear(),
          (n.touchObject = {}),
          n.cleanUpEvents(),
          e('.slick-cloned', n.$slider).detach(),
          n.$dots && n.$dots.remove(),
          n.$prevArrow &&
            n.$prevArrow.length &&
            (n.$prevArrow
              .removeClass('slick-disabled slick-arrow slick-hidden')
              .removeAttr('aria-hidden aria-disabled tabindex')
              .css('display', ''),
            n.htmlExpr.test(n.options.prevArrow) && n.$prevArrow.remove()),
          n.$nextArrow &&
            n.$nextArrow.length &&
            (n.$nextArrow
              .removeClass('slick-disabled slick-arrow slick-hidden')
              .removeAttr('aria-hidden aria-disabled tabindex')
              .css('display', ''),
            n.htmlExpr.test(n.options.nextArrow) && n.$nextArrow.remove()),
          n.$slides &&
            (n.$slides
              .removeClass(
                'slick-slide slick-active slick-center slick-visible slick-current'
              )
              .removeAttr('aria-hidden')
              .removeAttr('data-slick-index')
              .each(function () {
                e(this).attr('style', e(this).data('originalStyling'))
              }),
            n.$slideTrack.children(this.options.slide).detach(),
            n.$slideTrack.detach(),
            n.$list.detach(),
            n.$slider.append(n.$slides)),
          n.cleanUpRows(),
          n.$slider.removeClass('slick-slider'),
          n.$slider.removeClass('slick-initialized'),
          n.$slider.removeClass('slick-dotted'),
          (n.unslicked = !0),
          t || n.$slider.trigger('destroy', [n])
      }),
      (t.prototype.disableTransition = function (e) {
        var t = this,
          n = {}
        ;(n[t.transitionType] = ''),
          !1 === t.options.fade ? t.$slideTrack.css(n) : t.$slides.eq(e).css(n)
      }),
      (t.prototype.fadeSlide = function (e, t) {
        var n = this
        !1 === n.cssTransitions
          ? (n.$slides.eq(e).css({ zIndex: n.options.zIndex }),
            n.$slides
              .eq(e)
              .animate({ opacity: 1 }, n.options.speed, n.options.easing, t))
          : (n.applyTransition(e),
            n.$slides.eq(e).css({ opacity: 1, zIndex: n.options.zIndex }),
            t &&
              setTimeout(function () {
                n.disableTransition(e), t.call()
              }, n.options.speed))
      }),
      (t.prototype.fadeSlideOut = function (e) {
        var t = this
        !1 === t.cssTransitions
          ? t.$slides
              .eq(e)
              .animate(
                { opacity: 0, zIndex: t.options.zIndex - 2 },
                t.options.speed,
                t.options.easing
              )
          : (t.applyTransition(e),
            t.$slides.eq(e).css({ opacity: 0, zIndex: t.options.zIndex - 2 }))
      }),
      (t.prototype.filterSlides = t.prototype.slickFilter = function (e) {
        var t = this
        null !== e &&
          ((t.$slidesCache = t.$slides),
          t.unload(),
          t.$slideTrack.children(this.options.slide).detach(),
          t.$slidesCache.filter(e).appendTo(t.$slideTrack),
          t.reinit())
      }),
      (t.prototype.focusHandler = function () {
        var t = this
        t.$slider
          .off('focus.slick blur.slick')
          .on('focus.slick blur.slick', '*', function (n) {
            n.stopImmediatePropagation()
            var i = e(this)
            setTimeout(function () {
              t.options.pauseOnFocus &&
                ((t.focussed = i.is(':focus')), t.autoPlay())
            }, 0)
          })
      }),
      (t.prototype.getCurrent = t.prototype.slickCurrentSlide = function () {
        return this.currentSlide
      }),
      (t.prototype.getDotCount = function () {
        var e = this,
          t = 0,
          n = 0,
          i = 0
        if (!0 === e.options.infinite)
          if (e.slideCount <= e.options.slidesToShow) ++i
          else
            for (; t < e.slideCount; )
              ++i,
                (t = n + e.options.slidesToScroll),
                (n +=
                  e.options.slidesToScroll <= e.options.slidesToShow
                    ? e.options.slidesToScroll
                    : e.options.slidesToShow)
        else if (!0 === e.options.centerMode) i = e.slideCount
        else if (e.options.asNavFor)
          for (; t < e.slideCount; )
            ++i,
              (t = n + e.options.slidesToScroll),
              (n +=
                e.options.slidesToScroll <= e.options.slidesToShow
                  ? e.options.slidesToScroll
                  : e.options.slidesToShow)
        else
          i =
            1 +
            Math.ceil(
              (e.slideCount - e.options.slidesToShow) / e.options.slidesToScroll
            )
        return i - 1
      }),
      (t.prototype.getLeft = function (e) {
        var t,
          n,
          i,
          o,
          r = this,
          a = 0
        return (
          (r.slideOffset = 0),
          (n = r.$slides.first().outerHeight(!0)),
          !0 === r.options.infinite
            ? (r.slideCount > r.options.slidesToShow &&
                ((r.slideOffset = r.slideWidth * r.options.slidesToShow * -1),
                (o = -1),
                !0 === r.options.vertical &&
                  !0 === r.options.centerMode &&
                  (2 === r.options.slidesToShow
                    ? (o = -1.5)
                    : 1 === r.options.slidesToShow && (o = -2)),
                (a = n * r.options.slidesToShow * o)),
              r.slideCount % r.options.slidesToScroll != 0 &&
                e + r.options.slidesToScroll > r.slideCount &&
                r.slideCount > r.options.slidesToShow &&
                (e > r.slideCount
                  ? ((r.slideOffset =
                      (r.options.slidesToShow - (e - r.slideCount)) *
                      r.slideWidth *
                      -1),
                    (a =
                      (r.options.slidesToShow - (e - r.slideCount)) * n * -1))
                  : ((r.slideOffset =
                      (r.slideCount % r.options.slidesToScroll) *
                      r.slideWidth *
                      -1),
                    (a = (r.slideCount % r.options.slidesToScroll) * n * -1))))
            : e + r.options.slidesToShow > r.slideCount &&
              ((r.slideOffset =
                (e + r.options.slidesToShow - r.slideCount) * r.slideWidth),
              (a = (e + r.options.slidesToShow - r.slideCount) * n)),
          r.slideCount <= r.options.slidesToShow &&
            ((r.slideOffset = 0), (a = 0)),
          !0 === r.options.centerMode && r.slideCount <= r.options.slidesToShow
            ? (r.slideOffset =
                (r.slideWidth * Math.floor(r.options.slidesToShow)) / 2 -
                (r.slideWidth * r.slideCount) / 2)
            : !0 === r.options.centerMode && !0 === r.options.infinite
            ? (r.slideOffset +=
                r.slideWidth * Math.floor(r.options.slidesToShow / 2) -
                r.slideWidth)
            : !0 === r.options.centerMode &&
              ((r.slideOffset = 0),
              (r.slideOffset +=
                r.slideWidth * Math.floor(r.options.slidesToShow / 2))),
          (t =
            !1 === r.options.vertical
              ? e * r.slideWidth * -1 + r.slideOffset
              : e * n * -1 + a),
          !0 === r.options.variableWidth &&
            ((i =
              r.slideCount <= r.options.slidesToShow ||
              !1 === r.options.infinite
                ? r.$slideTrack.children('.slick-slide').eq(e)
                : r.$slideTrack
                    .children('.slick-slide')
                    .eq(e + r.options.slidesToShow)),
            (t =
              !0 === r.options.rtl
                ? i[0]
                  ? -1 * (r.$slideTrack.width() - i[0].offsetLeft - i.width())
                  : 0
                : i[0]
                ? -1 * i[0].offsetLeft
                : 0),
            !0 === r.options.centerMode &&
              ((i =
                r.slideCount <= r.options.slidesToShow ||
                !1 === r.options.infinite
                  ? r.$slideTrack.children('.slick-slide').eq(e)
                  : r.$slideTrack
                      .children('.slick-slide')
                      .eq(e + r.options.slidesToShow + 1)),
              (t =
                !0 === r.options.rtl
                  ? i[0]
                    ? -1 * (r.$slideTrack.width() - i[0].offsetLeft - i.width())
                    : 0
                  : i[0]
                  ? -1 * i[0].offsetLeft
                  : 0),
              (t += (r.$list.width() - i.outerWidth()) / 2))),
          t
        )
      }),
      (t.prototype.getOption = t.prototype.slickGetOption = function (e) {
        return this.options[e]
      }),
      (t.prototype.getNavigableIndexes = function () {
        var e,
          t = this,
          n = 0,
          i = 0,
          o = []
        for (
          !1 === t.options.infinite
            ? (e = t.slideCount)
            : ((n = -1 * t.options.slidesToScroll),
              (i = -1 * t.options.slidesToScroll),
              (e = 2 * t.slideCount));
          n < e;

        )
          o.push(n),
            (n = i + t.options.slidesToScroll),
            (i +=
              t.options.slidesToScroll <= t.options.slidesToShow
                ? t.options.slidesToScroll
                : t.options.slidesToShow)
        return o
      }),
      (t.prototype.getSlick = function () {
        return this
      }),
      (t.prototype.getSlideCount = function () {
        var t,
          n,
          i = this
        return (
          (n =
            !0 === i.options.centerMode
              ? i.slideWidth * Math.floor(i.options.slidesToShow / 2)
              : 0),
          !0 === i.options.swipeToSlide
            ? (i.$slideTrack.find('.slick-slide').each(function (o, r) {
                if (r.offsetLeft - n + e(r).outerWidth() / 2 > -1 * i.swipeLeft)
                  return (t = r), !1
              }),
              Math.abs(e(t).attr('data-slick-index') - i.currentSlide) || 1)
            : i.options.slidesToScroll
        )
      }),
      (t.prototype.goTo = t.prototype.slickGoTo = function (e, t) {
        this.changeSlide({ data: { message: 'index', index: parseInt(e) } }, t)
      }),
      (t.prototype.init = function (t) {
        var n = this
        e(n.$slider).hasClass('slick-initialized') ||
          (e(n.$slider).addClass('slick-initialized'),
          n.buildRows(),
          n.buildOut(),
          n.setProps(),
          n.startLoad(),
          n.loadSlider(),
          n.initializeEvents(),
          n.updateArrows(),
          n.updateDots(),
          n.checkResponsive(!0),
          n.focusHandler()),
          t && n.$slider.trigger('init', [n]),
          !0 === n.options.accessibility && n.initADA(),
          n.options.autoplay && ((n.paused = !1), n.autoPlay())
      }),
      (t.prototype.initADA = function () {
        var t = this,
          n = Math.ceil(t.slideCount / t.options.slidesToShow),
          i = t.getNavigableIndexes().filter(function (e) {
            return e >= 0 && e < t.slideCount
          })
        t.$slides
          .add(t.$slideTrack.find('.slick-cloned'))
          .attr({ 'aria-hidden': 'true', tabindex: '-1' })
          .find('a, input, button, select')
          .attr({ tabindex: '-1' }),
          null !== t.$dots &&
            (t.$slides
              .not(t.$slideTrack.find('.slick-cloned'))
              .each(function (n) {
                var o = i.indexOf(n)
                e(this).attr({
                  role: 'tabpanel',
                  id: 'slick-slide' + t.instanceUid + n,
                  tabindex: -1
                }),
                  -1 !== o &&
                    e(this).attr({
                      'aria-describedby':
                        'slick-slide-control' + t.instanceUid + o
                    })
              }),
            t.$dots
              .attr('role', 'tablist')
              .find('li')
              .each(function (o) {
                var r = i[o]
                e(this).attr({ role: 'presentation' }),
                  e(this)
                    .find('button')
                    .first()
                    .attr({
                      role: 'tab',
                      id: 'slick-slide-control' + t.instanceUid + o,
                      'aria-controls': 'slick-slide' + t.instanceUid + r,
                      'aria-label': o + 1 + ' of ' + n,
                      'aria-selected': null,
                      tabindex: '-1'
                    })
              })
              .eq(t.currentSlide)
              .find('button')
              .attr({ 'aria-selected': 'true', tabindex: '0' })
              .end())
        for (var o = t.currentSlide, r = o + t.options.slidesToShow; o < r; o++)
          t.$slides.eq(o).attr('tabindex', 0)
        t.activateADA()
      }),
      (t.prototype.initArrowEvents = function () {
        var e = this
        !0 === e.options.arrows &&
          e.slideCount > e.options.slidesToShow &&
          (e.$prevArrow
            .off('click.slick')
            .on('click.slick', { message: 'previous' }, e.changeSlide),
          e.$nextArrow
            .off('click.slick')
            .on('click.slick', { message: 'next' }, e.changeSlide),
          !0 === e.options.accessibility &&
            (e.$prevArrow.on('keydown.slick', e.keyHandler),
            e.$nextArrow.on('keydown.slick', e.keyHandler)))
      }),
      (t.prototype.initDotEvents = function () {
        var t = this
        !0 === t.options.dots &&
          (e('li', t.$dots).on(
            'click.slick',
            { message: 'index' },
            t.changeSlide
          ),
          !0 === t.options.accessibility &&
            t.$dots.on('keydown.slick', t.keyHandler)),
          !0 === t.options.dots &&
            !0 === t.options.pauseOnDotsHover &&
            e('li', t.$dots)
              .on('mouseenter.slick', e.proxy(t.interrupt, t, !0))
              .on('mouseleave.slick', e.proxy(t.interrupt, t, !1))
      }),
      (t.prototype.initSlideEvents = function () {
        var t = this
        t.options.pauseOnHover &&
          (t.$list.on('mouseenter.slick', e.proxy(t.interrupt, t, !0)),
          t.$list.on('mouseleave.slick', e.proxy(t.interrupt, t, !1)))
      }),
      (t.prototype.initializeEvents = function () {
        var t = this
        t.initArrowEvents(),
          t.initDotEvents(),
          t.initSlideEvents(),
          t.$list.on(
            'touchstart.slick mousedown.slick',
            { action: 'start' },
            t.swipeHandler
          ),
          t.$list.on(
            'touchmove.slick mousemove.slick',
            { action: 'move' },
            t.swipeHandler
          ),
          t.$list.on(
            'touchend.slick mouseup.slick',
            { action: 'end' },
            t.swipeHandler
          ),
          t.$list.on(
            'touchcancel.slick mouseleave.slick',
            { action: 'end' },
            t.swipeHandler
          ),
          t.$list.on('click.slick', t.clickHandler),
          e(document).on(t.visibilityChange, e.proxy(t.visibility, t)),
          !0 === t.options.accessibility &&
            t.$list.on('keydown.slick', t.keyHandler),
          !0 === t.options.focusOnSelect &&
            e(t.$slideTrack)
              .children()
              .on('click.slick', t.selectHandler),
          e(window).on(
            'orientationchange.slick.slick-' + t.instanceUid,
            e.proxy(t.orientationChange, t)
          ),
          e(window).on(
            'resize.slick.slick-' + t.instanceUid,
            e.proxy(t.resize, t)
          ),
          e('[draggable!=true]', t.$slideTrack).on(
            'dragstart',
            t.preventDefault
          ),
          e(window).on('load.slick.slick-' + t.instanceUid, t.setPosition),
          e(t.setPosition)
      }),
      (t.prototype.initUI = function () {
        var e = this
        !0 === e.options.arrows &&
          e.slideCount > e.options.slidesToShow &&
          (e.$prevArrow.show(), e.$nextArrow.show()),
          !0 === e.options.dots &&
            e.slideCount > e.options.slidesToShow &&
            e.$dots.show()
      }),
      (t.prototype.keyHandler = function (e) {
        var t = this
        e.target.tagName.match('TEXTAREA|INPUT|SELECT') ||
          (37 === e.keyCode && !0 === t.options.accessibility
            ? t.changeSlide({
                data: { message: !0 === t.options.rtl ? 'next' : 'previous' }
              })
            : 39 === e.keyCode &&
              !0 === t.options.accessibility &&
              t.changeSlide({
                data: { message: !0 === t.options.rtl ? 'previous' : 'next' }
              }))
      }),
      (t.prototype.lazyLoad = function () {
        function t (t) {
          e('img[data-lazy]', t).each(function () {
            var t = e(this),
              n = e(this).attr('data-lazy'),
              i = e(this).attr('data-srcset'),
              o = e(this).attr('data-sizes') || r.$slider.attr('data-sizes'),
              a = document.createElement('img')
            ;(a.onload = function () {
              t.animate({ opacity: 0 }, 100, function () {
                i && (t.attr('srcset', i), o && t.attr('sizes', o)),
                  t.attr('src', n).animate({ opacity: 1 }, 200, function () {
                    t.removeAttr(
                      'data-lazy data-srcset data-sizes'
                    ).removeClass('slick-loading')
                  }),
                  r.$slider.trigger('lazyLoaded', [r, t, n])
              })
            }),
              (a.onerror = function () {
                t
                  .removeAttr('data-lazy')
                  .removeClass('slick-loading')
                  .addClass('slick-lazyload-error'),
                  r.$slider.trigger('lazyLoadError', [r, t, n])
              }),
              (a.src = n)
          })
        }
        var n,
          i,
          o,
          r = this
        if (
          (!0 === r.options.centerMode
            ? !0 === r.options.infinite
              ? (o =
                  (i = r.currentSlide + (r.options.slidesToShow / 2 + 1)) +
                  r.options.slidesToShow +
                  2)
              : ((i = Math.max(
                  0,
                  r.currentSlide - (r.options.slidesToShow / 2 + 1)
                )),
                (o = r.options.slidesToShow / 2 + 1 + 2 + r.currentSlide))
            : ((i = r.options.infinite
                ? r.options.slidesToShow + r.currentSlide
                : r.currentSlide),
              (o = Math.ceil(i + r.options.slidesToShow)),
              !0 === r.options.fade &&
                (i > 0 && i--, o <= r.slideCount && o++)),
          (n = r.$slider.find('.slick-slide').slice(i, o)),
          'anticipated' === r.options.lazyLoad)
        )
          for (
            var a = i - 1, s = o, l = r.$slider.find('.slick-slide'), c = 0;
            c < r.options.slidesToScroll;
            c++
          )
            a < 0 && (a = r.slideCount - 1),
              (n = (n = n.add(l.eq(a))).add(l.eq(s))),
              a--,
              s++
        t(n),
          r.slideCount <= r.options.slidesToShow
            ? t(r.$slider.find('.slick-slide'))
            : r.currentSlide >= r.slideCount - r.options.slidesToShow
            ? t(
                r.$slider.find('.slick-cloned').slice(0, r.options.slidesToShow)
              )
            : 0 === r.currentSlide &&
              t(
                r.$slider
                  .find('.slick-cloned')
                  .slice(-1 * r.options.slidesToShow)
              )
      }),
      (t.prototype.loadSlider = function () {
        var e = this
        e.setPosition(),
          e.$slideTrack.css({ opacity: 1 }),
          e.$slider.removeClass('slick-loading'),
          e.initUI(),
          'progressive' === e.options.lazyLoad && e.progressiveLazyLoad()
      }),
      (t.prototype.next = t.prototype.slickNext = function () {
        this.changeSlide({ data: { message: 'next' } })
      }),
      (t.prototype.orientationChange = function () {
        this.checkResponsive(), this.setPosition()
      }),
      (t.prototype.pause = t.prototype.slickPause = function () {
        this.autoPlayClear(), (this.paused = !0)
      }),
      (t.prototype.play = t.prototype.slickPlay = function () {
        var e = this
        e.autoPlay(),
          (e.options.autoplay = !0),
          (e.paused = !1),
          (e.focussed = !1),
          (e.interrupted = !1)
      }),
      (t.prototype.postSlide = function (t) {
        var n = this
        n.unslicked ||
          (n.$slider.trigger('afterChange', [n, t]),
          (n.animating = !1),
          n.slideCount > n.options.slidesToShow && n.setPosition(),
          (n.swipeLeft = null),
          n.options.autoplay && n.autoPlay(),
          !0 === n.options.accessibility &&
            (n.initADA(),
            n.options.focusOnChange &&
              e(n.$slides.get(n.currentSlide))
                .attr('tabindex', 0)
                .focus()))
      }),
      (t.prototype.prev = t.prototype.slickPrev = function () {
        this.changeSlide({ data: { message: 'previous' } })
      }),
      (t.prototype.preventDefault = function (e) {
        e.preventDefault()
      }),
      (t.prototype.progressiveLazyLoad = function (t) {
        t = t || 1
        var n,
          i,
          o,
          r,
          a,
          s = this,
          l = e('img[data-lazy]', s.$slider)
        l.length
          ? ((n = l.first()),
            (i = n.attr('data-lazy')),
            (o = n.attr('data-srcset')),
            (r = n.attr('data-sizes') || s.$slider.attr('data-sizes')),
            ((a = document.createElement('img')).onload = function () {
              o && (n.attr('srcset', o), r && n.attr('sizes', r)),
                n
                  .attr('src', i)
                  .removeAttr('data-lazy data-srcset data-sizes')
                  .removeClass('slick-loading'),
                !0 === s.options.adaptiveHeight && s.setPosition(),
                s.$slider.trigger('lazyLoaded', [s, n, i]),
                s.progressiveLazyLoad()
            }),
            (a.onerror = function () {
              t < 3
                ? setTimeout(function () {
                    s.progressiveLazyLoad(t + 1)
                  }, 500)
                : (n
                    .removeAttr('data-lazy')
                    .removeClass('slick-loading')
                    .addClass('slick-lazyload-error'),
                  s.$slider.trigger('lazyLoadError', [s, n, i]),
                  s.progressiveLazyLoad())
            }),
            (a.src = i))
          : s.$slider.trigger('allImagesLoaded', [s])
      }),
      (t.prototype.refresh = function (t) {
        var n,
          i,
          o = this
        ;(i = o.slideCount - o.options.slidesToShow),
          !o.options.infinite && o.currentSlide > i && (o.currentSlide = i),
          o.slideCount <= o.options.slidesToShow && (o.currentSlide = 0),
          (n = o.currentSlide),
          o.destroy(!0),
          e.extend(o, o.initials, { currentSlide: n }),
          o.init(),
          t || o.changeSlide({ data: { message: 'index', index: n } }, !1)
      }),
      (t.prototype.registerBreakpoints = function () {
        var t,
          n,
          i,
          o = this,
          r = o.options.responsive || null
        if ('array' === e.type(r) && r.length) {
          for (t in ((o.respondTo = o.options.respondTo || 'window'), r))
            if (((i = o.breakpoints.length - 1), r.hasOwnProperty(t))) {
              for (n = r[t].breakpoint; i >= 0; )
                o.breakpoints[i] &&
                  o.breakpoints[i] === n &&
                  o.breakpoints.splice(i, 1),
                  i--
              o.breakpoints.push(n), (o.breakpointSettings[n] = r[t].settings)
            }
          o.breakpoints.sort(function (e, t) {
            return o.options.mobileFirst ? e - t : t - e
          })
        }
      }),
      (t.prototype.reinit = function () {
        var t = this
        ;(t.$slides = t.$slideTrack
          .children(t.options.slide)
          .addClass('slick-slide')),
          (t.slideCount = t.$slides.length),
          t.currentSlide >= t.slideCount &&
            0 !== t.currentSlide &&
            (t.currentSlide = t.currentSlide - t.options.slidesToScroll),
          t.slideCount <= t.options.slidesToShow && (t.currentSlide = 0),
          t.registerBreakpoints(),
          t.setProps(),
          t.setupInfinite(),
          t.buildArrows(),
          t.updateArrows(),
          t.initArrowEvents(),
          t.buildDots(),
          t.updateDots(),
          t.initDotEvents(),
          t.cleanUpSlideEvents(),
          t.initSlideEvents(),
          t.checkResponsive(!1, !0),
          !0 === t.options.focusOnSelect &&
            e(t.$slideTrack)
              .children()
              .on('click.slick', t.selectHandler),
          t.setSlideClasses(
            'number' == typeof t.currentSlide ? t.currentSlide : 0
          ),
          t.setPosition(),
          t.focusHandler(),
          (t.paused = !t.options.autoplay),
          t.autoPlay(),
          t.$slider.trigger('reInit', [t])
      }),
      (t.prototype.resize = function () {
        var t = this
        e(window).width() !== t.windowWidth &&
          (clearTimeout(t.windowDelay),
          (t.windowDelay = window.setTimeout(function () {
            ;(t.windowWidth = e(window).width()),
              t.checkResponsive(),
              t.unslicked || t.setPosition()
          }, 50)))
      }),
      (t.prototype.removeSlide = t.prototype.slickRemove = function (e, t, n) {
        var i = this
        if (
          ((e =
            'boolean' == typeof e
              ? !0 === (t = e)
                ? 0
                : i.slideCount - 1
              : !0 === t
              ? --e
              : e),
          i.slideCount < 1 || e < 0 || e > i.slideCount - 1)
        )
          return !1
        i.unload(),
          !0 === n
            ? i.$slideTrack.children().remove()
            : i.$slideTrack
                .children(this.options.slide)
                .eq(e)
                .remove(),
          (i.$slides = i.$slideTrack.children(this.options.slide)),
          i.$slideTrack.children(this.options.slide).detach(),
          i.$slideTrack.append(i.$slides),
          (i.$slidesCache = i.$slides),
          i.reinit()
      }),
      (t.prototype.setCSS = function (e) {
        var t,
          n,
          i = this,
          o = {}
        !0 === i.options.rtl && (e = -e),
          (t = 'left' == i.positionProp ? Math.ceil(e) + 'px' : '0px'),
          (n = 'top' == i.positionProp ? Math.ceil(e) + 'px' : '0px'),
          (o[i.positionProp] = e),
          !1 === i.transformsEnabled
            ? i.$slideTrack.css(o)
            : ((o = {}),
              !1 === i.cssTransitions
                ? ((o[i.animType] = 'translate(' + t + ', ' + n + ')'),
                  i.$slideTrack.css(o))
                : ((o[i.animType] = 'translate3d(' + t + ', ' + n + ', 0px)'),
                  i.$slideTrack.css(o)))
      }),
      (t.prototype.setDimensions = function () {
        var e = this
        !1 === e.options.vertical
          ? !0 === e.options.centerMode &&
            e.$list.css({ padding: '0px ' + e.options.centerPadding })
          : (e.$list.height(
              e.$slides.first().outerHeight(!0) * e.options.slidesToShow
            ),
            !0 === e.options.centerMode &&
              e.$list.css({ padding: e.options.centerPadding + ' 0px' })),
          (e.listWidth = e.$list.width()),
          (e.listHeight = e.$list.height()),
          !1 === e.options.vertical && !1 === e.options.variableWidth
            ? ((e.slideWidth = Math.ceil(e.listWidth / e.options.slidesToShow)),
              e.$slideTrack.width(
                Math.ceil(
                  e.slideWidth * e.$slideTrack.children('.slick-slide').length
                )
              ))
            : !0 === e.options.variableWidth
            ? e.$slideTrack.width(5e3 * e.slideCount)
            : ((e.slideWidth = Math.ceil(e.listWidth)),
              e.$slideTrack.height(
                Math.ceil(
                  e.$slides.first().outerHeight(!0) *
                    e.$slideTrack.children('.slick-slide').length
                )
              ))
        var t = e.$slides.first().outerWidth(!0) - e.$slides.first().width()
        !1 === e.options.variableWidth &&
          e.$slideTrack.children('.slick-slide').width(e.slideWidth - t)
      }),
      (t.prototype.setFade = function () {
        var t,
          n = this
        n.$slides.each(function (i, o) {
          ;(t = n.slideWidth * i * -1),
            !0 === n.options.rtl
              ? e(o).css({
                  position: 'relative',
                  right: t,
                  top: 0,
                  zIndex: n.options.zIndex - 2,
                  opacity: 0
                })
              : e(o).css({
                  position: 'relative',
                  left: t,
                  top: 0,
                  zIndex: n.options.zIndex - 2,
                  opacity: 0
                })
        }),
          n.$slides
            .eq(n.currentSlide)
            .css({ zIndex: n.options.zIndex - 1, opacity: 1 })
      }),
      (t.prototype.setHeight = function () {
        var e = this
        if (
          1 === e.options.slidesToShow &&
          !0 === e.options.adaptiveHeight &&
          !1 === e.options.vertical
        ) {
          var t = e.$slides.eq(e.currentSlide).outerHeight(!0)
          e.$list.css('height', t)
        }
      }),
      (t.prototype.setOption = t.prototype.slickSetOption = function () {
        var t,
          n,
          i,
          o,
          r,
          a = this,
          s = !1
        if (
          ('object' === e.type(arguments[0])
            ? ((i = arguments[0]), (s = arguments[1]), (r = 'multiple'))
            : 'string' === e.type(arguments[0]) &&
              ((i = arguments[0]),
              (o = arguments[1]),
              (s = arguments[2]),
              'responsive' === arguments[0] && 'array' === e.type(arguments[1])
                ? (r = 'responsive')
                : void 0 !== arguments[1] && (r = 'single')),
          'single' === r)
        )
          a.options[i] = o
        else if ('multiple' === r)
          e.each(i, function (e, t) {
            a.options[e] = t
          })
        else if ('responsive' === r)
          for (n in o)
            if ('array' !== e.type(a.options.responsive))
              a.options.responsive = [o[n]]
            else {
              for (t = a.options.responsive.length - 1; t >= 0; )
                a.options.responsive[t].breakpoint === o[n].breakpoint &&
                  a.options.responsive.splice(t, 1),
                  t--
              a.options.responsive.push(o[n])
            }
        s && (a.unload(), a.reinit())
      }),
      (t.prototype.setPosition = function () {
        var e = this
        e.setDimensions(),
          e.setHeight(),
          !1 === e.options.fade
            ? e.setCSS(e.getLeft(e.currentSlide))
            : e.setFade(),
          e.$slider.trigger('setPosition', [e])
      }),
      (t.prototype.setProps = function () {
        var e = this,
          t = document.body.style
        ;(e.positionProp = !0 === e.options.vertical ? 'top' : 'left'),
          'top' === e.positionProp
            ? e.$slider.addClass('slick-vertical')
            : e.$slider.removeClass('slick-vertical'),
          (void 0 === t.WebkitTransition &&
            void 0 === t.MozTransition &&
            void 0 === t.msTransition) ||
            (!0 === e.options.useCSS && (e.cssTransitions = !0)),
          e.options.fade &&
            ('number' == typeof e.options.zIndex
              ? e.options.zIndex < 3 && (e.options.zIndex = 3)
              : (e.options.zIndex = e.defaults.zIndex)),
          void 0 !== t.OTransform &&
            ((e.animType = 'OTransform'),
            (e.transformType = '-o-transform'),
            (e.transitionType = 'OTransition'),
            void 0 === t.perspectiveProperty &&
              void 0 === t.webkitPerspective &&
              (e.animType = !1)),
          void 0 !== t.MozTransform &&
            ((e.animType = 'MozTransform'),
            (e.transformType = '-moz-transform'),
            (e.transitionType = 'MozTransition'),
            void 0 === t.perspectiveProperty &&
              void 0 === t.MozPerspective &&
              (e.animType = !1)),
          void 0 !== t.webkitTransform &&
            ((e.animType = 'webkitTransform'),
            (e.transformType = '-webkit-transform'),
            (e.transitionType = 'webkitTransition'),
            void 0 === t.perspectiveProperty &&
              void 0 === t.webkitPerspective &&
              (e.animType = !1)),
          void 0 !== t.msTransform &&
            ((e.animType = 'msTransform'),
            (e.transformType = '-ms-transform'),
            (e.transitionType = 'msTransition'),
            void 0 === t.msTransform && (e.animType = !1)),
          void 0 !== t.transform &&
            !1 !== e.animType &&
            ((e.animType = 'transform'),
            (e.transformType = 'transform'),
            (e.transitionType = 'transition')),
          (e.transformsEnabled =
            e.options.useTransform && null !== e.animType && !1 !== e.animType)
      }),
      (t.prototype.setSlideClasses = function (e) {
        var t,
          n,
          i,
          o,
          r = this
        if (
          ((n = r.$slider
            .find('.slick-slide')
            .removeClass('slick-active slick-center slick-current')
            .attr('aria-hidden', 'true')),
          r.$slides.eq(e).addClass('slick-current'),
          !0 === r.options.centerMode)
        ) {
          var a = r.options.slidesToShow % 2 == 0 ? 1 : 0
          ;(t = Math.floor(r.options.slidesToShow / 2)),
            !0 === r.options.infinite &&
              (e >= t && e <= r.slideCount - 1 - t
                ? r.$slides
                    .slice(e - t + a, e + t + 1)
                    .addClass('slick-active')
                    .attr('aria-hidden', 'false')
                : ((i = r.options.slidesToShow + e),
                  n
                    .slice(i - t + 1 + a, i + t + 2)
                    .addClass('slick-active')
                    .attr('aria-hidden', 'false')),
              0 === e
                ? n
                    .eq(n.length - 1 - r.options.slidesToShow)
                    .addClass('slick-center')
                : e === r.slideCount - 1 &&
                  n.eq(r.options.slidesToShow).addClass('slick-center')),
            r.$slides.eq(e).addClass('slick-center')
        } else
          e >= 0 && e <= r.slideCount - r.options.slidesToShow
            ? r.$slides
                .slice(e, e + r.options.slidesToShow)
                .addClass('slick-active')
                .attr('aria-hidden', 'false')
            : n.length <= r.options.slidesToShow
            ? n.addClass('slick-active').attr('aria-hidden', 'false')
            : ((o = r.slideCount % r.options.slidesToShow),
              (i = !0 === r.options.infinite ? r.options.slidesToShow + e : e),
              r.options.slidesToShow == r.options.slidesToScroll &&
              r.slideCount - e < r.options.slidesToShow
                ? n
                    .slice(i - (r.options.slidesToShow - o), i + o)
                    .addClass('slick-active')
                    .attr('aria-hidden', 'false')
                : n
                    .slice(i, i + r.options.slidesToShow)
                    .addClass('slick-active')
                    .attr('aria-hidden', 'false'))
        ;('ondemand' !== r.options.lazyLoad &&
          'anticipated' !== r.options.lazyLoad) ||
          r.lazyLoad()
      }),
      (t.prototype.setupInfinite = function () {
        var t,
          n,
          i,
          o = this
        if (
          (!0 === o.options.fade && (o.options.centerMode = !1),
          !0 === o.options.infinite &&
            !1 === o.options.fade &&
            ((n = null), o.slideCount > o.options.slidesToShow))
        ) {
          for (
            i =
              !0 === o.options.centerMode
                ? o.options.slidesToShow + 1
                : o.options.slidesToShow,
              t = o.slideCount;
            t > o.slideCount - i;
            t -= 1
          )
            (n = t - 1),
              e(o.$slides[n])
                .clone(!0)
                .attr('id', '')
                .attr('data-slick-index', n - o.slideCount)
                .prependTo(o.$slideTrack)
                .addClass('slick-cloned')
          for (t = 0; t < i + o.slideCount; t += 1)
            (n = t),
              e(o.$slides[n])
                .clone(!0)
                .attr('id', '')
                .attr('data-slick-index', n + o.slideCount)
                .appendTo(o.$slideTrack)
                .addClass('slick-cloned')
          o.$slideTrack
            .find('.slick-cloned')
            .find('[id]')
            .each(function () {
              e(this).attr('id', '')
            })
        }
      }),
      (t.prototype.interrupt = function (e) {
        e || this.autoPlay(), (this.interrupted = e)
      }),
      (t.prototype.selectHandler = function (t) {
        var n = this,
          i = e(t.target).is('.slick-slide')
            ? e(t.target)
            : e(t.target).parents('.slick-slide'),
          o = parseInt(i.attr('data-slick-index'))
        o || (o = 0),
          n.slideCount <= n.options.slidesToShow
            ? n.slideHandler(o, !1, !0)
            : n.slideHandler(o)
      }),
      (t.prototype.slideHandler = function (e, t, n) {
        var i,
          o,
          r,
          a,
          s,
          l = null,
          c = this
        if (
          ((t = t || !1),
          !(
            (!0 === c.animating && !0 === c.options.waitForAnimate) ||
            (!0 === c.options.fade && c.currentSlide === e)
          ))
        )
          if (
            (!1 === t && c.asNavFor(e),
            (i = e),
            (l = c.getLeft(i)),
            (a = c.getLeft(c.currentSlide)),
            (c.currentLeft = null === c.swipeLeft ? a : c.swipeLeft),
            !1 === c.options.infinite &&
              !1 === c.options.centerMode &&
              (e < 0 || e > c.getDotCount() * c.options.slidesToScroll))
          )
            !1 === c.options.fade &&
              ((i = c.currentSlide),
              !0 !== n
                ? c.animateSlide(a, function () {
                    c.postSlide(i)
                  })
                : c.postSlide(i))
          else if (
            !1 === c.options.infinite &&
            !0 === c.options.centerMode &&
            (e < 0 || e > c.slideCount - c.options.slidesToScroll)
          )
            !1 === c.options.fade &&
              ((i = c.currentSlide),
              !0 !== n
                ? c.animateSlide(a, function () {
                    c.postSlide(i)
                  })
                : c.postSlide(i))
          else {
            if (
              (c.options.autoplay && clearInterval(c.autoPlayTimer),
              (o =
                i < 0
                  ? c.slideCount % c.options.slidesToScroll != 0
                    ? c.slideCount - (c.slideCount % c.options.slidesToScroll)
                    : c.slideCount + i
                  : i >= c.slideCount
                  ? c.slideCount % c.options.slidesToScroll != 0
                    ? 0
                    : i - c.slideCount
                  : i),
              (c.animating = !0),
              c.$slider.trigger('beforeChange', [c, c.currentSlide, o]),
              (r = c.currentSlide),
              (c.currentSlide = o),
              c.setSlideClasses(c.currentSlide),
              c.options.asNavFor &&
                (s = (s = c.getNavTarget()).slick('getSlick')).slideCount <=
                  s.options.slidesToShow &&
                s.setSlideClasses(c.currentSlide),
              c.updateDots(),
              c.updateArrows(),
              !0 === c.options.fade)
            )
              return (
                !0 !== n
                  ? (c.fadeSlideOut(r),
                    c.fadeSlide(o, function () {
                      c.postSlide(o)
                    }))
                  : c.postSlide(o),
                void c.animateHeight()
              )
            !0 !== n
              ? c.animateSlide(l, function () {
                  c.postSlide(o)
                })
              : c.postSlide(o)
          }
      }),
      (t.prototype.startLoad = function () {
        var e = this
        !0 === e.options.arrows &&
          e.slideCount > e.options.slidesToShow &&
          (e.$prevArrow.hide(), e.$nextArrow.hide()),
          !0 === e.options.dots &&
            e.slideCount > e.options.slidesToShow &&
            e.$dots.hide(),
          e.$slider.addClass('slick-loading')
      }),
      (t.prototype.swipeDirection = function () {
        var e,
          t,
          n,
          i,
          o = this
        return (
          (e = o.touchObject.startX - o.touchObject.curX),
          (t = o.touchObject.startY - o.touchObject.curY),
          (n = Math.atan2(t, e)),
          (i = Math.round((180 * n) / Math.PI)) < 0 && (i = 360 - Math.abs(i)),
          (i <= 45 && i >= 0) || (i <= 360 && i >= 315)
            ? !1 === o.options.rtl
              ? 'left'
              : 'right'
            : i >= 135 && i <= 225
            ? !1 === o.options.rtl
              ? 'right'
              : 'left'
            : !0 === o.options.verticalSwiping
            ? i >= 35 && i <= 135
              ? 'down'
              : 'up'
            : 'vertical'
        )
      }),
      (t.prototype.swipeEnd = function (e) {
        var t,
          n,
          i = this
        if (((i.dragging = !1), (i.swiping = !1), i.scrolling))
          return (i.scrolling = !1), !1
        if (
          ((i.interrupted = !1),
          (i.shouldClick = !(i.touchObject.swipeLength > 10)),
          void 0 === i.touchObject.curX)
        )
          return !1
        if (
          (!0 === i.touchObject.edgeHit &&
            i.$slider.trigger('edge', [i, i.swipeDirection()]),
          i.touchObject.swipeLength >= i.touchObject.minSwipe)
        ) {
          switch ((n = i.swipeDirection())) {
            case 'left':
            case 'down':
              ;(t = i.options.swipeToSlide
                ? i.checkNavigable(i.currentSlide + i.getSlideCount())
                : i.currentSlide + i.getSlideCount()),
                (i.currentDirection = 0)
              break
            case 'right':
            case 'up':
              ;(t = i.options.swipeToSlide
                ? i.checkNavigable(i.currentSlide - i.getSlideCount())
                : i.currentSlide - i.getSlideCount()),
                (i.currentDirection = 1)
          }
          'vertical' != n &&
            (i.slideHandler(t),
            (i.touchObject = {}),
            i.$slider.trigger('swipe', [i, n]))
        } else
          i.touchObject.startX !== i.touchObject.curX &&
            (i.slideHandler(i.currentSlide), (i.touchObject = {}))
      }),
      (t.prototype.swipeHandler = function (e) {
        var t = this
        if (
          !(
            !1 === t.options.swipe ||
            ('ontouchend' in document && !1 === t.options.swipe) ||
            (!1 === t.options.draggable && -1 !== e.type.indexOf('mouse'))
          )
        )
          switch (
            ((t.touchObject.fingerCount =
              e.originalEvent && void 0 !== e.originalEvent.touches
                ? e.originalEvent.touches.length
                : 1),
            (t.touchObject.minSwipe = t.listWidth / t.options.touchThreshold),
            !0 === t.options.verticalSwiping &&
              (t.touchObject.minSwipe =
                t.listHeight / t.options.touchThreshold),
            e.data.action)
          ) {
            case 'start':
              t.swipeStart(e)
              break
            case 'move':
              t.swipeMove(e)
              break
            case 'end':
              t.swipeEnd(e)
          }
      }),
      (t.prototype.swipeMove = function (e) {
        var t,
          n,
          i,
          o,
          r,
          a,
          s = this
        return (
          (r = void 0 !== e.originalEvent ? e.originalEvent.touches : null),
          !(!s.dragging || s.scrolling || (r && 1 !== r.length)) &&
            ((t = s.getLeft(s.currentSlide)),
            (s.touchObject.curX = void 0 !== r ? r[0].pageX : e.clientX),
            (s.touchObject.curY = void 0 !== r ? r[0].pageY : e.clientY),
            (s.touchObject.swipeLength = Math.round(
              Math.sqrt(Math.pow(s.touchObject.curX - s.touchObject.startX, 2))
            )),
            (a = Math.round(
              Math.sqrt(Math.pow(s.touchObject.curY - s.touchObject.startY, 2))
            )),
            !s.options.verticalSwiping && !s.swiping && a > 4
              ? ((s.scrolling = !0), !1)
              : (!0 === s.options.verticalSwiping &&
                  (s.touchObject.swipeLength = a),
                (n = s.swipeDirection()),
                void 0 !== e.originalEvent &&
                  s.touchObject.swipeLength > 4 &&
                  ((s.swiping = !0), e.preventDefault()),
                (o =
                  (!1 === s.options.rtl ? 1 : -1) *
                  (s.touchObject.curX > s.touchObject.startX ? 1 : -1)),
                !0 === s.options.verticalSwiping &&
                  (o = s.touchObject.curY > s.touchObject.startY ? 1 : -1),
                (i = s.touchObject.swipeLength),
                (s.touchObject.edgeHit = !1),
                !1 === s.options.infinite &&
                  ((0 === s.currentSlide && 'right' === n) ||
                    (s.currentSlide >= s.getDotCount() && 'left' === n)) &&
                  ((i = s.touchObject.swipeLength * s.options.edgeFriction),
                  (s.touchObject.edgeHit = !0)),
                !1 === s.options.vertical
                  ? (s.swipeLeft = t + i * o)
                  : (s.swipeLeft =
                      t + i * (s.$list.height() / s.listWidth) * o),
                !0 === s.options.verticalSwiping && (s.swipeLeft = t + i * o),
                !0 !== s.options.fade &&
                  !1 !== s.options.touchMove &&
                  (!0 === s.animating
                    ? ((s.swipeLeft = null), !1)
                    : void s.setCSS(s.swipeLeft))))
        )
      }),
      (t.prototype.swipeStart = function (e) {
        var t,
          n = this
        if (
          ((n.interrupted = !0),
          1 !== n.touchObject.fingerCount ||
            n.slideCount <= n.options.slidesToShow)
        )
          return (n.touchObject = {}), !1
        void 0 !== e.originalEvent &&
          void 0 !== e.originalEvent.touches &&
          (t = e.originalEvent.touches[0]),
          (n.touchObject.startX = n.touchObject.curX =
            void 0 !== t ? t.pageX : e.clientX),
          (n.touchObject.startY = n.touchObject.curY =
            void 0 !== t ? t.pageY : e.clientY),
          (n.dragging = !0)
      }),
      (t.prototype.unfilterSlides = t.prototype.slickUnfilter = function () {
        var e = this
        null !== e.$slidesCache &&
          (e.unload(),
          e.$slideTrack.children(this.options.slide).detach(),
          e.$slidesCache.appendTo(e.$slideTrack),
          e.reinit())
      }),
      (t.prototype.unload = function () {
        var t = this
        e('.slick-cloned', t.$slider).remove(),
          t.$dots && t.$dots.remove(),
          t.$prevArrow &&
            t.htmlExpr.test(t.options.prevArrow) &&
            t.$prevArrow.remove(),
          t.$nextArrow &&
            t.htmlExpr.test(t.options.nextArrow) &&
            t.$nextArrow.remove(),
          t.$slides
            .removeClass('slick-slide slick-active slick-visible slick-current')
            .attr('aria-hidden', 'true')
            .css('width', '')
      }),
      (t.prototype.unslick = function (e) {
        var t = this
        t.$slider.trigger('unslick', [t, e]), t.destroy()
      }),
      (t.prototype.updateArrows = function () {
        var e = this
        Math.floor(e.options.slidesToShow / 2),
          !0 === e.options.arrows &&
            e.slideCount > e.options.slidesToShow &&
            !e.options.infinite &&
            (e.$prevArrow
              .removeClass('slick-disabled')
              .attr('aria-disabled', 'false'),
            e.$nextArrow
              .removeClass('slick-disabled')
              .attr('aria-disabled', 'false'),
            0 === e.currentSlide
              ? (e.$prevArrow
                  .addClass('slick-disabled')
                  .attr('aria-disabled', 'true'),
                e.$nextArrow
                  .removeClass('slick-disabled')
                  .attr('aria-disabled', 'false'))
              : ((e.currentSlide >= e.slideCount - e.options.slidesToShow &&
                  !1 === e.options.centerMode) ||
                  (e.currentSlide >= e.slideCount - 1 &&
                    !0 === e.options.centerMode)) &&
                (e.$nextArrow
                  .addClass('slick-disabled')
                  .attr('aria-disabled', 'true'),
                e.$prevArrow
                  .removeClass('slick-disabled')
                  .attr('aria-disabled', 'false')))
      }),
      (t.prototype.updateDots = function () {
        var e = this
        null !== e.$dots &&
          (e.$dots
            .find('li')
            .removeClass('slick-active')
            .end(),
          e.$dots
            .find('li')
            .eq(Math.floor(e.currentSlide / e.options.slidesToScroll))
            .addClass('slick-active'))
      }),
      (t.prototype.visibility = function () {
        var e = this
        e.options.autoplay &&
          (document[e.hidden] ? (e.interrupted = !0) : (e.interrupted = !1))
      }),
      (e.fn.slick = function () {
        var e,
          n,
          i = this,
          o = arguments[0],
          r = Array.prototype.slice.call(arguments, 1),
          a = i.length
        for (e = 0; e < a; e++)
          if (
            ('object' == typeof o || void 0 === o
              ? (i[e].slick = new t(i[e], o))
              : (n = i[e].slick[o].apply(i[e].slick, r)),
            void 0 !== n)
          )
            return n
        return i
      })
  })
var i,
  acc = document.getElementsByClassName('accordion')
for (i = 0; i < acc.length; i++)
  acc[i].addEventListener('click', function () {
    this.classList.toggle('active')
    var e = this.nextElementSibling
    'block' === e.style.display
      ? (e.style.display = 'none')
      : (e.style.display = 'block')
  })
$(document).ready(function () {
  $('.slider').slick({
    dots: !0,
    infinite: !0,
    speed: 300,
    slidesToShow: 1,
    centerMode: !0,
    variableWidth: !0
  })
}),
  $('.menu-open').click(function (e) {
    e.preventDefault,
      $(this).toggleClass('menu-open_active'),
      $('.menu-collapse')
        .toggleClass('d-none')
        .css('order', '1'),
      $('.menu').toggleClass('menu-opened')
  }),
  $('.more').click(function () {
    var e = $(this).attr('href'),
      t = $(e).offset().top
    return (
      jQuery('html:not(:animated),body:not(:animated)').animate(
        { scrollTop: t },
        800
      ),
      !1
    )
  }),
  $('.tariffs-link').click(function () {
    var e = $(this).attr('href'),
      t = $(e).offset().top
    return (
      jQuery('html:not(:animated),body:not(:animated)').animate(
        { scrollTop: t },
        800
      ),
      !1
    )
  }),
  $(window).scroll(function () {
    $('.stock__img').each(function () {
      $(this).offset().top < $(window).scrollTop() + 550 &&
        $(this).addClass('animate__fadeInRight')
    })
  })
const inputsRange = document.querySelectorAll('.price-input'),
  ubscribersNumbers = document.querySelectorAll('.browsing-number'),
  totalPriceAll = document.getElementById('total-price')
for (let e of ubscribersNumbers)
  e.addEventListener('click', () => {
    for (let e of ubscribersNumbers) e.classList.remove('active-numb')
    e.classList.add('active-numb')
  })
for (let e of inputsRange)
  e.addEventListener('input', () => {
    assignValue(), calculation(totalChoice.value)
  })
const calculation = (e = 0) => {
  let t
  t = 0.25 * e
  if (Math.round(t) < 0) return !1
  totalPriceAll.innerHTML = `${t}`
}
$('.quantityOne').on('click', function () {
  var e = $('.quantityOne').val()
  $('.services__price_foure').text(0.25 * e)
}),
  $('.quantityTwo').on('click', function () {
    var e = $('.quantityTwo').val()
    $('.services__price_foure').text(0.25 * e)
  }),
  $('.quantityThree').on('click', function () {
    var e = $('.quantityThree').val()
    $('.services__price_foure').text(0.25 * e)
  }),
  $('.quantityFoure').on('click', function () {
    var e = $('.quantityFoure').val()
    $('.services__price_foure').text(0.25 * e)
  }),
  $('.quantityFive').on('click', function () {
    var e = $('.quantityFive').val()
    $('.services__price_foure').text(0.25 * e)
  }),
  $('.quantitySix').on('click', function () {
    var e = $('.quantitySix').val()
    $('.services__price_foure').text(0.25 * e)
  }),
  $('.price-input').on('click', function () {
    $('.active-numb').toggleClass('active-numb'),
      $(this).removeClass('active-numb')
  }),
  $('.tariffs-block1').on('click', function () {
    $('.services__price_inner').text(100),
      $('.services__price_two').html('-165'),
      $('.services__price_three').html('50')
  }),
  $('.tariffs-block2').on('click', function () {
    $('.services__price_inner').text(1e3),
      $('.services__price_two').html('-180'),
      $('.services__price_three').html('200')
  }),
  $('.tariffs-block3').on('click', function () {
    $('.services__price_inner').text(1350),
      $('.services__price_two').html('-200'),
      $('.services__price_three').html('550')
  }),
  $('.tariffs-block4').on('click', function () {
    $('.services__price_inner').text(1800),
      $('.services__price_two').html('-250.0'),
      $('.services__price_three').html('400')
  }),
  $('.tariffs-block5').on('click', function () {
    $('.services__price_inner').text(2200),
      $('.services__price_two').html('-300.0'),
      $('.services__price_three').html('600')
  }),
  (function (e, t) {
    'object' == typeof exports && 'undefined' != typeof module
      ? t(exports, require('jquery'))
      : 'function' == typeof define && define.amd
      ? define(['exports', 'jquery'], t)
      : t((e.bootstrap = {}), e.jQuery)
  })(this, function (e, t) {
    'use strict'
    function n (e, t) {
      for (var n = 0; n < t.length; n++) {
        var i = t[n]
        ;(i.enumerable = i.enumerable || !1),
          (i.configurable = !0),
          'value' in i && (i.writable = !0),
          Object.defineProperty(e, i.key, i)
      }
    }
    function i (e, t, i) {
      return t && n(e.prototype, t), i && n(e, i), e
    }
    function o (e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
          i = Object.keys(n)
        'function' == typeof Object.getOwnPropertySymbols &&
          (i = i.concat(
            Object.getOwnPropertySymbols(n).filter(function (e) {
              return Object.getOwnPropertyDescriptor(n, e).enumerable
            })
          )),
          i.forEach(function (t) {
            var i, o, r
            ;(i = e),
              (r = n[(o = t)]),
              o in i
                ? Object.defineProperty(i, o, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                  })
                : (i[o] = r)
          })
      }
      return e
    }
    for (
      var r,
        a,
        s,
        l,
        c,
        u,
        d,
        p,
        f,
        h,
        g,
        m,
        _,
        v,
        y,
        b,
        w,
        k,
        T,
        x,
        C,
        S,
        E,
        A,
        j,
        D,
        $,
        N,
        O,
        I,
        P,
        L,
        q,
        H,
        M,
        R,
        z,
        F,
        W,
        B,
        U,
        K,
        Q,
        Y,
        V,
        X,
        G,
        J = (function (e) {
          var t = 'transitionend'
          var n = {
            TRANSITION_END: 'bsTransitionEnd',
            getUID: function (e) {
              for (
                ;
                (e += ~~(1e6 * Math.random())), document.getElementById(e);

              );
              return e
            },
            getSelectorFromElement: function (e) {
              var t = e.getAttribute('data-target')
              ;(t && '#' !== t) || (t = e.getAttribute('href') || '')
              try {
                return document.querySelector(t) ? t : null
              } catch (e) {
                return null
              }
            },
            getTransitionDurationFromElement: function (t) {
              if (!t) return 0
              var n = e(t).css('transition-duration')
              return parseFloat(n)
                ? ((n = n.split(',')[0]), 1e3 * parseFloat(n))
                : 0
            },
            reflow: function (e) {
              return e.offsetHeight
            },
            triggerTransitionEnd: function (n) {
              e(n).trigger(t)
            },
            supportsTransitionEnd: function () {
              return Boolean(t)
            },
            isElement: function (e) {
              return (e[0] || e).nodeType
            },
            typeCheckConfig: function (e, t, i) {
              for (var o in i)
                if (Object.prototype.hasOwnProperty.call(i, o)) {
                  var r = i[o],
                    a = t[o],
                    s =
                      a && n.isElement(a)
                        ? 'element'
                        : ((l = a),
                          {}.toString
                            .call(l)
                            .match(/\s([a-z]+)/i)[1]
                            .toLowerCase())
                  if (!new RegExp(r).test(s))
                    throw new Error(
                      e.toUpperCase() +
                        ': Option "' +
                        o +
                        '" provided type "' +
                        s +
                        '" but expected type "' +
                        r +
                        '".'
                    )
                }
              var l
            }
          }
          return (
            (e.fn.emulateTransitionEnd = function (t) {
              var i = this,
                o = !1
              return (
                e(this).one(n.TRANSITION_END, function () {
                  o = !0
                }),
                setTimeout(function () {
                  o || n.triggerTransitionEnd(i)
                }, t),
                this
              )
            }),
            (e.event.special[n.TRANSITION_END] = {
              bindType: t,
              delegateType: t,
              handle: function (t) {
                if (e(t.target).is(this))
                  return t.handleObj.handler.apply(this, arguments)
              }
            }),
            n
          )
        })((t = t && t.hasOwnProperty('default') ? t.default : t)),
        Z =
          ((a = 'alert'),
          (l = '.' + (s = 'bs.alert')),
          (c = (r = t).fn[a]),
          (u = {
            CLOSE: 'close' + l,
            CLOSED: 'closed' + l,
            CLICK_DATA_API: 'click' + l + '.data-api'
          }),
          'alert',
          'fade',
          'show',
          (d = (function () {
            function e (e) {
              this._element = e
            }
            var t = e.prototype
            return (
              (t.close = function (e) {
                var t = this._element
                e && (t = this._getRootElement(e)),
                  this._triggerCloseEvent(t).isDefaultPrevented() ||
                    this._removeElement(t)
              }),
              (t.dispose = function () {
                r.removeData(this._element, s), (this._element = null)
              }),
              (t._getRootElement = function (e) {
                var t = J.getSelectorFromElement(e),
                  n = !1
                return (
                  t && (n = document.querySelector(t)),
                  n || (n = r(e).closest('.alert')[0]),
                  n
                )
              }),
              (t._triggerCloseEvent = function (e) {
                var t = r.Event(u.CLOSE)
                return r(e).trigger(t), t
              }),
              (t._removeElement = function (e) {
                var t = this
                if ((r(e).removeClass('show'), r(e).hasClass('fade'))) {
                  var n = J.getTransitionDurationFromElement(e)
                  r(e)
                    .one(J.TRANSITION_END, function (n) {
                      return t._destroyElement(e, n)
                    })
                    .emulateTransitionEnd(n)
                } else this._destroyElement(e)
              }),
              (t._destroyElement = function (e) {
                r(e)
                  .detach()
                  .trigger(u.CLOSED)
                  .remove()
              }),
              (e._jQueryInterface = function (t) {
                return this.each(function () {
                  var n = r(this),
                    i = n.data(s)
                  i || ((i = new e(this)), n.data(s, i)),
                    'close' === t && i[t](this)
                })
              }),
              (e._handleDismiss = function (e) {
                return function (t) {
                  t && t.preventDefault(), e.close(this)
                }
              }),
              i(e, null, [
                {
                  key: 'VERSION',
                  get: function () {
                    return '4.1.3'
                  }
                }
              ]),
              e
            )
          })()),
          r(document).on(
            u.CLICK_DATA_API,
            '[data-dismiss="alert"]',
            d._handleDismiss(new d())
          ),
          (r.fn[a] = d._jQueryInterface),
          (r.fn[a].Constructor = d),
          (r.fn[a].noConflict = function () {
            return (r.fn[a] = c), d._jQueryInterface
          }),
          d),
        ee =
          ((f = 'button'),
          (g = '.' + (h = 'bs.button')),
          (m = '.data-api'),
          (_ = (p = t).fn[f]),
          (v = 'active'),
          'btn',
          (y = '[data-toggle^="button"]'),
          '[data-toggle="buttons"]',
          'input',
          '.active',
          (b = '.btn'),
          (w = {
            CLICK_DATA_API: 'click' + g + m,
            FOCUS_BLUR_DATA_API: 'focus' + g + m + ' blur' + g + m
          }),
          (k = (function () {
            function e (e) {
              this._element = e
            }
            var t = e.prototype
            return (
              (t.toggle = function () {
                var e = !0,
                  t = !0,
                  n = p(this._element).closest('[data-toggle="buttons"]')[0]
                if (n) {
                  var i = this._element.querySelector('input')
                  if (i) {
                    if ('radio' === i.type)
                      if (i.checked && this._element.classList.contains(v))
                        e = !1
                      else {
                        var o = n.querySelector('.active')
                        o && p(o).removeClass(v)
                      }
                    if (e) {
                      if (
                        i.hasAttribute('disabled') ||
                        n.hasAttribute('disabled') ||
                        i.classList.contains('disabled') ||
                        n.classList.contains('disabled')
                      )
                        return
                      ;(i.checked = !this._element.classList.contains(v)),
                        p(i).trigger('change')
                    }
                    i.focus(), (t = !1)
                  }
                }
                t &&
                  this._element.setAttribute(
                    'aria-pressed',
                    !this._element.classList.contains(v)
                  ),
                  e && p(this._element).toggleClass(v)
              }),
              (t.dispose = function () {
                p.removeData(this._element, h), (this._element = null)
              }),
              (e._jQueryInterface = function (t) {
                return this.each(function () {
                  var n = p(this).data(h)
                  n || ((n = new e(this)), p(this).data(h, n)),
                    'toggle' === t && n[t]()
                })
              }),
              i(e, null, [
                {
                  key: 'VERSION',
                  get: function () {
                    return '4.1.3'
                  }
                }
              ]),
              e
            )
          })()),
          p(document)
            .on(w.CLICK_DATA_API, y, function (e) {
              e.preventDefault()
              var t = e.target
              p(t).hasClass('btn') || (t = p(t).closest(b)),
                k._jQueryInterface.call(p(t), 'toggle')
            })
            .on(w.FOCUS_BLUR_DATA_API, y, function (e) {
              var t = p(e.target).closest(b)[0]
              p(t).toggleClass('focus', /^focus(in)?$/.test(e.type))
            }),
          (p.fn[f] = k._jQueryInterface),
          (p.fn[f].Constructor = k),
          (p.fn[f].noConflict = function () {
            return (p.fn[f] = _), k._jQueryInterface
          }),
          k),
        te =
          ((x = 'carousel'),
          (S = '.' + (C = 'bs.carousel')),
          (E = '.data-api'),
          (A = (T = t).fn[x]),
          (j = {
            interval: 5e3,
            keyboard: !0,
            slide: !1,
            pause: 'hover',
            wrap: !0
          }),
          (D = {
            interval: '(number|boolean)',
            keyboard: 'boolean',
            slide: '(boolean|string)',
            pause: '(string|boolean)',
            wrap: 'boolean'
          }),
          ($ = 'next'),
          (N = 'prev'),
          'left',
          'right',
          (O = {
            SLIDE: 'slide' + S,
            SLID: 'slid' + S,
            KEYDOWN: 'keydown' + S,
            MOUSEENTER: 'mouseenter' + S,
            MOUSELEAVE: 'mouseleave' + S,
            TOUCHEND: 'touchend' + S,
            LOAD_DATA_API: 'load' + S + E,
            CLICK_DATA_API: 'click' + S + E
          }),
          'carousel',
          (I = 'active'),
          'slide',
          'carousel-item-right',
          'carousel-item-left',
          'carousel-item-next',
          'carousel-item-prev',
          '.active',
          (P = '.active.carousel-item'),
          '.carousel-item',
          '.carousel-item-next, .carousel-item-prev',
          '.carousel-indicators',
          '[data-slide], [data-slide-to]',
          '[data-ride="carousel"]',
          (L = (function () {
            function e (e, t) {
              ;(this._items = null),
                (this._interval = null),
                (this._activeElement = null),
                (this._isPaused = !1),
                (this._isSliding = !1),
                (this.touchTimeout = null),
                (this._config = this._getConfig(t)),
                (this._element = T(e)[0]),
                (this._indicatorsElement = this._element.querySelector(
                  '.carousel-indicators'
                )),
                this._addEventListeners()
            }
            var t = e.prototype
            return (
              (t.next = function () {
                this._isSliding || this._slide($)
              }),
              (t.nextWhenVisible = function () {
                !document.hidden &&
                  T(this._element).is(':visible') &&
                  'hidden' !== T(this._element).css('visibility') &&
                  this.next()
              }),
              (t.prev = function () {
                this._isSliding || this._slide(N)
              }),
              (t.pause = function (e) {
                e || (this._isPaused = !0),
                  this._element.querySelector(
                    '.carousel-item-next, .carousel-item-prev'
                  ) && (J.triggerTransitionEnd(this._element), this.cycle(!0)),
                  clearInterval(this._interval),
                  (this._interval = null)
              }),
              (t.cycle = function (e) {
                e || (this._isPaused = !1),
                  this._interval &&
                    (clearInterval(this._interval), (this._interval = null)),
                  this._config.interval &&
                    !this._isPaused &&
                    (this._interval = setInterval(
                      (document.visibilityState
                        ? this.nextWhenVisible
                        : this.next
                      ).bind(this),
                      this._config.interval
                    ))
              }),
              (t.to = function (e) {
                var t = this
                this._activeElement = this._element.querySelector(P)
                var n = this._getItemIndex(this._activeElement)
                if (!(e > this._items.length - 1 || e < 0))
                  if (this._isSliding)
                    T(this._element).one(O.SLID, function () {
                      return t.to(e)
                    })
                  else {
                    if (n === e) return this.pause(), void this.cycle()
                    var i = n < e ? $ : N
                    this._slide(i, this._items[e])
                  }
              }),
              (t.dispose = function () {
                T(this._element).off(S),
                  T.removeData(this._element, C),
                  (this._items = null),
                  (this._config = null),
                  (this._element = null),
                  (this._interval = null),
                  (this._isPaused = null),
                  (this._isSliding = null),
                  (this._activeElement = null),
                  (this._indicatorsElement = null)
              }),
              (t._getConfig = function (e) {
                return (e = o({}, j, e)), J.typeCheckConfig(x, e, D), e
              }),
              (t._addEventListeners = function () {
                var e = this
                this._config.keyboard &&
                  T(this._element).on(O.KEYDOWN, function (t) {
                    return e._keydown(t)
                  }),
                  'hover' === this._config.pause &&
                    (T(this._element)
                      .on(O.MOUSEENTER, function (t) {
                        return e.pause(t)
                      })
                      .on(O.MOUSELEAVE, function (t) {
                        return e.cycle(t)
                      }),
                    ('ontouchstart' in document.documentElement) &&
                      T(this._element).on(O.TOUCHEND, function () {
                        e.pause(),
                          e.touchTimeout && clearTimeout(e.touchTimeout),
                          (e.touchTimeout = setTimeout(function (t) {
                            return e.cycle(t)
                          }, 500 + e._config.interval))
                      }))
              }),
              (t._keydown = function (e) {
                if (!/input|textarea/i.test(e.target.tagName))
                  switch (e.which) {
                    case 37:
                      e.preventDefault(), this.prev()
                      break
                    case 39:
                      e.preventDefault(), this.next()
                  }
              }),
              (t._getItemIndex = function (e) {
                return (
                  (this._items =
                    e && e.parentNode
                      ? [].slice.call(
                          e.parentNode.querySelectorAll('.carousel-item')
                        )
                      : []),
                  this._items.indexOf(e)
                )
              }),
              (t._getItemByDirection = function (e, t) {
                var n = e === $,
                  i = e === N,
                  o = this._getItemIndex(t),
                  r = this._items.length - 1
                if (((i && 0 === o) || (n && o === r)) && !this._config.wrap)
                  return t
                var a = (o + (e === N ? -1 : 1)) % this._items.length
                return -1 === a
                  ? this._items[this._items.length - 1]
                  : this._items[a]
              }),
              (t._triggerSlideEvent = function (e, t) {
                var n = this._getItemIndex(e),
                  i = this._getItemIndex(this._element.querySelector(P)),
                  o = T.Event(O.SLIDE, {
                    relatedTarget: e,
                    direction: t,
                    from: i,
                    to: n
                  })
                return T(this._element).trigger(o), o
              }),
              (t._setActiveIndicatorElement = function (e) {
                if (this._indicatorsElement) {
                  var t = [].slice.call(
                    this._indicatorsElement.querySelectorAll('.active')
                  )
                  T(t).removeClass(I)
                  var n = this._indicatorsElement.children[
                    this._getItemIndex(e)
                  ]
                  n && T(n).addClass(I)
                }
              }),
              (t._slide = function (e, t) {
                var n,
                  i,
                  o,
                  r = this,
                  a = this._element.querySelector(P),
                  s = this._getItemIndex(a),
                  l = t || (a && this._getItemByDirection(e, a)),
                  c = this._getItemIndex(l),
                  u = Boolean(this._interval)
                if (
                  (e === $
                    ? ((n = 'carousel-item-left'),
                      (i = 'carousel-item-next'),
                      (o = 'left'))
                    : ((n = 'carousel-item-right'),
                      (i = 'carousel-item-prev'),
                      (o = 'right')),
                  l && T(l).hasClass(I))
                )
                  this._isSliding = !1
                else if (
                  !this._triggerSlideEvent(l, o).isDefaultPrevented() &&
                  a &&
                  l
                ) {
                  ;(this._isSliding = !0),
                    u && this.pause(),
                    this._setActiveIndicatorElement(l)
                  var d = T.Event(O.SLID, {
                    relatedTarget: l,
                    direction: o,
                    from: s,
                    to: c
                  })
                  if (T(this._element).hasClass('slide')) {
                    T(l).addClass(i),
                      J.reflow(l),
                      T(a).addClass(n),
                      T(l).addClass(n)
                    var p = J.getTransitionDurationFromElement(a)
                    T(a)
                      .one(J.TRANSITION_END, function () {
                        T(l)
                          .removeClass(n + ' ' + i)
                          .addClass(I),
                          T(a).removeClass(I + ' ' + i + ' ' + n),
                          (r._isSliding = !1),
                          setTimeout(function () {
                            return T(r._element).trigger(d)
                          }, 0)
                      })
                      .emulateTransitionEnd(p)
                  } else
                    T(a).removeClass(I),
                      T(l).addClass(I),
                      (this._isSliding = !1),
                      T(this._element).trigger(d)
                  u && this.cycle()
                }
              }),
              (e._jQueryInterface = function (t) {
                return this.each(function () {
                  var n = T(this).data(C),
                    i = o({}, j, T(this).data())
                  'object' == typeof t && (i = o({}, i, t))
                  var r = 'string' == typeof t ? t : i.slide
                  if (
                    (n || ((n = new e(this, i)), T(this).data(C, n)),
                    'number' == typeof t)
                  )
                    n.to(t)
                  else if ('string' == typeof r) {
                    if (void 0 === n[r])
                      throw new TypeError('No method named "' + r + '"')
                    n[r]()
                  } else i.interval && (n.pause(), n.cycle())
                })
              }),
              (e._dataApiClickHandler = function (t) {
                var n = J.getSelectorFromElement(this)
                if (n) {
                  var i = T(n)[0]
                  if (i && T(i).hasClass('carousel')) {
                    var r = o({}, T(i).data(), T(this).data()),
                      a = this.getAttribute('data-slide-to')
                    a && (r.interval = !1),
                      e._jQueryInterface.call(T(i), r),
                      a &&
                        T(i)
                          .data(C)
                          .to(a),
                      t.preventDefault()
                  }
                }
              }),
              i(e, null, [
                {
                  key: 'VERSION',
                  get: function () {
                    return '4.1.3'
                  }
                },
                {
                  key: 'Default',
                  get: function () {
                    return j
                  }
                }
              ]),
              e
            )
          })()),
          T(document).on(
            O.CLICK_DATA_API,
            '[data-slide], [data-slide-to]',
            L._dataApiClickHandler
          ),
          T(window).on(O.LOAD_DATA_API, function () {
            for (
              var e = [].slice.call(
                  document.querySelectorAll('[data-ride="carousel"]')
                ),
                t = 0,
                n = e.length;
              t < n;
              t++
            ) {
              var i = T(e[t])
              L._jQueryInterface.call(i, i.data())
            }
          }),
          (T.fn[x] = L._jQueryInterface),
          (T.fn[x].Constructor = L),
          (T.fn[x].noConflict = function () {
            return (T.fn[x] = A), L._jQueryInterface
          }),
          L),
        ne =
          ((H = 'collapse'),
          (R = '.' + (M = 'bs.collapse')),
          (z = (q = t).fn[H]),
          (F = { toggle: !0, parent: '' }),
          (W = { toggle: 'boolean', parent: '(string|element)' }),
          (B = {
            SHOW: 'show' + R,
            SHOWN: 'shown' + R,
            HIDE: 'hide' + R,
            HIDDEN: 'hidden' + R,
            CLICK_DATA_API: 'click' + R + '.data-api'
          }),
          (U = 'show'),
          (K = 'collapse'),
          (Q = 'collapsing'),
          (Y = 'collapsed'),
          (V = 'width'),
          'height',
          '.show, .collapsing',
          (X = '[data-toggle="collapse"]'),
          (G = (function () {
            function e (e, t) {
              ;(this._isTransitioning = !1),
                (this._element = e),
                (this._config = this._getConfig(t)),
                (this._triggerArray = q.makeArray(
                  document.querySelectorAll(
                    '[data-toggle="collapse"][href="#' +
                      e.id +
                      '"],[data-toggle="collapse"][data-target="#' +
                      e.id +
                      '"]'
                  )
                ))
              for (
                var n = [].slice.call(document.querySelectorAll(X)),
                  i = 0,
                  o = n.length;
                i < o;
                i++
              ) {
                var r = n[i],
                  a = J.getSelectorFromElement(r),
                  s = [].slice
                    .call(document.querySelectorAll(a))
                    .filter(function (t) {
                      return t === e
                    })
                null !== a &&
                  0 < s.length &&
                  ((this._selector = a), this._triggerArray.push(r))
              }
              ;(this._parent = this._config.parent ? this._getParent() : null),
                this._config.parent ||
                  this._addAriaAndCollapsedClass(
                    this._element,
                    this._triggerArray
                  ),
                this._config.toggle && this.toggle()
            }
            var t = e.prototype
            return (
              (t.toggle = function () {
                q(this._element).hasClass(U) ? this.hide() : this.show()
              }),
              (t.show = function () {
                var t,
                  n,
                  i = this
                if (
                  !(
                    this._isTransitioning ||
                    q(this._element).hasClass(U) ||
                    (this._parent &&
                      0 ===
                        (t = [].slice
                          .call(
                            this._parent.querySelectorAll('.show, .collapsing')
                          )
                          .filter(function (e) {
                            return (
                              e.getAttribute('data-parent') === i._config.parent
                            )
                          })).length &&
                      (t = null),
                    t &&
                      (n = q(t)
                        .not(this._selector)
                        .data(M)) &&
                      n._isTransitioning)
                  )
                ) {
                  var o = q.Event(B.SHOW)
                  if ((q(this._element).trigger(o), !o.isDefaultPrevented())) {
                    t &&
                      (e._jQueryInterface.call(
                        q(t).not(this._selector),
                        'hide'
                      ),
                      n || q(t).data(M, null))
                    var r = this._getDimension()
                    q(this._element)
                      .removeClass(K)
                      .addClass(Q),
                      (this._element.style[r] = 0),
                      this._triggerArray.length &&
                        q(this._triggerArray)
                          .removeClass(Y)
                          .attr('aria-expanded', !0),
                      this.setTransitioning(!0)
                    var a = 'scroll' + (r[0].toUpperCase() + r.slice(1)),
                      s = J.getTransitionDurationFromElement(this._element)
                    q(this._element)
                      .one(J.TRANSITION_END, function () {
                        q(i._element)
                          .removeClass(Q)
                          .addClass(K)
                          .addClass(U),
                          (i._element.style[r] = ''),
                          i.setTransitioning(!1),
                          q(i._element).trigger(B.SHOWN)
                      })
                      .emulateTransitionEnd(s),
                      (this._element.style[r] = this._element[a] + 'px')
                  }
                }
              }),
              (t.hide = function () {
                var e = this
                if (!this._isTransitioning && q(this._element).hasClass(U)) {
                  var t = q.Event(B.HIDE)
                  if ((q(this._element).trigger(t), !t.isDefaultPrevented())) {
                    var n = this._getDimension()
                    ;(this._element.style[n] =
                      this._element.getBoundingClientRect()[n] + 'px'),
                      J.reflow(this._element),
                      q(this._element)
                        .addClass(Q)
                        .removeClass(K)
                        .removeClass(U)
                    var i = this._triggerArray.length
                    if (0 < i)
                      for (var o = 0; o < i; o++) {
                        var r = this._triggerArray[o],
                          a = J.getSelectorFromElement(r)
                        null !== a &&
                          (q(
                            [].slice.call(document.querySelectorAll(a))
                          ).hasClass(U) ||
                            q(r)
                              .addClass(Y)
                              .attr('aria-expanded', !1))
                      }
                    this.setTransitioning(!0), (this._element.style[n] = '')
                    var s = J.getTransitionDurationFromElement(this._element)
                    q(this._element)
                      .one(J.TRANSITION_END, function () {
                        e.setTransitioning(!1),
                          q(e._element)
                            .removeClass(Q)
                            .addClass(K)
                            .trigger(B.HIDDEN)
                      })
                      .emulateTransitionEnd(s)
                  }
                }
              }),
              (t.setTransitioning = function (e) {
                this._isTransitioning = e
              }),
              (t.dispose = function () {
                q.removeData(this._element, M),
                  (this._config = null),
                  (this._parent = null),
                  (this._element = null),
                  (this._triggerArray = null),
                  (this._isTransitioning = null)
              }),
              (t._getConfig = function (e) {
                return (
                  ((e = o({}, F, e)).toggle = Boolean(e.toggle)),
                  J.typeCheckConfig(H, e, W),
                  e
                )
              }),
              (t._getDimension = function () {
                return q(this._element).hasClass(V) ? V : 'height'
              }),
              (t._getParent = function () {
                var t = this,
                  n = null
                J.isElement(this._config.parent)
                  ? ((n = this._config.parent),
                    void 0 !== this._config.parent.jquery &&
                      (n = this._config.parent[0]))
                  : (n = document.querySelector(this._config.parent))
                var i =
                    '[data-toggle="collapse"][data-parent="' +
                    this._config.parent +
                    '"]',
                  o = [].slice.call(n.querySelectorAll(i))
                return (
                  q(o).each(function (n, i) {
                    t._addAriaAndCollapsedClass(e._getTargetFromElement(i), [i])
                  }),
                  n
                )
              }),
              (t._addAriaAndCollapsedClass = function (e, t) {
                if (e) {
                  var n = q(e).hasClass(U)
                  t.length &&
                    q(t)
                      .toggleClass(Y, !n)
                      .attr('aria-expanded', n)
                }
              }),
              (e._getTargetFromElement = function (e) {
                var t = J.getSelectorFromElement(e)
                return t ? document.querySelector(t) : null
              }),
              (e._jQueryInterface = function (t) {
                return this.each(function () {
                  var n = q(this),
                    i = n.data(M),
                    r = o({}, F, n.data(), 'object' == typeof t && t ? t : {})
                  if (
                    (!i && r.toggle && /show|hide/.test(t) && (r.toggle = !1),
                    i || ((i = new e(this, r)), n.data(M, i)),
                    'string' == typeof t)
                  ) {
                    if (void 0 === i[t])
                      throw new TypeError('No method named "' + t + '"')
                    i[t]()
                  }
                })
              }),
              i(e, null, [
                {
                  key: 'VERSION',
                  get: function () {
                    return '4.1.3'
                  }
                },
                {
                  key: 'Default',
                  get: function () {
                    return F
                  }
                }
              ]),
              e
            )
          })()),
          q(document).on(B.CLICK_DATA_API, X, function (e) {
            'A' === e.currentTarget.tagName && e.preventDefault()
            var t = q(this),
              n = J.getSelectorFromElement(this),
              i = [].slice.call(document.querySelectorAll(n))
            q(i).each(function () {
              var e = q(this),
                n = e.data(M) ? 'toggle' : t.data()
              G._jQueryInterface.call(e, n)
            })
          }),
          (q.fn[H] = G._jQueryInterface),
          (q.fn[H].Constructor = G),
          (q.fn[H].noConflict = function () {
            return (q.fn[H] = z), G._jQueryInterface
          }),
          G),
        ie = 'undefined' != typeof window && 'undefined' != typeof document,
        oe = ['Edge', 'Trident', 'Firefox'],
        re = 0,
        ae = 0;
      ae < oe.length;
      ae += 1
    )
      if (ie && 0 <= navigator.userAgent.indexOf(oe[ae])) {
        re = 1
        break
      }
    var se =
      ie && window.Promise
        ? function (e) {
            var t = !1
            return function () {
              t ||
                ((t = !0),
                window.Promise.resolve().then(function () {
                  ;(t = !1), e()
                }))
            }
          }
        : function (e) {
            var t = !1
            return function () {
              t ||
                ((t = !0),
                setTimeout(function () {
                  ;(t = !1), e()
                }, re))
            }
          }
    function le (e) {
      return e && '[object Function]' === {}.toString.call(e)
    }
    function ce (e, t) {
      if (1 !== e.nodeType) return []
      var n = getComputedStyle(e, null)
      return t ? n[t] : n
    }
    function ue (e) {
      return 'HTML' === e.nodeName ? e : e.parentNode || e.host
    }
    function de (e) {
      if (!e) return document.body
      switch (e.nodeName) {
        case 'HTML':
        case 'BODY':
          return e.ownerDocument.body
        case '#document':
          return e.body
      }
      var t = ce(e),
        n = t.overflow,
        i = t.overflowX,
        o = t.overflowY
      return /(auto|scroll|overlay)/.test(n + o + i) ? e : de(ue(e))
    }
    var pe = ie && !(!window.MSInputMethodContext || !document.documentMode),
      fe = ie && /MSIE 10/.test(navigator.userAgent)
    function he (e) {
      return 11 === e ? pe : 10 === e ? fe : pe || fe
    }
    function ge (e) {
      if (!e) return document.documentElement
      for (
        var t = he(10) ? document.body : null, n = e.offsetParent;
        n === t && e.nextElementSibling;

      )
        n = (e = e.nextElementSibling).offsetParent
      var i = n && n.nodeName
      return i && 'BODY' !== i && 'HTML' !== i
        ? -1 !== ['TD', 'TABLE'].indexOf(n.nodeName) &&
          'static' === ce(n, 'position')
          ? ge(n)
          : n
        : e
        ? e.ownerDocument.documentElement
        : document.documentElement
    }
    function me (e) {
      return null !== e.parentNode ? me(e.parentNode) : e
    }
    function _e (e, t) {
      if (!(e && e.nodeType && t && t.nodeType)) return document.documentElement
      var n = e.compareDocumentPosition(t) & Node.DOCUMENT_POSITION_FOLLOWING,
        i = n ? e : t,
        o = n ? t : e,
        r = document.createRange()
      r.setStart(i, 0), r.setEnd(o, 0)
      var a,
        s,
        l = r.commonAncestorContainer
      if ((e !== l && t !== l) || i.contains(o))
        return 'BODY' === (s = (a = l).nodeName) ||
          ('HTML' !== s && ge(a.firstElementChild) !== a)
          ? ge(l)
          : l
      var c = me(e)
      return c.host ? _e(c.host, t) : _e(e, me(t).host)
    }
    function ve (e) {
      var t =
          'top' ===
          (1 < arguments.length && void 0 !== arguments[1]
            ? arguments[1]
            : 'top')
            ? 'scrollTop'
            : 'scrollLeft',
        n = e.nodeName
      if ('BODY' === n || 'HTML' === n) {
        var i = e.ownerDocument.documentElement
        return (e.ownerDocument.scrollingElement || i)[t]
      }
      return e[t]
    }
    function ye (e, t) {
      var n = 'x' === t ? 'Left' : 'Top',
        i = 'Left' === n ? 'Right' : 'Bottom'
      return (
        parseFloat(e['border' + n + 'Width'], 10) +
        parseFloat(e['border' + i + 'Width'], 10)
      )
    }
    function be (e, t, n, i) {
      return Math.max(
        t['offset' + e],
        t['scroll' + e],
        n['client' + e],
        n['offset' + e],
        n['scroll' + e],
        he(10)
          ? n['offset' + e] +
              i['margin' + ('Height' === e ? 'Top' : 'Left')] +
              i['margin' + ('Height' === e ? 'Bottom' : 'Right')]
          : 0
      )
    }
    function we () {
      var e = document.body,
        t = document.documentElement,
        n = he(10) && getComputedStyle(t)
      return { height: be('Height', e, t, n), width: be('Width', e, t, n) }
    }
    var ke = (function () {
        function e (e, t) {
          for (var n = 0; n < t.length; n++) {
            var i = t[n]
            ;(i.enumerable = i.enumerable || !1),
              (i.configurable = !0),
              'value' in i && (i.writable = !0),
              Object.defineProperty(e, i.key, i)
          }
        }
        return function (t, n, i) {
          return n && e(t.prototype, n), i && e(t, i), t
        }
      })(),
      Te = function (e, t, n) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
              })
            : (e[t] = n),
          e
        )
      },
      xe =
        Object.assign ||
        function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t]
            for (var i in n)
              Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i])
          }
          return e
        }
    function Ce (e) {
      return xe({}, e, { right: e.left + e.width, bottom: e.top + e.height })
    }
    function Se (e) {
      var t = {}
      try {
        if (he(10)) {
          t = e.getBoundingClientRect()
          var n = ve(e, 'top'),
            i = ve(e, 'left')
          ;(t.top += n), (t.left += i), (t.bottom += n), (t.right += i)
        } else t = e.getBoundingClientRect()
      } catch (e) {}
      var o = {
          left: t.left,
          top: t.top,
          width: t.right - t.left,
          height: t.bottom - t.top
        },
        r = 'HTML' === e.nodeName ? we() : {},
        a = r.width || e.clientWidth || o.right - o.left,
        s = r.height || e.clientHeight || o.bottom - o.top,
        l = e.offsetWidth - a,
        c = e.offsetHeight - s
      if (l || c) {
        var u = ce(e)
        ;(l -= ye(u, 'x')), (c -= ye(u, 'y')), (o.width -= l), (o.height -= c)
      }
      return Ce(o)
    }
    function Ee (e, t) {
      var n = 2 < arguments.length && void 0 !== arguments[2] && arguments[2],
        i = he(10),
        o = 'HTML' === t.nodeName,
        r = Se(e),
        a = Se(t),
        s = de(e),
        l = ce(t),
        c = parseFloat(l.borderTopWidth, 10),
        u = parseFloat(l.borderLeftWidth, 10)
      n &&
        'HTML' === t.nodeName &&
        ((a.top = Math.max(a.top, 0)), (a.left = Math.max(a.left, 0)))
      var d = Ce({
        top: r.top - a.top - c,
        left: r.left - a.left - u,
        width: r.width,
        height: r.height
      })
      if (((d.marginTop = 0), (d.marginLeft = 0), !i && o)) {
        var p = parseFloat(l.marginTop, 10),
          f = parseFloat(l.marginLeft, 10)
        ;(d.top -= c - p),
          (d.bottom -= c - p),
          (d.left -= u - f),
          (d.right -= u - f),
          (d.marginTop = p),
          (d.marginLeft = f)
      }
      return (
        (i && !n ? t.contains(s) : t === s && 'BODY' !== s.nodeName) &&
          (d = (function (e, t) {
            var n =
                2 < arguments.length && void 0 !== arguments[2] && arguments[2],
              i = ve(t, 'top'),
              o = ve(t, 'left'),
              r = n ? -1 : 1
            return (
              (e.top += i * r),
              (e.bottom += i * r),
              (e.left += o * r),
              (e.right += o * r),
              e
            )
          })(d, t)),
        d
      )
    }
    function Ae (e) {
      if (!e || !e.parentElement || he()) return document.documentElement
      for (var t = e.parentElement; t && 'none' === ce(t, 'transform'); )
        t = t.parentElement
      return t || document.documentElement
    }
    function je (e, t, n, i) {
      var o = 4 < arguments.length && void 0 !== arguments[4] && arguments[4],
        r = { top: 0, left: 0 },
        a = o ? Ae(e) : _e(e, t)
      if ('viewport' === i)
        r = (function (e) {
          var t =
              1 < arguments.length && void 0 !== arguments[1] && arguments[1],
            n = e.ownerDocument.documentElement,
            i = Ee(e, n),
            o = Math.max(n.clientWidth, window.innerWidth || 0),
            r = Math.max(n.clientHeight, window.innerHeight || 0),
            a = t ? 0 : ve(n),
            s = t ? 0 : ve(n, 'left')
          return Ce({
            top: a - i.top + i.marginTop,
            left: s - i.left + i.marginLeft,
            width: o,
            height: r
          })
        })(a, o)
      else {
        var s = void 0
        'scrollParent' === i
          ? 'BODY' === (s = de(ue(t))).nodeName &&
            (s = e.ownerDocument.documentElement)
          : (s = 'window' === i ? e.ownerDocument.documentElement : i)
        var l = Ee(s, a, o)
        if (
          'HTML' !== s.nodeName ||
          (function e (t) {
            var n = t.nodeName
            return (
              'BODY' !== n &&
              'HTML' !== n &&
              ('fixed' === ce(t, 'position') || e(ue(t)))
            )
          })(a)
        )
          r = l
        else {
          var c = we(),
            u = c.height,
            d = c.width
          ;(r.top += l.top - l.marginTop),
            (r.bottom = u + l.top),
            (r.left += l.left - l.marginLeft),
            (r.right = d + l.left)
        }
      }
      return (r.left += n), (r.top += n), (r.right -= n), (r.bottom -= n), r
    }
    function De (e, t, n, i, o) {
      var r = 5 < arguments.length && void 0 !== arguments[5] ? arguments[5] : 0
      if (-1 === e.indexOf('auto')) return e
      var a = je(n, i, r, o),
        s = {
          top: { width: a.width, height: t.top - a.top },
          right: { width: a.right - t.right, height: a.height },
          bottom: { width: a.width, height: a.bottom - t.bottom },
          left: { width: t.left - a.left, height: a.height }
        },
        l = Object.keys(s)
          .map(function (e) {
            return xe({ key: e }, s[e], {
              area: ((t = s[e]), t.width * t.height)
            })
            var t
          })
          .sort(function (e, t) {
            return t.area - e.area
          }),
        c = l.filter(function (e) {
          var t = e.width,
            i = e.height
          return t >= n.clientWidth && i >= n.clientHeight
        }),
        u = 0 < c.length ? c[0].key : l[0].key,
        d = e.split('-')[1]
      return u + (d ? '-' + d : '')
    }
    function $e (e, t, n) {
      var i =
        3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : null
      return Ee(n, i ? Ae(t) : _e(t, n), i)
    }
    function Ne (e) {
      var t = getComputedStyle(e),
        n = parseFloat(t.marginTop) + parseFloat(t.marginBottom),
        i = parseFloat(t.marginLeft) + parseFloat(t.marginRight)
      return { width: e.offsetWidth + i, height: e.offsetHeight + n }
    }
    function Oe (e) {
      var t = { left: 'right', right: 'left', bottom: 'top', top: 'bottom' }
      return e.replace(/left|right|bottom|top/g, function (e) {
        return t[e]
      })
    }
    function Ie (e, t, n) {
      n = n.split('-')[0]
      var i = Ne(e),
        o = { width: i.width, height: i.height },
        r = -1 !== ['right', 'left'].indexOf(n),
        a = r ? 'top' : 'left',
        s = r ? 'left' : 'top',
        l = r ? 'height' : 'width',
        c = r ? 'width' : 'height'
      return (
        (o[a] = t[a] + t[l] / 2 - i[l] / 2),
        (o[s] = n === s ? t[s] - i[c] : t[Oe(s)]),
        o
      )
    }
    function Pe (e, t) {
      return Array.prototype.find ? e.find(t) : e.filter(t)[0]
    }
    function Le (e, t, n) {
      return (
        (void 0 === n
          ? e
          : e.slice(
              0,
              (function (e, t, n) {
                if (Array.prototype.findIndex)
                  return e.findIndex(function (e) {
                    return e[t] === n
                  })
                var i = Pe(e, function (e) {
                  return e[t] === n
                })
                return e.indexOf(i)
              })(e, 'name', n)
            )
        ).forEach(function (e) {
          e.function &&
            console.warn(
              '`modifier.function` is deprecated, use `modifier.fn`!'
            )
          var n = e.function || e.fn
          e.enabled &&
            le(n) &&
            ((t.offsets.popper = Ce(t.offsets.popper)),
            (t.offsets.reference = Ce(t.offsets.reference)),
            (t = n(t, e)))
        }),
        t
      )
    }
    function qe (e, t) {
      return e.some(function (e) {
        var n = e.name
        return e.enabled && n === t
      })
    }
    function He (e) {
      for (
        var t = [!1, 'ms', 'Webkit', 'Moz', 'O'],
          n = e.charAt(0).toUpperCase() + e.slice(1),
          i = 0;
        i < t.length;
        i++
      ) {
        var o = t[i],
          r = o ? '' + o + n : e
        if (void 0 !== document.body.style[r]) return r
      }
      return null
    }
    function Me (e) {
      var t = e.ownerDocument
      return t ? t.defaultView : window
    }
    function Re () {
      var e, t
      this.state.eventsEnabled &&
        (cancelAnimationFrame(this.scheduleUpdate),
        (this.state =
          ((e = this.reference),
          (t = this.state),
          Me(e).removeEventListener('resize', t.updateBound),
          t.scrollParents.forEach(function (e) {
            e.removeEventListener('scroll', t.updateBound)
          }),
          (t.updateBound = null),
          (t.scrollParents = []),
          (t.scrollElement = null),
          (t.eventsEnabled = !1),
          t)))
    }
    function ze (e) {
      return '' !== e && !isNaN(parseFloat(e)) && isFinite(e)
    }
    function Fe (e, t) {
      Object.keys(t).forEach(function (n) {
        var i = ''
        ;-1 !==
          ['width', 'height', 'top', 'right', 'bottom', 'left'].indexOf(n) &&
          ze(t[n]) &&
          (i = 'px'),
          (e.style[n] = t[n] + i)
      })
    }
    function We (e, t, n) {
      var i = Pe(e, function (e) {
          return e.name === t
        }),
        o =
          !!i &&
          e.some(function (e) {
            return e.name === n && e.enabled && e.order < i.order
          })
      if (!o) {
        var r = '`' + t + '`',
          a = '`' + n + '`'
        console.warn(
          a +
            ' modifier is required by ' +
            r +
            ' modifier in order to work, be sure to include it before ' +
            r +
            '!'
        )
      }
      return o
    }
    var Be = [
        'auto-start',
        'auto',
        'auto-end',
        'top-start',
        'top',
        'top-end',
        'right-start',
        'right',
        'right-end',
        'bottom-end',
        'bottom',
        'bottom-start',
        'left-end',
        'left',
        'left-start'
      ],
      Ue = Be.slice(3)
    function Ke (e) {
      var t = 1 < arguments.length && void 0 !== arguments[1] && arguments[1],
        n = Ue.indexOf(e),
        i = Ue.slice(n + 1).concat(Ue.slice(0, n))
      return t ? i.reverse() : i
    }
    var Qe = {
        placement: 'bottom',
        positionFixed: !1,
        eventsEnabled: !0,
        removeOnDestroy: !1,
        onCreate: function () {},
        onUpdate: function () {},
        modifiers: {
          shift: {
            order: 100,
            enabled: !0,
            fn: function (e) {
              var t = e.placement,
                n = t.split('-')[0],
                i = t.split('-')[1]
              if (i) {
                var o = e.offsets,
                  r = o.reference,
                  a = o.popper,
                  s = -1 !== ['bottom', 'top'].indexOf(n),
                  l = s ? 'left' : 'top',
                  c = s ? 'width' : 'height',
                  u = {
                    start: Te({}, l, r[l]),
                    end: Te({}, l, r[l] + r[c] - a[c])
                  }
                e.offsets.popper = xe({}, a, u[i])
              }
              return e
            }
          },
          offset: {
            order: 200,
            enabled: !0,
            fn: function (e, t) {
              var n,
                i = t.offset,
                o = e.placement,
                r = e.offsets,
                a = r.popper,
                s = r.reference,
                l = o.split('-')[0]
              return (
                (n = ze(+i)
                  ? [+i, 0]
                  : (function (e, t, n, i) {
                      var o = [0, 0],
                        r = -1 !== ['right', 'left'].indexOf(i),
                        a = e.split(/(\+|\-)/).map(function (e) {
                          return e.trim()
                        }),
                        s = a.indexOf(
                          Pe(a, function (e) {
                            return -1 !== e.search(/,|\s/)
                          })
                        )
                      a[s] &&
                        -1 === a[s].indexOf(',') &&
                        console.warn(
                          'Offsets separated by white space(s) are deprecated, use a comma (,) instead.'
                        )
                      var l = /\s*,\s*|\s+/,
                        c =
                          -1 !== s
                            ? [
                                a.slice(0, s).concat([a[s].split(l)[0]]),
                                [a[s].split(l)[1]].concat(a.slice(s + 1))
                              ]
                            : [a]
                      return (
                        (c = c.map(function (e, i) {
                          var o = (1 === i ? !r : r) ? 'height' : 'width',
                            a = !1
                          return e
                            .reduce(function (e, t) {
                              return '' === e[e.length - 1] &&
                                -1 !== ['+', '-'].indexOf(t)
                                ? ((e[e.length - 1] = t), (a = !0), e)
                                : a
                                ? ((e[e.length - 1] += t), (a = !1), e)
                                : e.concat(t)
                            }, [])
                            .map(function (e) {
                              return (function (e, t, n, i) {
                                var o = e.match(/((?:\-|\+)?\d*\.?\d*)(.*)/),
                                  r = +o[1],
                                  a = o[2]
                                if (!r) return e
                                if (0 === a.indexOf('%')) {
                                  return (Ce('%p' === a ? n : i)[t] / 100) * r
                                }
                                return 'vh' === a || 'vw' === a
                                  ? (('vh' === a
                                      ? Math.max(
                                          document.documentElement.clientHeight,
                                          window.innerHeight || 0
                                        )
                                      : Math.max(
                                          document.documentElement.clientWidth,
                                          window.innerWidth || 0
                                        )) /
                                      100) *
                                      r
                                  : r
                              })(e, o, t, n)
                            })
                        })).forEach(function (e, t) {
                          e.forEach(function (n, i) {
                            ze(n) && (o[t] += n * ('-' === e[i - 1] ? -1 : 1))
                          })
                        }),
                        o
                      )
                    })(i, a, s, l)),
                'left' === l
                  ? ((a.top += n[0]), (a.left -= n[1]))
                  : 'right' === l
                  ? ((a.top += n[0]), (a.left += n[1]))
                  : 'top' === l
                  ? ((a.left += n[0]), (a.top -= n[1]))
                  : 'bottom' === l && ((a.left += n[0]), (a.top += n[1])),
                (e.popper = a),
                e
              )
            },
            offset: 0
          },
          preventOverflow: {
            order: 300,
            enabled: !0,
            fn: function (e, t) {
              var n = t.boundariesElement || ge(e.instance.popper)
              e.instance.reference === n && (n = ge(n))
              var i = He('transform'),
                o = e.instance.popper.style,
                r = o.top,
                a = o.left,
                s = o[i]
              ;(o.top = ''), (o.left = ''), (o[i] = '')
              var l = je(
                e.instance.popper,
                e.instance.reference,
                t.padding,
                n,
                e.positionFixed
              )
              ;(o.top = r), (o.left = a), (o[i] = s), (t.boundaries = l)
              var c = t.priority,
                u = e.offsets.popper,
                d = {
                  primary: function (e) {
                    var n = u[e]
                    return (
                      u[e] < l[e] &&
                        !t.escapeWithReference &&
                        (n = Math.max(u[e], l[e])),
                      Te({}, e, n)
                    )
                  },
                  secondary: function (e) {
                    var n = 'right' === e ? 'left' : 'top',
                      i = u[n]
                    return (
                      u[e] > l[e] &&
                        !t.escapeWithReference &&
                        (i = Math.min(
                          u[n],
                          l[e] - ('right' === e ? u.width : u.height)
                        )),
                      Te({}, n, i)
                    )
                  }
                }
              return (
                c.forEach(function (e) {
                  var t =
                    -1 !== ['left', 'top'].indexOf(e) ? 'primary' : 'secondary'
                  u = xe({}, u, d[t](e))
                }),
                (e.offsets.popper = u),
                e
              )
            },
            priority: ['left', 'right', 'top', 'bottom'],
            padding: 5,
            boundariesElement: 'scrollParent'
          },
          keepTogether: {
            order: 400,
            enabled: !0,
            fn: function (e) {
              var t = e.offsets,
                n = t.popper,
                i = t.reference,
                o = e.placement.split('-')[0],
                r = Math.floor,
                a = -1 !== ['top', 'bottom'].indexOf(o),
                s = a ? 'right' : 'bottom',
                l = a ? 'left' : 'top',
                c = a ? 'width' : 'height'
              return (
                n[s] < r(i[l]) && (e.offsets.popper[l] = r(i[l]) - n[c]),
                n[l] > r(i[s]) && (e.offsets.popper[l] = r(i[s])),
                e
              )
            }
          },
          arrow: {
            order: 500,
            enabled: !0,
            fn: function (e, t) {
              var n
              if (!We(e.instance.modifiers, 'arrow', 'keepTogether')) return e
              var i = t.element
              if ('string' == typeof i) {
                if (!(i = e.instance.popper.querySelector(i))) return e
              } else if (!e.instance.popper.contains(i))
                return (
                  console.warn(
                    'WARNING: `arrow.element` must be child of its popper element!'
                  ),
                  e
                )
              var o = e.placement.split('-')[0],
                r = e.offsets,
                a = r.popper,
                s = r.reference,
                l = -1 !== ['left', 'right'].indexOf(o),
                c = l ? 'height' : 'width',
                u = l ? 'Top' : 'Left',
                d = u.toLowerCase(),
                p = l ? 'left' : 'top',
                f = l ? 'bottom' : 'right',
                h = Ne(i)[c]
              s[f] - h < a[d] && (e.offsets.popper[d] -= a[d] - (s[f] - h)),
                s[d] + h > a[f] && (e.offsets.popper[d] += s[d] + h - a[f]),
                (e.offsets.popper = Ce(e.offsets.popper))
              var g = s[d] + s[c] / 2 - h / 2,
                m = ce(e.instance.popper),
                _ = parseFloat(m['margin' + u], 10),
                v = parseFloat(m['border' + u + 'Width'], 10),
                y = g - e.offsets.popper[d] - _ - v
              return (
                (y = Math.max(Math.min(a[c] - h, y), 0)),
                (e.arrowElement = i),
                (e.offsets.arrow =
                  (Te((n = {}), d, Math.round(y)), Te(n, p, ''), n)),
                e
              )
            },
            element: '[x-arrow]'
          },
          flip: {
            order: 600,
            enabled: !0,
            fn: function (e, t) {
              if (qe(e.instance.modifiers, 'inner')) return e
              if (e.flipped && e.placement === e.originalPlacement) return e
              var n = je(
                  e.instance.popper,
                  e.instance.reference,
                  t.padding,
                  t.boundariesElement,
                  e.positionFixed
                ),
                i = e.placement.split('-')[0],
                o = Oe(i),
                r = e.placement.split('-')[1] || '',
                a = []
              switch (t.behavior) {
                case 'flip':
                  a = [i, o]
                  break
                case 'clockwise':
                  a = Ke(i)
                  break
                case 'counterclockwise':
                  a = Ke(i, !0)
                  break
                default:
                  a = t.behavior
              }
              return (
                a.forEach(function (s, l) {
                  if (i !== s || a.length === l + 1) return e
                  ;(i = e.placement.split('-')[0]), (o = Oe(i))
                  var c,
                    u = e.offsets.popper,
                    d = e.offsets.reference,
                    p = Math.floor,
                    f =
                      ('left' === i && p(u.right) > p(d.left)) ||
                      ('right' === i && p(u.left) < p(d.right)) ||
                      ('top' === i && p(u.bottom) > p(d.top)) ||
                      ('bottom' === i && p(u.top) < p(d.bottom)),
                    h = p(u.left) < p(n.left),
                    g = p(u.right) > p(n.right),
                    m = p(u.top) < p(n.top),
                    _ = p(u.bottom) > p(n.bottom),
                    v =
                      ('left' === i && h) ||
                      ('right' === i && g) ||
                      ('top' === i && m) ||
                      ('bottom' === i && _),
                    y = -1 !== ['top', 'bottom'].indexOf(i),
                    b =
                      !!t.flipVariations &&
                      ((y && 'start' === r && h) ||
                        (y && 'end' === r && g) ||
                        (!y && 'start' === r && m) ||
                        (!y && 'end' === r && _))
                  ;(f || v || b) &&
                    ((e.flipped = !0),
                    (f || v) && (i = a[l + 1]),
                    b &&
                      (r =
                        'end' === (c = r)
                          ? 'start'
                          : 'start' === c
                          ? 'end'
                          : c),
                    (e.placement = i + (r ? '-' + r : '')),
                    (e.offsets.popper = xe(
                      {},
                      e.offsets.popper,
                      Ie(e.instance.popper, e.offsets.reference, e.placement)
                    )),
                    (e = Le(e.instance.modifiers, e, 'flip')))
                }),
                e
              )
            },
            behavior: 'flip',
            padding: 5,
            boundariesElement: 'viewport'
          },
          inner: {
            order: 700,
            enabled: !1,
            fn: function (e) {
              var t = e.placement,
                n = t.split('-')[0],
                i = e.offsets,
                o = i.popper,
                r = i.reference,
                a = -1 !== ['left', 'right'].indexOf(n),
                s = -1 === ['top', 'left'].indexOf(n)
              return (
                (o[a ? 'left' : 'top'] =
                  r[n] - (s ? o[a ? 'width' : 'height'] : 0)),
                (e.placement = Oe(t)),
                (e.offsets.popper = Ce(o)),
                e
              )
            }
          },
          hide: {
            order: 800,
            enabled: !0,
            fn: function (e) {
              if (!We(e.instance.modifiers, 'hide', 'preventOverflow')) return e
              var t = e.offsets.reference,
                n = Pe(e.instance.modifiers, function (e) {
                  return 'preventOverflow' === e.name
                }).boundaries
              if (
                t.bottom < n.top ||
                t.left > n.right ||
                t.top > n.bottom ||
                t.right < n.left
              ) {
                if (!0 === e.hide) return e
                ;(e.hide = !0), (e.attributes['x-out-of-boundaries'] = '')
              } else {
                if (!1 === e.hide) return e
                ;(e.hide = !1), (e.attributes['x-out-of-boundaries'] = !1)
              }
              return e
            }
          },
          computeStyle: {
            order: 850,
            enabled: !0,
            fn: function (e, t) {
              var n = t.x,
                i = t.y,
                o = e.offsets.popper,
                r = Pe(e.instance.modifiers, function (e) {
                  return 'applyStyle' === e.name
                }).gpuAcceleration
              void 0 !== r &&
                console.warn(
                  'WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!'
                )
              var a,
                s,
                l = void 0 !== r ? r : t.gpuAcceleration,
                c = Se(ge(e.instance.popper)),
                u = { position: o.position },
                d = {
                  left: Math.floor(o.left),
                  top: Math.round(o.top),
                  bottom: Math.round(o.bottom),
                  right: Math.floor(o.right)
                },
                p = 'bottom' === n ? 'top' : 'bottom',
                f = 'right' === i ? 'left' : 'right',
                h = He('transform')
              if (
                ((s = 'bottom' === p ? -c.height + d.bottom : d.top),
                (a = 'right' === f ? -c.width + d.right : d.left),
                l && h)
              )
                (u[h] = 'translate3d(' + a + 'px, ' + s + 'px, 0)'),
                  (u[p] = 0),
                  (u[f] = 0),
                  (u.willChange = 'transform')
              else {
                var g = 'bottom' === p ? -1 : 1,
                  m = 'right' === f ? -1 : 1
                ;(u[p] = s * g), (u[f] = a * m), (u.willChange = p + ', ' + f)
              }
              var _ = { 'x-placement': e.placement }
              return (
                (e.attributes = xe({}, _, e.attributes)),
                (e.styles = xe({}, u, e.styles)),
                (e.arrowStyles = xe({}, e.offsets.arrow, e.arrowStyles)),
                e
              )
            },
            gpuAcceleration: !0,
            x: 'bottom',
            y: 'right'
          },
          applyStyle: {
            order: 900,
            enabled: !0,
            fn: function (e) {
              var t, n
              return (
                Fe(e.instance.popper, e.styles),
                (t = e.instance.popper),
                (n = e.attributes),
                Object.keys(n).forEach(function (e) {
                  !1 !== n[e] ? t.setAttribute(e, n[e]) : t.removeAttribute(e)
                }),
                e.arrowElement &&
                  Object.keys(e.arrowStyles).length &&
                  Fe(e.arrowElement, e.arrowStyles),
                e
              )
            },
            onLoad: function (e, t, n, i, o) {
              var r = $e(o, t, e, n.positionFixed),
                a = De(
                  n.placement,
                  r,
                  t,
                  e,
                  n.modifiers.flip.boundariesElement,
                  n.modifiers.flip.padding
                )
              return (
                t.setAttribute('x-placement', a),
                Fe(t, { position: n.positionFixed ? 'fixed' : 'absolute' }),
                n
              )
            },
            gpuAcceleration: void 0
          }
        }
      },
      Ye = (function () {
        function e (t, n) {
          var i = this,
            o =
              2 < arguments.length && void 0 !== arguments[2]
                ? arguments[2]
                : {}
          !(function (e, t) {
            if (!(e instanceof t))
              throw new TypeError('Cannot call a class as a function')
          })(this, e),
            (this.scheduleUpdate = function () {
              return requestAnimationFrame(i.update)
            }),
            (this.update = se(this.update.bind(this))),
            (this.options = xe({}, e.Defaults, o)),
            (this.state = {
              isDestroyed: !1,
              isCreated: !1,
              scrollParents: []
            }),
            (this.reference = t && t.jquery ? t[0] : t),
            (this.popper = n && n.jquery ? n[0] : n),
            (this.options.modifiers = {}),
            Object.keys(xe({}, e.Defaults.modifiers, o.modifiers)).forEach(
              function (t) {
                i.options.modifiers[t] = xe(
                  {},
                  e.Defaults.modifiers[t] || {},
                  o.modifiers ? o.modifiers[t] : {}
                )
              }
            ),
            (this.modifiers = Object.keys(this.options.modifiers)
              .map(function (e) {
                return xe({ name: e }, i.options.modifiers[e])
              })
              .sort(function (e, t) {
                return e.order - t.order
              })),
            this.modifiers.forEach(function (e) {
              e.enabled &&
                le(e.onLoad) &&
                e.onLoad(i.reference, i.popper, i.options, e, i.state)
            }),
            this.update()
          var r = this.options.eventsEnabled
          r && this.enableEventListeners(), (this.state.eventsEnabled = r)
        }
        return (
          ke(e, [
            {
              key: 'update',
              value: function () {
                return function () {
                  if (!this.state.isDestroyed) {
                    var e = {
                      instance: this,
                      styles: {},
                      arrowStyles: {},
                      attributes: {},
                      flipped: !1,
                      offsets: {}
                    }
                    ;(e.offsets.reference = $e(
                      this.state,
                      this.popper,
                      this.reference,
                      this.options.positionFixed
                    )),
                      (e.placement = De(
                        this.options.placement,
                        e.offsets.reference,
                        this.popper,
                        this.reference,
                        this.options.modifiers.flip.boundariesElement,
                        this.options.modifiers.flip.padding
                      )),
                      (e.originalPlacement = e.placement),
                      (e.positionFixed = this.options.positionFixed),
                      (e.offsets.popper = Ie(
                        this.popper,
                        e.offsets.reference,
                        e.placement
                      )),
                      (e.offsets.popper.position = this.options.positionFixed
                        ? 'fixed'
                        : 'absolute'),
                      (e = Le(this.modifiers, e)),
                      this.state.isCreated
                        ? this.options.onUpdate(e)
                        : ((this.state.isCreated = !0),
                          this.options.onCreate(e))
                  }
                }.call(this)
              }
            },
            {
              key: 'destroy',
              value: function () {
                return function () {
                  return (
                    (this.state.isDestroyed = !0),
                    qe(this.modifiers, 'applyStyle') &&
                      (this.popper.removeAttribute('x-placement'),
                      (this.popper.style.position = ''),
                      (this.popper.style.top = ''),
                      (this.popper.style.left = ''),
                      (this.popper.style.right = ''),
                      (this.popper.style.bottom = ''),
                      (this.popper.style.willChange = ''),
                      (this.popper.style[He('transform')] = '')),
                    this.disableEventListeners(),
                    this.options.removeOnDestroy &&
                      this.popper.parentNode.removeChild(this.popper),
                    this
                  )
                }.call(this)
              }
            },
            {
              key: 'enableEventListeners',
              value: function () {
                return function () {
                  this.state.eventsEnabled ||
                    (this.state = (function (e, t, n, i) {
                      ;(n.updateBound = i),
                        Me(e).addEventListener('resize', n.updateBound, {
                          passive: !0
                        })
                      var o = de(e)
                      return (
                        (function e (t, n, i, o) {
                          var r = 'BODY' === t.nodeName,
                            a = r ? t.ownerDocument.defaultView : t
                          a.addEventListener(n, i, { passive: !0 }),
                            r || e(de(a.parentNode), n, i, o),
                            o.push(a)
                        })(o, 'scroll', n.updateBound, n.scrollParents),
                        (n.scrollElement = o),
                        (n.eventsEnabled = !0),
                        n
                      )
                    })(
                      this.reference,
                      this.options,
                      this.state,
                      this.scheduleUpdate
                    ))
                }.call(this)
              }
            },
            {
              key: 'disableEventListeners',
              value: function () {
                return Re.call(this)
              }
            }
          ]),
          e
        )
      })()
    ;(Ye.Utils = ('undefined' != typeof window ? window : global).PopperUtils),
      (Ye.placements = Be),
      (Ye.Defaults = Qe)
    var Ve,
      Xe,
      Ge,
      Je,
      Ze,
      et,
      tt,
      nt,
      it,
      ot,
      rt,
      at,
      st,
      lt,
      ct,
      ut,
      dt,
      pt,
      ft,
      ht,
      gt,
      mt,
      _t,
      vt,
      yt,
      bt,
      wt,
      kt,
      Tt,
      xt,
      Ct,
      St,
      Et,
      At,
      jt,
      Dt,
      $t,
      Nt,
      Ot,
      It,
      Pt,
      Lt,
      qt,
      Ht,
      Mt,
      Rt,
      zt,
      Ft,
      Wt,
      Bt,
      Ut,
      Kt,
      Qt,
      Yt,
      Vt,
      Xt,
      Gt,
      Jt,
      Zt,
      en,
      tn,
      nn,
      on,
      rn,
      an,
      sn,
      ln,
      cn,
      un,
      dn,
      pn,
      fn,
      hn,
      gn,
      mn,
      _n,
      vn,
      yn,
      bn,
      wn,
      kn,
      Tn,
      xn,
      Cn =
        ((Xe = 'dropdown'),
        (Je = '.' + (Ge = 'bs.dropdown')),
        (Ze = '.data-api'),
        (et = (Ve = t).fn[Xe]),
        (tt = new RegExp('38|40|27')),
        (nt = {
          HIDE: 'hide' + Je,
          HIDDEN: 'hidden' + Je,
          SHOW: 'show' + Je,
          SHOWN: 'shown' + Je,
          CLICK: 'click' + Je,
          CLICK_DATA_API: 'click' + Je + Ze,
          KEYDOWN_DATA_API: 'keydown' + Je + Ze,
          KEYUP_DATA_API: 'keyup' + Je + Ze
        }),
        (it = 'disabled'),
        (ot = 'show'),
        'dropup',
        'dropright',
        'dropleft',
        (rt = 'dropdown-menu-right'),
        'position-static',
        (at = '[data-toggle="dropdown"]'),
        '.dropdown form',
        (st = '.dropdown-menu'),
        '.navbar-nav',
        '.dropdown-menu .dropdown-item:not(.disabled):not(:disabled)',
        'top-start',
        'top-end',
        'bottom-start',
        'bottom-end',
        'right-start',
        'left-start',
        (lt = {
          offset: 0,
          flip: !0,
          boundary: 'scrollParent',
          reference: 'toggle',
          display: 'dynamic'
        }),
        (ct = {
          offset: '(number|string|function)',
          flip: 'boolean',
          boundary: '(string|element)',
          reference: '(string|element)',
          display: 'string'
        }),
        (ut = (function () {
          function e (e, t) {
            ;(this._element = e),
              (this._popper = null),
              (this._config = this._getConfig(t)),
              (this._menu = this._getMenuElement()),
              (this._inNavbar = this._detectNavbar()),
              this._addEventListeners()
          }
          var t = e.prototype
          return (
            (t.toggle = function () {
              if (!this._element.disabled && !Ve(this._element).hasClass(it)) {
                var t = e._getParentFromElement(this._element),
                  n = Ve(this._menu).hasClass(ot)
                if ((e._clearMenus(), !n)) {
                  var i = { relatedTarget: this._element },
                    o = Ve.Event(nt.SHOW, i)
                  if ((Ve(t).trigger(o), !o.isDefaultPrevented())) {
                    if (!this._inNavbar) {
                      if (void 0 === Ye)
                        throw new TypeError(
                          'Bootstrap dropdown require Popper.js (https://popper.js.org)'
                        )
                      var r = this._element
                      'parent' === this._config.reference
                        ? (r = t)
                        : J.isElement(this._config.reference) &&
                          ((r = this._config.reference),
                          void 0 !== this._config.reference.jquery &&
                            (r = this._config.reference[0])),
                        'scrollParent' !== this._config.boundary &&
                          Ve(t).addClass('position-static'),
                        (this._popper = new Ye(
                          r,
                          this._menu,
                          this._getPopperConfig()
                        ))
                    }
                    'ontouchstart' in document.documentElement &&
                      0 === Ve(t).closest('.navbar-nav').length &&
                      Ve(document.body)
                        .children()
                        .on('mouseover', null, Ve.noop),
                      this._element.focus(),
                      this._element.setAttribute('aria-expanded', !0),
                      Ve(this._menu).toggleClass(ot),
                      Ve(t)
                        .toggleClass(ot)
                        .trigger(Ve.Event(nt.SHOWN, i))
                  }
                }
              }
            }),
            (t.dispose = function () {
              Ve.removeData(this._element, Ge),
                Ve(this._element).off(Je),
                (this._element = null),
                (this._menu = null) !== this._popper &&
                  (this._popper.destroy(), (this._popper = null))
            }),
            (t.update = function () {
              ;(this._inNavbar = this._detectNavbar()),
                null !== this._popper && this._popper.scheduleUpdate()
            }),
            (t._addEventListeners = function () {
              var e = this
              Ve(this._element).on(nt.CLICK, function (t) {
                t.preventDefault(), t.stopPropagation(), e.toggle()
              })
            }),
            (t._getConfig = function (e) {
              return (
                (e = o(
                  {},
                  this.constructor.Default,
                  Ve(this._element).data(),
                  e
                )),
                J.typeCheckConfig(Xe, e, this.constructor.DefaultType),
                e
              )
            }),
            (t._getMenuElement = function () {
              if (!this._menu) {
                var t = e._getParentFromElement(this._element)
                t && (this._menu = t.querySelector(st))
              }
              return this._menu
            }),
            (t._getPlacement = function () {
              var e = Ve(this._element.parentNode),
                t = 'bottom-start'
              return (
                e.hasClass('dropup')
                  ? ((t = 'top-start'),
                    Ve(this._menu).hasClass(rt) && (t = 'top-end'))
                  : e.hasClass('dropright')
                  ? (t = 'right-start')
                  : e.hasClass('dropleft')
                  ? (t = 'left-start')
                  : Ve(this._menu).hasClass(rt) && (t = 'bottom-end'),
                t
              )
            }),
            (t._detectNavbar = function () {
              return 0 < Ve(this._element).closest('.navbar').length
            }),
            (t._getPopperConfig = function () {
              var e = this,
                t = {}
              'function' == typeof this._config.offset
                ? (t.fn = function (t) {
                    return (
                      (t.offsets = o(
                        {},
                        t.offsets,
                        e._config.offset(t.offsets) || {}
                      )),
                      t
                    )
                  })
                : (t.offset = this._config.offset)
              var n = {
                placement: this._getPlacement(),
                modifiers: {
                  offset: t,
                  flip: { enabled: this._config.flip },
                  preventOverflow: { boundariesElement: this._config.boundary }
                }
              }
              return (
                'static' === this._config.display &&
                  (n.modifiers.applyStyle = { enabled: !1 }),
                n
              )
            }),
            (e._jQueryInterface = function (t) {
              return this.each(function () {
                var n = Ve(this).data(Ge)
                if (
                  (n ||
                    ((n = new e(this, 'object' == typeof t ? t : null)),
                    Ve(this).data(Ge, n)),
                  'string' == typeof t)
                ) {
                  if (void 0 === n[t])
                    throw new TypeError('No method named "' + t + '"')
                  n[t]()
                }
              })
            }),
            (e._clearMenus = function (t) {
              if (
                !t ||
                (3 !== t.which && ('keyup' !== t.type || 9 === t.which))
              )
                for (
                  var n = [].slice.call(document.querySelectorAll(at)),
                    i = 0,
                    o = n.length;
                  i < o;
                  i++
                ) {
                  var r = e._getParentFromElement(n[i]),
                    a = Ve(n[i]).data(Ge),
                    s = { relatedTarget: n[i] }
                  if ((t && 'click' === t.type && (s.clickEvent = t), a)) {
                    var l = a._menu
                    if (
                      Ve(r).hasClass(ot) &&
                      !(
                        t &&
                        (('click' === t.type &&
                          /input|textarea/i.test(t.target.tagName)) ||
                          ('keyup' === t.type && 9 === t.which)) &&
                        Ve.contains(r, t.target)
                      )
                    ) {
                      var c = Ve.Event(nt.HIDE, s)
                      Ve(r).trigger(c),
                        c.isDefaultPrevented() ||
                          ('ontouchstart' in document.documentElement &&
                            Ve(document.body)
                              .children()
                              .off('mouseover', null, Ve.noop),
                          n[i].setAttribute('aria-expanded', 'false'),
                          Ve(l).removeClass(ot),
                          Ve(r)
                            .removeClass(ot)
                            .trigger(Ve.Event(nt.HIDDEN, s)))
                    }
                  }
                }
            }),
            (e._getParentFromElement = function (e) {
              var t,
                n = J.getSelectorFromElement(e)
              return n && (t = document.querySelector(n)), t || e.parentNode
            }),
            (e._dataApiKeydownHandler = function (t) {
              if (
                (/input|textarea/i.test(t.target.tagName)
                  ? !(
                      32 === t.which ||
                      (27 !== t.which &&
                        ((40 !== t.which && 38 !== t.which) ||
                          Ve(t.target).closest(st).length))
                    )
                  : tt.test(t.which)) &&
                (t.preventDefault(),
                t.stopPropagation(),
                !this.disabled && !Ve(this).hasClass(it))
              ) {
                var n = e._getParentFromElement(this),
                  i = Ve(n).hasClass(ot)
                if (
                  (i || (27 === t.which && 32 === t.which)) &&
                  (!i || (27 !== t.which && 32 !== t.which))
                ) {
                  var o = [].slice.call(
                    n.querySelectorAll(
                      '.dropdown-menu .dropdown-item:not(.disabled):not(:disabled)'
                    )
                  )
                  if (0 !== o.length) {
                    var r = o.indexOf(t.target)
                    38 === t.which && 0 < r && r--,
                      40 === t.which && r < o.length - 1 && r++,
                      r < 0 && (r = 0),
                      o[r].focus()
                  }
                } else {
                  if (27 === t.which) {
                    var a = n.querySelector(at)
                    Ve(a).trigger('focus')
                  }
                  Ve(this).trigger('click')
                }
              }
            }),
            i(e, null, [
              {
                key: 'VERSION',
                get: function () {
                  return '4.1.3'
                }
              },
              {
                key: 'Default',
                get: function () {
                  return lt
                }
              },
              {
                key: 'DefaultType',
                get: function () {
                  return ct
                }
              }
            ]),
            e
          )
        })()),
        Ve(document)
          .on(nt.KEYDOWN_DATA_API, at, ut._dataApiKeydownHandler)
          .on(nt.KEYDOWN_DATA_API, st, ut._dataApiKeydownHandler)
          .on(nt.CLICK_DATA_API + ' ' + nt.KEYUP_DATA_API, ut._clearMenus)
          .on(nt.CLICK_DATA_API, at, function (e) {
            e.preventDefault(),
              e.stopPropagation(),
              ut._jQueryInterface.call(Ve(this), 'toggle')
          })
          .on(nt.CLICK_DATA_API, '.dropdown form', function (e) {
            e.stopPropagation()
          }),
        (Ve.fn[Xe] = ut._jQueryInterface),
        (Ve.fn[Xe].Constructor = ut),
        (Ve.fn[Xe].noConflict = function () {
          return (Ve.fn[Xe] = et), ut._jQueryInterface
        }),
        ut),
      Sn =
        ((pt = 'modal'),
        (ht = '.' + (ft = 'bs.modal')),
        (gt = (dt = t).fn[pt]),
        (mt = { backdrop: !0, keyboard: !0, focus: !0, show: !0 }),
        (_t = {
          backdrop: '(boolean|string)',
          keyboard: 'boolean',
          focus: 'boolean',
          show: 'boolean'
        }),
        (vt = {
          HIDE: 'hide' + ht,
          HIDDEN: 'hidden' + ht,
          SHOW: 'show' + ht,
          SHOWN: 'shown' + ht,
          FOCUSIN: 'focusin' + ht,
          RESIZE: 'resize' + ht,
          CLICK_DISMISS: 'click.dismiss' + ht,
          KEYDOWN_DISMISS: 'keydown.dismiss' + ht,
          MOUSEUP_DISMISS: 'mouseup.dismiss' + ht,
          MOUSEDOWN_DISMISS: 'mousedown.dismiss' + ht,
          CLICK_DATA_API: 'click' + ht + '.data-api'
        }),
        'modal-scrollbar-measure',
        'modal-backdrop',
        (yt = 'modal-open'),
        (bt = 'fade'),
        (wt = 'show'),
        '.modal-dialog',
        '[data-toggle="modal"]',
        '[data-dismiss="modal"]',
        (kt = '.fixed-top, .fixed-bottom, .is-fixed, .sticky-top'),
        (Tt = '.sticky-top'),
        (xt = (function () {
          function e (e, t) {
            ;(this._config = this._getConfig(t)),
              (this._element = e),
              (this._dialog = e.querySelector('.modal-dialog')),
              (this._backdrop = null),
              (this._isShown = !1),
              (this._isBodyOverflowing = !1),
              (this._ignoreBackdropClick = !1),
              (this._scrollbarWidth = 0)
          }
          var t = e.prototype
          return (
            (t.toggle = function (e) {
              return this._isShown ? this.hide() : this.show(e)
            }),
            (t.show = function (e) {
              var t = this
              if (!this._isTransitioning && !this._isShown) {
                dt(this._element).hasClass(bt) && (this._isTransitioning = !0)
                var n = dt.Event(vt.SHOW, { relatedTarget: e })
                dt(this._element).trigger(n),
                  this._isShown ||
                    n.isDefaultPrevented() ||
                    ((this._isShown = !0),
                    this._checkScrollbar(),
                    this._setScrollbar(),
                    this._adjustDialog(),
                    dt(document.body).addClass(yt),
                    this._setEscapeEvent(),
                    this._setResizeEvent(),
                    dt(this._element).on(
                      vt.CLICK_DISMISS,
                      '[data-dismiss="modal"]',
                      function (e) {
                        return t.hide(e)
                      }
                    ),
                    dt(this._dialog).on(vt.MOUSEDOWN_DISMISS, function () {
                      dt(t._element).one(vt.MOUSEUP_DISMISS, function (e) {
                        dt(e.target).is(t._element) &&
                          (t._ignoreBackdropClick = !0)
                      })
                    }),
                    this._showBackdrop(function () {
                      return t._showElement(e)
                    }))
              }
            }),
            (t.hide = function (e) {
              var t = this
              if (
                (e && e.preventDefault(),
                !this._isTransitioning && this._isShown)
              ) {
                var n = dt.Event(vt.HIDE)
                if (
                  (dt(this._element).trigger(n),
                  this._isShown && !n.isDefaultPrevented())
                ) {
                  this._isShown = !1
                  var i = dt(this._element).hasClass(bt)
                  if (
                    (i && (this._isTransitioning = !0),
                    this._setEscapeEvent(),
                    this._setResizeEvent(),
                    dt(document).off(vt.FOCUSIN),
                    dt(this._element).removeClass(wt),
                    dt(this._element).off(vt.CLICK_DISMISS),
                    dt(this._dialog).off(vt.MOUSEDOWN_DISMISS),
                    i)
                  ) {
                    var o = J.getTransitionDurationFromElement(this._element)
                    dt(this._element)
                      .one(J.TRANSITION_END, function (e) {
                        return t._hideModal(e)
                      })
                      .emulateTransitionEnd(o)
                  } else this._hideModal()
                }
              }
            }),
            (t.dispose = function () {
              dt.removeData(this._element, ft),
                dt(window, document, this._element, this._backdrop).off(ht),
                (this._config = null),
                (this._element = null),
                (this._dialog = null),
                (this._backdrop = null),
                (this._isShown = null),
                (this._isBodyOverflowing = null),
                (this._ignoreBackdropClick = null),
                (this._scrollbarWidth = null)
            }),
            (t.handleUpdate = function () {
              this._adjustDialog()
            }),
            (t._getConfig = function (e) {
              return (e = o({}, mt, e)), J.typeCheckConfig(pt, e, _t), e
            }),
            (t._showElement = function (e) {
              var t = this,
                n = dt(this._element).hasClass(bt)
              ;(this._element.parentNode &&
                this._element.parentNode.nodeType === Node.ELEMENT_NODE) ||
                document.body.appendChild(this._element),
                (this._element.style.display = 'block'),
                this._element.removeAttribute('aria-hidden'),
                (this._element.scrollTop = 0),
                n && J.reflow(this._element),
                dt(this._element).addClass(wt),
                this._config.focus && this._enforceFocus()
              var i = dt.Event(vt.SHOWN, { relatedTarget: e }),
                o = function () {
                  t._config.focus && t._element.focus(),
                    (t._isTransitioning = !1),
                    dt(t._element).trigger(i)
                }
              if (n) {
                var r = J.getTransitionDurationFromElement(this._element)
                dt(this._dialog)
                  .one(J.TRANSITION_END, o)
                  .emulateTransitionEnd(r)
              } else o()
            }),
            (t._enforceFocus = function () {
              var e = this
              dt(document)
                .off(vt.FOCUSIN)
                .on(vt.FOCUSIN, function (t) {
                  document !== t.target &&
                    e._element !== t.target &&
                    0 === dt(e._element).has(t.target).length &&
                    e._element.focus()
                })
            }),
            (t._setEscapeEvent = function () {
              var e = this
              this._isShown && this._config.keyboard
                ? dt(this._element).on(vt.KEYDOWN_DISMISS, function (t) {
                    27 === t.which && (t.preventDefault(), e.hide())
                  })
                : this._isShown || dt(this._element).off(vt.KEYDOWN_DISMISS)
            }),
            (t._setResizeEvent = function () {
              var e = this
              this._isShown
                ? dt(window).on(vt.RESIZE, function (t) {
                    return e.handleUpdate(t)
                  })
                : dt(window).off(vt.RESIZE)
            }),
            (t._hideModal = function () {
              var e = this
              ;(this._element.style.display = 'none'),
                this._element.setAttribute('aria-hidden', !0),
                (this._isTransitioning = !1),
                this._showBackdrop(function () {
                  dt(document.body).removeClass(yt),
                    e._resetAdjustments(),
                    e._resetScrollbar(),
                    dt(e._element).trigger(vt.HIDDEN)
                })
            }),
            (t._removeBackdrop = function () {
              this._backdrop &&
                (dt(this._backdrop).remove(), (this._backdrop = null))
            }),
            (t._showBackdrop = function (e) {
              var t = this,
                n = dt(this._element).hasClass(bt) ? bt : ''
              if (this._isShown && this._config.backdrop) {
                if (
                  ((this._backdrop = document.createElement('div')),
                  (this._backdrop.className = 'modal-backdrop'),
                  n && this._backdrop.classList.add(n),
                  dt(this._backdrop).appendTo(document.body),
                  dt(this._element).on(vt.CLICK_DISMISS, function (e) {
                    t._ignoreBackdropClick
                      ? (t._ignoreBackdropClick = !1)
                      : e.target === e.currentTarget &&
                        ('static' === t._config.backdrop
                          ? t._element.focus()
                          : t.hide())
                  }),
                  n && J.reflow(this._backdrop),
                  dt(this._backdrop).addClass(wt),
                  !e)
                )
                  return
                if (!n) return void e()
                var i = J.getTransitionDurationFromElement(this._backdrop)
                dt(this._backdrop)
                  .one(J.TRANSITION_END, e)
                  .emulateTransitionEnd(i)
              } else if (!this._isShown && this._backdrop) {
                dt(this._backdrop).removeClass(wt)
                var o = function () {
                  t._removeBackdrop(), e && e()
                }
                if (dt(this._element).hasClass(bt)) {
                  var r = J.getTransitionDurationFromElement(this._backdrop)
                  dt(this._backdrop)
                    .one(J.TRANSITION_END, o)
                    .emulateTransitionEnd(r)
                } else o()
              } else e && e()
            }),
            (t._adjustDialog = function () {
              var e =
                this._element.scrollHeight >
                document.documentElement.clientHeight
              !this._isBodyOverflowing &&
                e &&
                (this._element.style.paddingLeft = this._scrollbarWidth + 'px'),
                this._isBodyOverflowing &&
                  !e &&
                  (this._element.style.paddingRight =
                    this._scrollbarWidth + 'px')
            }),
            (t._resetAdjustments = function () {
              ;(this._element.style.paddingLeft = ''),
                (this._element.style.paddingRight = '')
            }),
            (t._checkScrollbar = function () {
              var e = document.body.getBoundingClientRect()
              ;(this._isBodyOverflowing = e.left + e.right < window.innerWidth),
                (this._scrollbarWidth = this._getScrollbarWidth())
            }),
            (t._setScrollbar = function () {
              var e = this
              if (this._isBodyOverflowing) {
                var t = [].slice.call(document.querySelectorAll(kt)),
                  n = [].slice.call(document.querySelectorAll(Tt))
                dt(t).each(function (t, n) {
                  var i = n.style.paddingRight,
                    o = dt(n).css('padding-right')
                  dt(n)
                    .data('padding-right', i)
                    .css(
                      'padding-right',
                      parseFloat(o) + e._scrollbarWidth + 'px'
                    )
                }),
                  dt(n).each(function (t, n) {
                    var i = n.style.marginRight,
                      o = dt(n).css('margin-right')
                    dt(n)
                      .data('margin-right', i)
                      .css(
                        'margin-right',
                        parseFloat(o) - e._scrollbarWidth + 'px'
                      )
                  })
                var i = document.body.style.paddingRight,
                  o = dt(document.body).css('padding-right')
                dt(document.body)
                  .data('padding-right', i)
                  .css(
                    'padding-right',
                    parseFloat(o) + this._scrollbarWidth + 'px'
                  )
              }
            }),
            (t._resetScrollbar = function () {
              var e = [].slice.call(document.querySelectorAll(kt))
              dt(e).each(function (e, t) {
                var n = dt(t).data('padding-right')
                dt(t).removeData('padding-right'),
                  (t.style.paddingRight = n || '')
              })
              var t = [].slice.call(document.querySelectorAll('' + Tt))
              dt(t).each(function (e, t) {
                var n = dt(t).data('margin-right')
                void 0 !== n &&
                  dt(t)
                    .css('margin-right', n)
                    .removeData('margin-right')
              })
              var n = dt(document.body).data('padding-right')
              dt(document.body).removeData('padding-right'),
                (document.body.style.paddingRight = n || '')
            }),
            (t._getScrollbarWidth = function () {
              var e = document.createElement('div')
              ;(e.className = 'modal-scrollbar-measure'),
                document.body.appendChild(e)
              var t = e.getBoundingClientRect().width - e.clientWidth
              return document.body.removeChild(e), t
            }),
            (e._jQueryInterface = function (t, n) {
              return this.each(function () {
                var i = dt(this).data(ft),
                  r = o(
                    {},
                    mt,
                    dt(this).data(),
                    'object' == typeof t && t ? t : {}
                  )
                if (
                  (i || ((i = new e(this, r)), dt(this).data(ft, i)),
                  'string' == typeof t)
                ) {
                  if (void 0 === i[t])
                    throw new TypeError('No method named "' + t + '"')
                  i[t](n)
                } else r.show && i.show(n)
              })
            }),
            i(e, null, [
              {
                key: 'VERSION',
                get: function () {
                  return '4.1.3'
                }
              },
              {
                key: 'Default',
                get: function () {
                  return mt
                }
              }
            ]),
            e
          )
        })()),
        dt(document).on(vt.CLICK_DATA_API, '[data-toggle="modal"]', function (
          e
        ) {
          var t,
            n = this,
            i = J.getSelectorFromElement(this)
          i && (t = document.querySelector(i))
          var r = dt(t).data(ft)
            ? 'toggle'
            : o({}, dt(t).data(), dt(this).data())
          ;('A' !== this.tagName && 'AREA' !== this.tagName) ||
            e.preventDefault()
          var a = dt(t).one(vt.SHOW, function (e) {
            e.isDefaultPrevented() ||
              a.one(vt.HIDDEN, function () {
                dt(n).is(':visible') && n.focus()
              })
          })
          xt._jQueryInterface.call(dt(t), r, this)
        }),
        (dt.fn[pt] = xt._jQueryInterface),
        (dt.fn[pt].Constructor = xt),
        (dt.fn[pt].noConflict = function () {
          return (dt.fn[pt] = gt), xt._jQueryInterface
        }),
        xt),
      En =
        ((St = 'tooltip'),
        (At = '.' + (Et = 'bs.tooltip')),
        (jt = (Ct = t).fn[St]),
        (Dt = 'bs-tooltip'),
        ($t = new RegExp('(^|\\s)' + Dt + '\\S+', 'g')),
        (It = {
          animation: !0,
          template:
            '<div class="tooltip" role="tooltip"><div class="arrow"></div><div class="tooltip-inner"></div></div>',
          trigger: 'hover focus',
          title: '',
          delay: 0,
          html: !(Ot = {
            AUTO: 'auto',
            TOP: 'top',
            RIGHT: 'right',
            BOTTOM: 'bottom',
            LEFT: 'left'
          }),
          selector: !(Nt = {
            animation: 'boolean',
            template: 'string',
            title: '(string|element|function)',
            trigger: 'string',
            delay: '(number|object)',
            html: 'boolean',
            selector: '(string|boolean)',
            placement: '(string|function)',
            offset: '(number|string)',
            container: '(string|element|boolean)',
            fallbackPlacement: '(string|array)',
            boundary: '(string|element)'
          }),
          placement: 'top',
          offset: 0,
          container: !1,
          fallbackPlacement: 'flip',
          boundary: 'scrollParent'
        }),
        (Lt = 'out'),
        (qt = {
          HIDE: 'hide' + At,
          HIDDEN: 'hidden' + At,
          SHOW: (Pt = 'show') + At,
          SHOWN: 'shown' + At,
          INSERTED: 'inserted' + At,
          CLICK: 'click' + At,
          FOCUSIN: 'focusin' + At,
          FOCUSOUT: 'focusout' + At,
          MOUSEENTER: 'mouseenter' + At,
          MOUSELEAVE: 'mouseleave' + At
        }),
        (Ht = 'fade'),
        (Mt = 'show'),
        '.tooltip-inner',
        '.arrow',
        (Rt = 'hover'),
        (zt = 'focus'),
        'click',
        'manual',
        (Ft = (function () {
          function e (e, t) {
            if (void 0 === Ye)
              throw new TypeError(
                'Bootstrap tooltips require Popper.js (https://popper.js.org)'
              )
            ;(this._isEnabled = !0),
              (this._timeout = 0),
              (this._hoverState = ''),
              (this._activeTrigger = {}),
              (this._popper = null),
              (this.element = e),
              (this.config = this._getConfig(t)),
              (this.tip = null),
              this._setListeners()
          }
          var t = e.prototype
          return (
            (t.enable = function () {
              this._isEnabled = !0
            }),
            (t.disable = function () {
              this._isEnabled = !1
            }),
            (t.toggleEnabled = function () {
              this._isEnabled = !this._isEnabled
            }),
            (t.toggle = function (e) {
              if (this._isEnabled)
                if (e) {
                  var t = this.constructor.DATA_KEY,
                    n = Ct(e.currentTarget).data(t)
                  n ||
                    ((n = new this.constructor(
                      e.currentTarget,
                      this._getDelegateConfig()
                    )),
                    Ct(e.currentTarget).data(t, n)),
                    (n._activeTrigger.click = !n._activeTrigger.click),
                    n._isWithActiveTrigger()
                      ? n._enter(null, n)
                      : n._leave(null, n)
                } else {
                  if (Ct(this.getTipElement()).hasClass(Mt))
                    return void this._leave(null, this)
                  this._enter(null, this)
                }
            }),
            (t.dispose = function () {
              clearTimeout(this._timeout),
                Ct.removeData(this.element, this.constructor.DATA_KEY),
                Ct(this.element).off(this.constructor.EVENT_KEY),
                Ct(this.element)
                  .closest('.modal')
                  .off('hide.bs.modal'),
                this.tip && Ct(this.tip).remove(),
                (this._isEnabled = null),
                (this._timeout = null),
                (this._hoverState = null),
                (this._activeTrigger = null) !== this._popper &&
                  this._popper.destroy(),
                (this._popper = null),
                (this.element = null),
                (this.config = null),
                (this.tip = null)
            }),
            (t.show = function () {
              var e = this
              if ('none' === Ct(this.element).css('display'))
                throw new Error('Please use show on visible elements')
              var t = Ct.Event(this.constructor.Event.SHOW)
              if (this.isWithContent() && this._isEnabled) {
                Ct(this.element).trigger(t)
                var n = Ct.contains(
                  this.element.ownerDocument.documentElement,
                  this.element
                )
                if (t.isDefaultPrevented() || !n) return
                var i = this.getTipElement(),
                  o = J.getUID(this.constructor.NAME)
                i.setAttribute('id', o),
                  this.element.setAttribute('aria-describedby', o),
                  this.setContent(),
                  this.config.animation && Ct(i).addClass(Ht)
                var r =
                    'function' == typeof this.config.placement
                      ? this.config.placement.call(this, i, this.element)
                      : this.config.placement,
                  a = this._getAttachment(r)
                this.addAttachmentClass(a)
                var s =
                  !1 === this.config.container
                    ? document.body
                    : Ct(document).find(this.config.container)
                Ct(i).data(this.constructor.DATA_KEY, this),
                  Ct.contains(
                    this.element.ownerDocument.documentElement,
                    this.tip
                  ) || Ct(i).appendTo(s),
                  Ct(this.element).trigger(this.constructor.Event.INSERTED),
                  (this._popper = new Ye(this.element, i, {
                    placement: a,
                    modifiers: {
                      offset: { offset: this.config.offset },
                      flip: { behavior: this.config.fallbackPlacement },
                      arrow: { element: '.arrow' },
                      preventOverflow: {
                        boundariesElement: this.config.boundary
                      }
                    },
                    onCreate: function (t) {
                      t.originalPlacement !== t.placement &&
                        e._handlePopperPlacementChange(t)
                    },
                    onUpdate: function (t) {
                      e._handlePopperPlacementChange(t)
                    }
                  })),
                  Ct(i).addClass(Mt),
                  'ontouchstart' in document.documentElement &&
                    Ct(document.body)
                      .children()
                      .on('mouseover', null, Ct.noop)
                var l = function () {
                  e.config.animation && e._fixTransition()
                  var t = e._hoverState
                  ;(e._hoverState = null),
                    Ct(e.element).trigger(e.constructor.Event.SHOWN),
                    t === Lt && e._leave(null, e)
                }
                if (Ct(this.tip).hasClass(Ht)) {
                  var c = J.getTransitionDurationFromElement(this.tip)
                  Ct(this.tip)
                    .one(J.TRANSITION_END, l)
                    .emulateTransitionEnd(c)
                } else l()
              }
            }),
            (t.hide = function (e) {
              var t = this,
                n = this.getTipElement(),
                i = Ct.Event(this.constructor.Event.HIDE),
                o = function () {
                  t._hoverState !== Pt &&
                    n.parentNode &&
                    n.parentNode.removeChild(n),
                    t._cleanTipClass(),
                    t.element.removeAttribute('aria-describedby'),
                    Ct(t.element).trigger(t.constructor.Event.HIDDEN),
                    null !== t._popper && t._popper.destroy(),
                    e && e()
                }
              if ((Ct(this.element).trigger(i), !i.isDefaultPrevented())) {
                if (
                  (Ct(n).removeClass(Mt),
                  'ontouchstart' in document.documentElement &&
                    Ct(document.body)
                      .children()
                      .off('mouseover', null, Ct.noop),
                  (this._activeTrigger.click = !1),
                  (this._activeTrigger[zt] = !1),
                  (this._activeTrigger[Rt] = !1),
                  Ct(this.tip).hasClass(Ht))
                ) {
                  var r = J.getTransitionDurationFromElement(n)
                  Ct(n)
                    .one(J.TRANSITION_END, o)
                    .emulateTransitionEnd(r)
                } else o()
                this._hoverState = ''
              }
            }),
            (t.update = function () {
              null !== this._popper && this._popper.scheduleUpdate()
            }),
            (t.isWithContent = function () {
              return Boolean(this.getTitle())
            }),
            (t.addAttachmentClass = function (e) {
              Ct(this.getTipElement()).addClass(Dt + '-' + e)
            }),
            (t.getTipElement = function () {
              return (
                (this.tip = this.tip || Ct(this.config.template)[0]), this.tip
              )
            }),
            (t.setContent = function () {
              var e = this.getTipElement()
              this.setElementContent(
                Ct(e.querySelectorAll('.tooltip-inner')),
                this.getTitle()
              ),
                Ct(e).removeClass(Ht + ' ' + Mt)
            }),
            (t.setElementContent = function (e, t) {
              var n = this.config.html
              'object' == typeof t && (t.nodeType || t.jquery)
                ? n
                  ? Ct(t)
                      .parent()
                      .is(e) || e.empty().append(t)
                  : e.text(Ct(t).text())
                : e[n ? 'html' : 'text'](t)
            }),
            (t.getTitle = function () {
              var e = this.element.getAttribute('data-original-title')
              return (
                e ||
                  (e =
                    'function' == typeof this.config.title
                      ? this.config.title.call(this.element)
                      : this.config.title),
                e
              )
            }),
            (t._getAttachment = function (e) {
              return Ot[e.toUpperCase()]
            }),
            (t._setListeners = function () {
              var e = this
              this.config.trigger.split(' ').forEach(function (t) {
                if ('click' === t)
                  Ct(e.element).on(
                    e.constructor.Event.CLICK,
                    e.config.selector,
                    function (t) {
                      return e.toggle(t)
                    }
                  )
                else if ('manual' !== t) {
                  var n =
                      t === Rt
                        ? e.constructor.Event.MOUSEENTER
                        : e.constructor.Event.FOCUSIN,
                    i =
                      t === Rt
                        ? e.constructor.Event.MOUSELEAVE
                        : e.constructor.Event.FOCUSOUT
                  Ct(e.element)
                    .on(n, e.config.selector, function (t) {
                      return e._enter(t)
                    })
                    .on(i, e.config.selector, function (t) {
                      return e._leave(t)
                    })
                }
                Ct(e.element)
                  .closest('.modal')
                  .on('hide.bs.modal', function () {
                    return e.hide()
                  })
              }),
                this.config.selector
                  ? (this.config = o({}, this.config, {
                      trigger: 'manual',
                      selector: ''
                    }))
                  : this._fixTitle()
            }),
            (t._fixTitle = function () {
              var e = typeof this.element.getAttribute('data-original-title')
              ;(this.element.getAttribute('title') || 'string' !== e) &&
                (this.element.setAttribute(
                  'data-original-title',
                  this.element.getAttribute('title') || ''
                ),
                this.element.setAttribute('title', ''))
            }),
            (t._enter = function (e, t) {
              var n = this.constructor.DATA_KEY
              ;(t = t || Ct(e.currentTarget).data(n)) ||
                ((t = new this.constructor(
                  e.currentTarget,
                  this._getDelegateConfig()
                )),
                Ct(e.currentTarget).data(n, t)),
                e && (t._activeTrigger['focusin' === e.type ? zt : Rt] = !0),
                Ct(t.getTipElement()).hasClass(Mt) || t._hoverState === Pt
                  ? (t._hoverState = Pt)
                  : (clearTimeout(t._timeout),
                    (t._hoverState = Pt),
                    t.config.delay && t.config.delay.show
                      ? (t._timeout = setTimeout(function () {
                          t._hoverState === Pt && t.show()
                        }, t.config.delay.show))
                      : t.show())
            }),
            (t._leave = function (e, t) {
              var n = this.constructor.DATA_KEY
              ;(t = t || Ct(e.currentTarget).data(n)) ||
                ((t = new this.constructor(
                  e.currentTarget,
                  this._getDelegateConfig()
                )),
                Ct(e.currentTarget).data(n, t)),
                e && (t._activeTrigger['focusout' === e.type ? zt : Rt] = !1),
                t._isWithActiveTrigger() ||
                  (clearTimeout(t._timeout),
                  (t._hoverState = Lt),
                  t.config.delay && t.config.delay.hide
                    ? (t._timeout = setTimeout(function () {
                        t._hoverState === Lt && t.hide()
                      }, t.config.delay.hide))
                    : t.hide())
            }),
            (t._isWithActiveTrigger = function () {
              for (var e in this._activeTrigger)
                if (this._activeTrigger[e]) return !0
              return !1
            }),
            (t._getConfig = function (e) {
              return (
                'number' ==
                  typeof (e = o(
                    {},
                    this.constructor.Default,
                    Ct(this.element).data(),
                    'object' == typeof e && e ? e : {}
                  )).delay && (e.delay = { show: e.delay, hide: e.delay }),
                'number' == typeof e.title && (e.title = e.title.toString()),
                'number' == typeof e.content &&
                  (e.content = e.content.toString()),
                J.typeCheckConfig(St, e, this.constructor.DefaultType),
                e
              )
            }),
            (t._getDelegateConfig = function () {
              var e = {}
              if (this.config)
                for (var t in this.config)
                  this.constructor.Default[t] !== this.config[t] &&
                    (e[t] = this.config[t])
              return e
            }),
            (t._cleanTipClass = function () {
              var e = Ct(this.getTipElement()),
                t = e.attr('class').match($t)
              null !== t && t.length && e.removeClass(t.join(''))
            }),
            (t._handlePopperPlacementChange = function (e) {
              var t = e.instance
              ;(this.tip = t.popper),
                this._cleanTipClass(),
                this.addAttachmentClass(this._getAttachment(e.placement))
            }),
            (t._fixTransition = function () {
              var e = this.getTipElement(),
                t = this.config.animation
              null === e.getAttribute('x-placement') &&
                (Ct(e).removeClass(Ht),
                (this.config.animation = !1),
                this.hide(),
                this.show(),
                (this.config.animation = t))
            }),
            (e._jQueryInterface = function (t) {
              return this.each(function () {
                var n = Ct(this).data(Et),
                  i = 'object' == typeof t && t
                if (
                  (n || !/dispose|hide/.test(t)) &&
                  (n || ((n = new e(this, i)), Ct(this).data(Et, n)),
                  'string' == typeof t)
                ) {
                  if (void 0 === n[t])
                    throw new TypeError('No method named "' + t + '"')
                  n[t]()
                }
              })
            }),
            i(e, null, [
              {
                key: 'VERSION',
                get: function () {
                  return '4.1.3'
                }
              },
              {
                key: 'Default',
                get: function () {
                  return It
                }
              },
              {
                key: 'NAME',
                get: function () {
                  return St
                }
              },
              {
                key: 'DATA_KEY',
                get: function () {
                  return Et
                }
              },
              {
                key: 'Event',
                get: function () {
                  return qt
                }
              },
              {
                key: 'EVENT_KEY',
                get: function () {
                  return At
                }
              },
              {
                key: 'DefaultType',
                get: function () {
                  return Nt
                }
              }
            ]),
            e
          )
        })()),
        (Ct.fn[St] = Ft._jQueryInterface),
        (Ct.fn[St].Constructor = Ft),
        (Ct.fn[St].noConflict = function () {
          return (Ct.fn[St] = jt), Ft._jQueryInterface
        }),
        Ft),
      An =
        ((Bt = 'popover'),
        (Kt = '.' + (Ut = 'bs.popover')),
        (Qt = (Wt = t).fn[Bt]),
        (Yt = 'bs-popover'),
        (Vt = new RegExp('(^|\\s)' + Yt + '\\S+', 'g')),
        (Xt = o({}, En.Default, {
          placement: 'right',
          trigger: 'click',
          content: '',
          template:
            '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>'
        })),
        (Gt = o({}, En.DefaultType, { content: '(string|element|function)' })),
        'fade',
        '.popover-header',
        '.popover-body',
        (Jt = {
          HIDE: 'hide' + Kt,
          HIDDEN: 'hidden' + Kt,
          SHOW: 'show' + Kt,
          SHOWN: 'shown' + Kt,
          INSERTED: 'inserted' + Kt,
          CLICK: 'click' + Kt,
          FOCUSIN: 'focusin' + Kt,
          FOCUSOUT: 'focusout' + Kt,
          MOUSEENTER: 'mouseenter' + Kt,
          MOUSELEAVE: 'mouseleave' + Kt
        }),
        (Zt = (function (e) {
          var t, n
          function o () {
            return e.apply(this, arguments) || this
          }
          ;(n = e),
            ((t = o).prototype = Object.create(n.prototype)),
            ((t.prototype.constructor = t).__proto__ = n)
          var r = o.prototype
          return (
            (r.isWithContent = function () {
              return this.getTitle() || this._getContent()
            }),
            (r.addAttachmentClass = function (e) {
              Wt(this.getTipElement()).addClass(Yt + '-' + e)
            }),
            (r.getTipElement = function () {
              return (
                (this.tip = this.tip || Wt(this.config.template)[0]), this.tip
              )
            }),
            (r.setContent = function () {
              var e = Wt(this.getTipElement())
              this.setElementContent(e.find('.popover-header'), this.getTitle())
              var t = this._getContent()
              'function' == typeof t && (t = t.call(this.element)),
                this.setElementContent(e.find('.popover-body'), t),
                e.removeClass('fade show')
            }),
            (r._getContent = function () {
              return (
                this.element.getAttribute('data-content') || this.config.content
              )
            }),
            (r._cleanTipClass = function () {
              var e = Wt(this.getTipElement()),
                t = e.attr('class').match(Vt)
              null !== t && 0 < t.length && e.removeClass(t.join(''))
            }),
            (o._jQueryInterface = function (e) {
              return this.each(function () {
                var t = Wt(this).data(Ut),
                  n = 'object' == typeof e ? e : null
                if (
                  (t || !/destroy|hide/.test(e)) &&
                  (t || ((t = new o(this, n)), Wt(this).data(Ut, t)),
                  'string' == typeof e)
                ) {
                  if (void 0 === t[e])
                    throw new TypeError('No method named "' + e + '"')
                  t[e]()
                }
              })
            }),
            i(o, null, [
              {
                key: 'VERSION',
                get: function () {
                  return '4.1.3'
                }
              },
              {
                key: 'Default',
                get: function () {
                  return Xt
                }
              },
              {
                key: 'NAME',
                get: function () {
                  return Bt
                }
              },
              {
                key: 'DATA_KEY',
                get: function () {
                  return Ut
                }
              },
              {
                key: 'Event',
                get: function () {
                  return Jt
                }
              },
              {
                key: 'EVENT_KEY',
                get: function () {
                  return Kt
                }
              },
              {
                key: 'DefaultType',
                get: function () {
                  return Gt
                }
              }
            ]),
            o
          )
        })(En)),
        (Wt.fn[Bt] = Zt._jQueryInterface),
        (Wt.fn[Bt].Constructor = Zt),
        (Wt.fn[Bt].noConflict = function () {
          return (Wt.fn[Bt] = Qt), Zt._jQueryInterface
        }),
        Zt),
      jn =
        ((tn = 'scrollspy'),
        (on = '.' + (nn = 'bs.scrollspy')),
        (rn = (en = t).fn[tn]),
        (an = { offset: 10, method: 'auto', target: '' }),
        (sn = {
          offset: 'number',
          method: 'string',
          target: '(string|element)'
        }),
        (ln = {
          ACTIVATE: 'activate' + on,
          SCROLL: 'scroll' + on,
          LOAD_DATA_API: 'load' + on + '.data-api'
        }),
        'dropdown-item',
        (cn = 'active'),
        '[data-spy="scroll"]',
        '.active',
        (un = '.nav, .list-group'),
        (dn = '.nav-link'),
        '.nav-item',
        (pn = '.list-group-item'),
        '.dropdown',
        '.dropdown-item',
        '.dropdown-toggle',
        'offset',
        (fn = 'position'),
        (hn = (function () {
          function e (e, t) {
            var n = this
            ;(this._element = e),
              (this._scrollElement = 'BODY' === e.tagName ? window : e),
              (this._config = this._getConfig(t)),
              (this._selector =
                this._config.target +
                ' ' +
                dn +
                ',' +
                this._config.target +
                ' ' +
                pn +
                ',' +
                this._config.target +
                ' .dropdown-item'),
              (this._offsets = []),
              (this._targets = []),
              (this._activeTarget = null),
              (this._scrollHeight = 0),
              en(this._scrollElement).on(ln.SCROLL, function (e) {
                return n._process(e)
              }),
              this.refresh(),
              this._process()
          }
          var t = e.prototype
          return (
            (t.refresh = function () {
              var e = this,
                t =
                  this._scrollElement === this._scrollElement.window
                    ? 'offset'
                    : fn,
                n = 'auto' === this._config.method ? t : this._config.method,
                i = n === fn ? this._getScrollTop() : 0
              ;(this._offsets = []),
                (this._targets = []),
                (this._scrollHeight = this._getScrollHeight()),
                [].slice
                  .call(document.querySelectorAll(this._selector))
                  .map(function (e) {
                    var t,
                      o = J.getSelectorFromElement(e)
                    if ((o && (t = document.querySelector(o)), t)) {
                      var r = t.getBoundingClientRect()
                      if (r.width || r.height) return [en(t)[n]().top + i, o]
                    }
                    return null
                  })
                  .filter(function (e) {
                    return e
                  })
                  .sort(function (e, t) {
                    return e[0] - t[0]
                  })
                  .forEach(function (t) {
                    e._offsets.push(t[0]), e._targets.push(t[1])
                  })
            }),
            (t.dispose = function () {
              en.removeData(this._element, nn),
                en(this._scrollElement).off(on),
                (this._element = null),
                (this._scrollElement = null),
                (this._config = null),
                (this._selector = null),
                (this._offsets = null),
                (this._targets = null),
                (this._activeTarget = null),
                (this._scrollHeight = null)
            }),
            (t._getConfig = function (e) {
              if (
                'string' !=
                typeof (e = o({}, an, 'object' == typeof e && e ? e : {}))
                  .target
              ) {
                var t = en(e.target).attr('id')
                t || ((t = J.getUID(tn)), en(e.target).attr('id', t)),
                  (e.target = '#' + t)
              }
              return J.typeCheckConfig(tn, e, sn), e
            }),
            (t._getScrollTop = function () {
              return this._scrollElement === window
                ? this._scrollElement.pageYOffset
                : this._scrollElement.scrollTop
            }),
            (t._getScrollHeight = function () {
              return (
                this._scrollElement.scrollHeight ||
                Math.max(
                  document.body.scrollHeight,
                  document.documentElement.scrollHeight
                )
              )
            }),
            (t._getOffsetHeight = function () {
              return this._scrollElement === window
                ? window.innerHeight
                : this._scrollElement.getBoundingClientRect().height
            }),
            (t._process = function () {
              var e = this._getScrollTop() + this._config.offset,
                t = this._getScrollHeight(),
                n = this._config.offset + t - this._getOffsetHeight()
              if ((this._scrollHeight !== t && this.refresh(), n <= e)) {
                var i = this._targets[this._targets.length - 1]
                this._activeTarget !== i && this._activate(i)
              } else {
                if (
                  this._activeTarget &&
                  e < this._offsets[0] &&
                  0 < this._offsets[0]
                )
                  return (this._activeTarget = null), void this._clear()
                for (var o = this._offsets.length; o--; )
                  this._activeTarget !== this._targets[o] &&
                    e >= this._offsets[o] &&
                    (void 0 === this._offsets[o + 1] ||
                      e < this._offsets[o + 1]) &&
                    this._activate(this._targets[o])
              }
            }),
            (t._activate = function (e) {
              ;(this._activeTarget = e), this._clear()
              var t = this._selector.split(',')
              t = t.map(function (t) {
                return (
                  t + '[data-target="' + e + '"],' + t + '[href="' + e + '"]'
                )
              })
              var n = en([].slice.call(document.querySelectorAll(t.join(','))))
              n.hasClass('dropdown-item')
                ? (n
                    .closest('.dropdown')
                    .find('.dropdown-toggle')
                    .addClass(cn),
                  n.addClass(cn))
                : (n.addClass(cn),
                  n
                    .parents(un)
                    .prev(dn + ', ' + pn)
                    .addClass(cn),
                  n
                    .parents(un)
                    .prev('.nav-item')
                    .children(dn)
                    .addClass(cn)),
                en(this._scrollElement).trigger(ln.ACTIVATE, {
                  relatedTarget: e
                })
            }),
            (t._clear = function () {
              var e = [].slice.call(document.querySelectorAll(this._selector))
              en(e)
                .filter('.active')
                .removeClass(cn)
            }),
            (e._jQueryInterface = function (t) {
              return this.each(function () {
                var n = en(this).data(nn)
                if (
                  (n ||
                    ((n = new e(this, 'object' == typeof t && t)),
                    en(this).data(nn, n)),
                  'string' == typeof t)
                ) {
                  if (void 0 === n[t])
                    throw new TypeError('No method named "' + t + '"')
                  n[t]()
                }
              })
            }),
            i(e, null, [
              {
                key: 'VERSION',
                get: function () {
                  return '4.1.3'
                }
              },
              {
                key: 'Default',
                get: function () {
                  return an
                }
              }
            ]),
            e
          )
        })()),
        en(window).on(ln.LOAD_DATA_API, function () {
          for (
            var e = [].slice.call(
                document.querySelectorAll('[data-spy="scroll"]')
              ),
              t = e.length;
            t--;

          ) {
            var n = en(e[t])
            hn._jQueryInterface.call(n, n.data())
          }
        }),
        (en.fn[tn] = hn._jQueryInterface),
        (en.fn[tn].Constructor = hn),
        (en.fn[tn].noConflict = function () {
          return (en.fn[tn] = rn), hn._jQueryInterface
        }),
        hn),
      Dn =
        ((_n = '.' + (mn = 'bs.tab')),
        (vn = (gn = t).fn.tab),
        (yn = {
          HIDE: 'hide' + _n,
          HIDDEN: 'hidden' + _n,
          SHOW: 'show' + _n,
          SHOWN: 'shown' + _n,
          CLICK_DATA_API: 'click' + _n + '.data-api'
        }),
        'dropdown-menu',
        (bn = 'active'),
        'disabled',
        'fade',
        (wn = 'show'),
        '.dropdown',
        '.nav, .list-group',
        (kn = '.active'),
        (Tn = '> li > .active'),
        '[data-toggle="tab"], [data-toggle="pill"], [data-toggle="list"]',
        '.dropdown-toggle',
        '> .dropdown-menu .active',
        (xn = (function () {
          function e (e) {
            this._element = e
          }
          var t = e.prototype
          return (
            (t.show = function () {
              var e = this
              if (
                !(
                  (this._element.parentNode &&
                    this._element.parentNode.nodeType === Node.ELEMENT_NODE &&
                    gn(this._element).hasClass(bn)) ||
                  gn(this._element).hasClass('disabled')
                )
              ) {
                var t,
                  n,
                  i = gn(this._element).closest('.nav, .list-group')[0],
                  o = J.getSelectorFromElement(this._element)
                if (i) {
                  var r = 'UL' === i.nodeName ? Tn : kn
                  n = (n = gn.makeArray(gn(i).find(r)))[n.length - 1]
                }
                var a = gn.Event(yn.HIDE, { relatedTarget: this._element }),
                  s = gn.Event(yn.SHOW, { relatedTarget: n })
                if (
                  (n && gn(n).trigger(a),
                  gn(this._element).trigger(s),
                  !s.isDefaultPrevented() && !a.isDefaultPrevented())
                ) {
                  o && (t = document.querySelector(o)),
                    this._activate(this._element, i)
                  var l = function () {
                    var t = gn.Event(yn.HIDDEN, { relatedTarget: e._element }),
                      i = gn.Event(yn.SHOWN, { relatedTarget: n })
                    gn(n).trigger(t), gn(e._element).trigger(i)
                  }
                  t ? this._activate(t, t.parentNode, l) : l()
                }
              }
            }),
            (t.dispose = function () {
              gn.removeData(this._element, mn), (this._element = null)
            }),
            (t._activate = function (e, t, n) {
              var i = this,
                o = ('UL' === t.nodeName
                  ? gn(t).find(Tn)
                  : gn(t).children(kn))[0],
                r = n && o && gn(o).hasClass('fade'),
                a = function () {
                  return i._transitionComplete(e, o, n)
                }
              if (o && r) {
                var s = J.getTransitionDurationFromElement(o)
                gn(o)
                  .one(J.TRANSITION_END, a)
                  .emulateTransitionEnd(s)
              } else a()
            }),
            (t._transitionComplete = function (e, t, n) {
              if (t) {
                gn(t).removeClass(wn + ' ' + bn)
                var i = gn(t.parentNode).find('> .dropdown-menu .active')[0]
                i && gn(i).removeClass(bn),
                  'tab' === t.getAttribute('role') &&
                    t.setAttribute('aria-selected', !1)
              }
              if (
                (gn(e).addClass(bn),
                'tab' === e.getAttribute('role') &&
                  e.setAttribute('aria-selected', !0),
                J.reflow(e),
                gn(e).addClass(wn),
                e.parentNode && gn(e.parentNode).hasClass('dropdown-menu'))
              ) {
                var o = gn(e).closest('.dropdown')[0]
                if (o) {
                  var r = [].slice.call(o.querySelectorAll('.dropdown-toggle'))
                  gn(r).addClass(bn)
                }
                e.setAttribute('aria-expanded', !0)
              }
              n && n()
            }),
            (e._jQueryInterface = function (t) {
              return this.each(function () {
                var n = gn(this),
                  i = n.data(mn)
                if (
                  (i || ((i = new e(this)), n.data(mn, i)),
                  'string' == typeof t)
                ) {
                  if (void 0 === i[t])
                    throw new TypeError('No method named "' + t + '"')
                  i[t]()
                }
              })
            }),
            i(e, null, [
              {
                key: 'VERSION',
                get: function () {
                  return '4.1.3'
                }
              }
            ]),
            e
          )
        })()),
        gn(document).on(
          yn.CLICK_DATA_API,
          '[data-toggle="tab"], [data-toggle="pill"], [data-toggle="list"]',
          function (e) {
            e.preventDefault(), xn._jQueryInterface.call(gn(this), 'show')
          }
        ),
        (gn.fn.tab = xn._jQueryInterface),
        (gn.fn.tab.Constructor = xn),
        (gn.fn.tab.noConflict = function () {
          return (gn.fn.tab = vn), xn._jQueryInterface
        }),
        xn)
    !(function (e) {
      if (void 0 === e)
        throw new TypeError(
          "Bootstrap's JavaScript requires jQuery. jQuery must be included before Bootstrap's JavaScript."
        )
      var t = e.fn.jquery.split(' ')[0].split('.')
      if (
        (t[0] < 2 && t[1] < 9) ||
        (1 === t[0] && 9 === t[1] && t[2] < 1) ||
        4 <= t[0]
      )
        throw new Error(
          "Bootstrap's JavaScript requires at least jQuery v1.9.1 but less than v4.0.0"
        )
    })(t),
      (e.Util = J),
      (e.Alert = Z),
      (e.Button = ee),
      (e.Carousel = te),
      (e.Collapse = ne),
      (e.Dropdown = Cn),
      (e.Modal = Sn),
      (e.Popover = An),
      (e.Scrollspy = jn),
      (e.Tab = Dn),
      (e.Tooltip = En),
      Object.defineProperty(e, '__esModule', { value: !0 })
  }),
  (window =
    'undefined' != typeof global
      ? global
      : 'undefined' != typeof self
      ? self
      : 'undefined' != typeof window
      ? window
      : {}),
  (document = window.document || {}),
  (function (e, t) {
    'function' == typeof require &&
    'object' == typeof exports &&
    'object' == typeof module
      ? e(require('jquery'))
      : 'function' == typeof define && define.amd
      ? define(['jquery'], e)
      : e(t.jQuery)
  })(function (e) {
    'use strict'
    var t = 0,
      n = {},
      i = {},
      o = window.emojione,
      r = []
    function a (e) {
      o ? e() : r.push(e)
    }
    var s,
      l,
      c,
      u =
        'data:image/gif;base64,R0lGODlhAQABAJH/AP///wAAAMDAwAAAACH5BAEAAAIALAAAAAABAAEAAAICVAEAOw==',
      d = [].slice,
      p = 'emojionearea',
      f = 0,
      h = '&#8203;'
    function g (t, i, o) {
      var r = !0,
        a = 1
      if (i) {
        i = i.toLowerCase()
        do {
          var s = 1 == a ? '@' + i : i
          n[t.id][s] &&
            n[t.id][s].length &&
            e.each(n[t.id][s], function (e, n) {
              return (r = !1 !== n.apply(t, o || []))
            })
        } while (r && a--)
      }
      return r
    }
    function m (t, n, o, r) {
      ;(r =
        r ||
        function (t, n) {
          return e(n.currentTarget)
        }),
        e.each(o, function (a, s) {
          ;(a = e.isArray(o) ? s : a),
            (i[t.id][s] || (i[t.id][s] = [])).push([n, a, r])
        })
    }
    function _ (e, t, n) {
      var i,
        r = o.imageType
      i = 'svg' == r ? o.imagePathSVG : o.imagePathPNG
      var a = ''
      n &&
        (a = n
          .substr(1, n.length - 2)
          .replace(/_/g, ' ')
          .replace(/\w\S*/g, function (e) {
            return e.charAt(0).toUpperCase() + e.substr(1).toLowerCase()
          }))
      var s = ''
      return (
        t.uc_base && f > 4
          ? ((s = t.uc_base), (t = t.uc_output.toUpperCase()))
          : (s = t),
        e
          .replace('{name}', n || '')
          .replace('{friendlyName}', a)
          .replace('{img}', i + (f < 2 ? s.toUpperCase() : s) + '.' + r)
          .replace('{uni}', t)
          .replace('{alt}', o.convert(t))
      )
    }
    function v (e, t, n) {
      return e.replace(/:?\+?[\w_\-]+:?/g, function (e) {
        e = ':' + e.replace(/:$/, '').replace(/^:/, '') + ':'
        var i = o.emojioneList[e]
        return i
          ? f > 4
            ? _(t, i, e)
            : (f > 3 && (i = i.unicode), _(t, i[i.length - 1], e))
          : n
          ? ''
          : e
      })
    }
    function y (e) {
      var t, n
      if (window.getSelection) {
        if ((t = window.getSelection()).getRangeAt && t.rangeCount) {
          ;(n = t.getRangeAt(0)).deleteContents()
          var i = document.createElement('div')
          i.innerHTML = e
          for (
            var o, r, a = document.createDocumentFragment();
            (o = i.firstChild);

          )
            r = a.appendChild(o)
          n.insertNode(a),
            r &&
              ((n = n.cloneRange()).setStartAfter(r),
              n.collapse(!0),
              t.removeAllRanges(),
              t.addRange(n))
        }
      } else document.selection && 'Control' != document.selection.type && document.selection.createRange().pasteHTML(e)
    }
    function b () {
      return window.emojioneVersion || '3.1.2'
    }
    function w (e) {
      return 'object' == typeof e
    }
    function k (e) {
      var t
      return e.cacheBustParam
        ? ((t = e.cacheBustParam),
          w(e.jsEscapeMap)
            ? '?v=1.2.4' === t
              ? '2.0.0'
              : '?v=2.0.1' === t
              ? '2.1.0'
              : '?v=2.1.1' === t
              ? '2.1.1'
              : '?v=2.1.2' === t
              ? '2.1.2'
              : '?v=2.1.3' === t
              ? '2.1.3'
              : '?v=2.1.4' === t
              ? '2.1.4'
              : '2.2.7'
            : '1.5.2')
        : e.emojiVersion
    }
    function T (e) {
      switch (e) {
        case '1.5.2':
          return 0
        case '2.0.0':
          return 1
        case '2.1.0':
        case '2.1.1':
          return 2
        case '2.1.2':
          return 3
        case '2.1.3':
        case '2.1.4':
        case '2.2.7':
          return 4
        case '3.0.1':
        case '3.0.2':
        case '3.0.3':
        case '3.0':
          return 5
        default:
          return 6
      }
    }
    function x () {
      if (e.fn.emojioneArea && e.fn.emojioneArea.defaults)
        return e.fn.emojioneArea.defaults
      var t = {
          attributes: {
            dir: 'ltr',
            spellcheck: !1,
            autocomplete: 'off',
            autocorrect: 'off',
            autocapitalize: 'off'
          },
          search: !0,
          placeholder: null,
          emojiPlaceholder: ':smiley:',
          searchPlaceholder: 'SEARCH',
          container: null,
          hideSource: !0,
          shortnames: !0,
          sprite: !0,
          pickerPosition: 'top',
          filtersPosition: 'top',
          searchPosition: 'top',
          hidePickerOnBlur: !0,
          buttonTitle: 'Use the TAB key to insert emoji faster',
          tones: !0,
          tonesStyle: 'bullet',
          inline: null,
          saveEmojisAs: 'unicode',
          shortcuts: !0,
          autocomplete: !0,
          autocompleteTones: !1,
          standalone: !1,
          useInternalCDN: !0,
          imageType: 'png',
          recentEmojis: !0,
          textcomplete: { maxCount: 15, placement: null }
        },
        n = T(o ? k(o) : b())
      return (
        (t.filters =
          n > 4
            ? {
                tones: {
                  title: 'Diversity',
                  emoji:
                    'open_hands raised_hands palms_up_together clap pray thumbsup thumbsdown punch fist left_facing_fist right_facing_fist fingers_crossed v metal love_you_gesture ok_hand point_left point_right point_up_2 point_down point_up raised_hand raised_back_of_hand hand_splayed vulcan wave call_me muscle middle_finger writing_hand selfie nail_care ear nose baby boy girl man woman blond-haired_woman blond-haired_man older_man older_woman man_with_chinese_cap woman_wearing_turban man_wearing_turban woman_police_officer man_police_officer woman_construction_worker man_construction_worker woman_guard man_guard woman_detective man_detective woman_health_worker man_health_worker woman_farmer man_farmer woman_cook man_cook woman_student man_student woman_singer man_singer woman_teacher man_teacher woman_factory_worker man_factory_worker woman_technologist man_technologist woman_office_worker man_office_worker woman_mechanic man_mechanic woman_scientist man_scientist woman_artist man_artist woman_firefighter man_firefighter woman_pilot man_pilot woman_astronaut man_astronaut woman_judge man_judge mrs_claus santa princess prince bride_with_veil man_in_tuxedo angel pregnant_woman breast_feeding woman_bowing man_bowing man_tipping_hand woman_tipping_hand man_gesturing_no woman_gesturing_no man_gesturing_ok woman_gesturing_ok man_raising_hand woman_raising_hand woman_facepalming man_facepalming woman_shrugging man_shrugging man_pouting woman_pouting man_frowning woman_frowning man_getting_haircut woman_getting_haircut man_getting_face_massage woman_getting_face_massage man_in_business_suit_levitating dancer man_dancing woman_walking man_walking woman_running man_running adult child older_adult bearded_person woman_with_headscarf woman_mage man_mage woman_fairy man_fairy woman_vampire man_vampire mermaid merman woman_elf man_elf snowboarder woman_lifting_weights man_lifting_weights woman_cartwheeling man_cartwheeling woman_bouncing_ball man_bouncing_ball woman_playing_handball man_playing_handball woman_golfing man_golfing woman_surfing man_surfing woman_swimming man_swimming woman_playing_water_polo man_playing_water_polo woman_rowing_boat man_rowing_boat horse_racing woman_biking man_biking woman_mountain_biking man_mountain_biking woman_juggling man_juggling woman_in_steamy_room man_in_steamy_room woman_climbing man_climbing woman_in_lotus_position man_in_lotus_position bath person_in_bed'
                },
                recent: { icon: 'clock3', title: 'Recent', emoji: '' },
                smileys_people: {
                  icon: 'yum',
                  title: 'Smileys & People',
                  emoji:
                    'grinning smiley smile grin laughing sweat_smile joy rofl relaxed blush innocent slight_smile upside_down wink relieved crazy_face star_struck heart_eyes kissing_heart kissing kissing_smiling_eyes kissing_closed_eyes yum stuck_out_tongue_winking_eye stuck_out_tongue_closed_eyes stuck_out_tongue money_mouth hugging nerd sunglasses cowboy smirk unamused disappointed pensive worried face_with_raised_eyebrow face_with_monocle confused slight_frown frowning2 persevere confounded tired_face weary triumph angry rage face_with_symbols_over_mouth no_mouth neutral_face expressionless hushed frowning anguished open_mouth astonished dizzy_face exploding_head flushed scream fearful cold_sweat cry disappointed_relieved drooling_face sob sweat sleepy sleeping rolling_eyes thinking shushing_face face_with_hand_over_mouth lying_face grimacing zipper_mouth face_vomiting nauseated_face sneezing_face mask thermometer_face head_bandage smiling_imp imp japanese_ogre japanese_goblin poop ghost skull skull_crossbones alien space_invader robot jack_o_lantern clown smiley_cat smile_cat joy_cat heart_eyes_cat smirk_cat kissing_cat scream_cat crying_cat_face pouting_cat open_hands raised_hands palms_up_together clap pray handshake thumbsup thumbsdown punch fist left_facing_fist right_facing_fist fingers_crossed v metal love_you_gesture ok_hand point_left point_right point_up_2 point_down point_up raised_hand raised_back_of_hand hand_splayed vulcan wave call_me muscle middle_finger writing_hand selfie nail_care ring lipstick kiss lips tongue ear nose footprints eye eyes speaking_head bust_in_silhouette busts_in_silhouette baby boy girl man woman blond-haired_woman blond_haired_man older_man older_woman man_with_chinese_cap woman_wearing_turban man_wearing_turban woman_police_officer police_officer woman_construction_worker construction_worker woman_guard guard woman_detective detective woman_health_worker man_health_worker woman_farmer man_farmer woman_cook man_cook woman_student man_student woman_singer man_singer woman_teacher man_teacher woman_factory_worker man_factory_worker woman_technologist man_technologist woman_office_worker man_office_worker woman_mechanic man_mechanic woman_scientist man_scientist woman_artist man_artist woman_firefighter man_firefighter woman_pilot man_pilot woman_astronaut man_astronaut woman_judge man_judge mrs_claus santa princess prince bride_with_veil man_in_tuxedo angel pregnant_woman breast_feeding woman_bowing man_bowing woman_tipping_hand man_tipping_hand woman_gesturing_no man_gesturing_no woman_gesturing_ok man_gesturing_ok woman_raising_hand man_raising_hand woman_facepalming man_facepalming woman_shrugging man_shrugging woman_pouting man_pouting woman_frowning man_frowning woman_getting_haircut man_getting_haircut woman_getting_face_massage man_getting_face_massage man_in_business_suit_levitating dancer man_dancing women_with_bunny_ears_partying men_with_bunny_ears_partying woman_walking man_walking woman_running man_running couple two_women_holding_hands two_men_holding_hands couple_with_heart couple_ww couple_mm couplekiss kiss_ww kiss_mm family family_mwg family_mwgb family_mwbb family_mwgg family_wwb family_wwg family_wwgb family_wwbb family_wwgg family_mmb family_mmg family_mmgb family_mmbb family_mmgg family_woman_boy family_woman_girl family_woman_girl_boy family_woman_boy_boy family_woman_girl_girl family_man_boy family_man_girl family_man_girl_boy family_man_boy_boy family_man_girl_girl bearded_person woman_with_headscarf woman_mage man_mage woman_fairy man_fairy woman_vampire man_vampire mermaid merman woman_elf man_elf woman_genie man_genie woman_zombie man_zombie womans_clothes shirt jeans necktie dress bikini kimono high_heel sandal boot mans_shoe athletic_shoe womans_hat tophat mortar_board crown helmet_with_cross school_satchel pouch purse handbag briefcase eyeglasses dark_sunglasses closed_umbrella umbrella2 brain billed_cap scarf gloves coat socks '
                },
                animals_nature: {
                  icon: 'hamster',
                  title: 'Animals & Nature',
                  emoji:
                    'dog cat mouse hamster rabbit fox bear panda_face koala tiger lion_face cow pig pig_nose frog monkey_face see_no_evil hear_no_evil speak_no_evil monkey chicken penguin bird baby_chick hatching_chick hatched_chick duck eagle owl bat wolf boar horse unicorn bee bug butterfly snail shell beetle ant spider spider_web turtle snake lizard scorpion crab squid octopus shrimp tropical_fish fish blowfish dolphin shark whale whale2 crocodile leopard tiger2 water_buffalo ox cow2 deer dromedary_camel camel elephant rhino gorilla racehorse pig2 goat ram sheep dog2 poodle cat2 rooster turkey dove rabbit2 mouse2 rat chipmunk dragon giraffe zebra hedgehog sauropod t_rex cricket dragon_face feet cactus christmas_tree evergreen_tree deciduous_tree palm_tree seedling herb shamrock four_leaf_clover bamboo tanabata_tree leaves fallen_leaf maple_leaf mushroom ear_of_rice bouquet tulip rose wilted_rose sunflower blossom cherry_blossom hibiscus earth_americas earth_africa earth_asia full_moon waning_gibbous_moon last_quarter_moon waning_crescent_moon new_moon waxing_crescent_moon first_quarter_moon waxing_gibbous_moon new_moon_with_face full_moon_with_face sun_with_face first_quarter_moon_with_face last_quarter_moon_with_face crescent_moon dizzy star star2 sparkles zap fire boom comet sunny white_sun_small_cloud partly_sunny white_sun_cloud white_sun_rain_cloud rainbow cloud cloud_rain thunder_cloud_rain cloud_lightning cloud_snow snowman2 snowman snowflake wind_blowing_face dash cloud_tornado fog ocean droplet sweat_drops umbrella '
                },
                food_drink: {
                  icon: 'pizza',
                  title: 'Food & Drink',
                  emoji:
                    'green_apple apple pear tangerine lemon banana watermelon grapes strawberry melon cherries peach pineapple kiwi avocado tomato eggplant cucumber carrot corn hot_pepper potato sweet_potato chestnut peanuts honey_pot croissant bread french_bread cheese egg cooking bacon pancakes fried_shrimp poultry_leg meat_on_bone pizza hotdog hamburger fries stuffed_flatbread taco burrito salad shallow_pan_of_food spaghetti ramen stew fish_cake sushi bento curry rice_ball rice rice_cracker oden dango shaved_ice ice_cream icecream cake birthday custard lollipop candy chocolate_bar popcorn doughnut cookie milk baby_bottle coffee tea sake beer beers champagne_glass wine_glass tumbler_glass cocktail tropical_drink champagne spoon fork_and_knife fork_knife_plate dumpling fortune_cookie takeout_box chopsticks bowl_with_spoon cup_with_straw coconut broccoli pie pretzel cut_of_meat sandwich canned_food'
                },
                activity: {
                  icon: 'basketball',
                  title: 'Activity',
                  emoji:
                    'soccer basketball football baseball tennis volleyball rugby_football 8ball ping_pong badminton goal hockey field_hockey cricket_game golf bow_and_arrow fishing_pole_and_fish boxing_glove martial_arts_uniform ice_skate ski skier snowboarder woman_lifting_weights man_lifting_weights person_fencing women_wrestling men_wrestling woman_cartwheeling man_cartwheeling woman_bouncing_ball man_bouncing_ball woman_playing_handball man_playing_handball woman_golfing man_golfing woman_surfing man_surfing woman_swimming man_swimming woman_playing_water_polo man_playing_water_polo woman_rowing_boat man_rowing_boat horse_racing woman_biking man_biking woman_mountain_biking man_mountain_biking woman_in_steamy_room man_in_steamy_room woman_climbing man_climbing woman_in_lotus_position man_in_lotus_position running_shirt_with_sash medal military_medal first_place second_place third_place trophy rosette reminder_ribbon ticket tickets circus_tent woman_juggling man_juggling performing_arts art clapper microphone headphones musical_score musical_keyboard drum saxophone trumpet guitar violin game_die dart bowling video_game slot_machine sled curling_stone '
                },
                travel_places: {
                  icon: 'rocket',
                  title: 'Travel & Places',
                  emoji:
                    'red_car taxi blue_car bus trolleybus race_car police_car ambulance fire_engine minibus truck articulated_lorry tractor scooter bike motor_scooter motorcycle rotating_light oncoming_police_car oncoming_bus oncoming_automobile oncoming_taxi aerial_tramway mountain_cableway suspension_railway railway_car train mountain_railway monorail bullettrain_side bullettrain_front light_rail steam_locomotive train2 metro tram station helicopter airplane_small airplane airplane_departure airplane_arriving rocket satellite_orbital seat canoe sailboat motorboat speedboat cruise_ship ferry ship anchor construction fuelpump busstop vertical_traffic_light traffic_light map moyai statue_of_liberty fountain tokyo_tower european_castle japanese_castle stadium ferris_wheel roller_coaster carousel_horse beach_umbrella beach island mountain mountain_snow mount_fuji volcano desert camping tent railway_track motorway construction_site factory house house_with_garden homes house_abandoned office department_store post_office european_post_office hospital bank hotel convenience_store school love_hotel wedding classical_building church mosque synagogue kaaba shinto_shrine japan rice_scene park sunrise sunrise_over_mountains stars sparkler fireworks city_sunset city_dusk cityscape night_with_stars milky_way bridge_at_night foggy flying_saucer'
                },
                objects: {
                  icon: 'bulb',
                  title: 'Objects',
                  emoji:
                    'watch iphone calling computer keyboard desktop printer mouse_three_button trackball joystick compression minidisc floppy_disk cd dvd vhs camera camera_with_flash video_camera movie_camera projector film_frames telephone_receiver telephone pager fax tv radio microphone2 level_slider control_knobs stopwatch timer alarm_clock clock hourglass hourglass_flowing_sand satellite battery electric_plug bulb flashlight candle wastebasket oil money_with_wings dollar yen euro pound moneybag credit_card gem scales wrench hammer hammer_pick tools pick nut_and_bolt gear chains gun bomb knife dagger crossed_swords shield smoking coffin urn amphora crystal_ball prayer_beads barber alembic telescope microscope hole pill syringe thermometer toilet potable_water shower bathtub bath bellhop key key2 door couch bed sleeping_accommodation frame_photo shopping_bags shopping_cart gift balloon flags ribbon confetti_ball tada dolls izakaya_lantern wind_chime envelope envelope_with_arrow incoming_envelope e-mail love_letter inbox_tray outbox_tray package label mailbox_closed mailbox mailbox_with_mail mailbox_with_no_mail postbox postal_horn scroll page_with_curl page_facing_up bookmark_tabs bar_chart chart_with_upwards_trend chart_with_downwards_trend notepad_spiral calendar_spiral calendar date card_index card_box ballot_box file_cabinet clipboard file_folder open_file_folder dividers newspaper2 newspaper notebook notebook_with_decorative_cover ledger closed_book green_book blue_book orange_book books book bookmark link paperclip paperclips triangular_ruler straight_ruler pushpin round_pushpin scissors pen_ballpoint pen_fountain black_nib paintbrush crayon pencil pencil2 mag mag_right lock_with_ink_pen closed_lock_with_key lock unlock'
                },
                symbols: {
                  icon: 'heartpulse',
                  title: 'Symbols',
                  emoji:
                    'heart orange_heart yellow_heart green_heart blue_heart purple_heart black_heart broken_heart heart_exclamation two_hearts revolving_hearts heartbeat heartpulse sparkling_heart cupid gift_heart heart_decoration peace cross star_and_crescent om_symbol wheel_of_dharma star_of_david six_pointed_star menorah yin_yang orthodox_cross place_of_worship ophiuchus aries taurus gemini cancer leo virgo libra scorpius sagittarius capricorn aquarius pisces id atom accept radioactive biohazard mobile_phone_off vibration_mode u6709 u7121 u7533 u55b6 u6708 eight_pointed_black_star vs white_flower ideograph_advantage secret congratulations u5408 u6e80 u5272 u7981 a b ab cl o2 sos x o octagonal_sign no_entry name_badge no_entry_sign 100 anger hotsprings no_pedestrians do_not_litter no_bicycles non-potable_water underage no_mobile_phones no_smoking exclamation grey_exclamation question grey_question bangbang interrobang low_brightness high_brightness part_alternation_mark warning children_crossing trident fleur-de-lis beginner recycle white_check_mark u6307 chart sparkle eight_spoked_asterisk negative_squared_cross_mark globe_with_meridians diamond_shape_with_a_dot_inside m cyclone zzz atm wc wheelchair parking u7a7a sa passport_control customs baggage_claim left_luggage mens womens baby_symbol restroom put_litter_in_its_place cinema signal_strength koko symbols information_source abc abcd capital_abcd ng ok up cool new free zero one two three four five six seven eight nine keycap_ten 1234 hash asterisk arrow_forward pause_button play_pause stop_button record_button eject track_next track_previous fast_forward rewind arrow_double_up arrow_double_down arrow_backward arrow_up_small arrow_down_small arrow_right arrow_left arrow_up arrow_down arrow_upper_right arrow_lower_right arrow_lower_left arrow_upper_left arrow_up_down left_right_arrow arrow_right_hook leftwards_arrow_with_hook arrow_heading_up arrow_heading_down twisted_rightwards_arrows repeat repeat_one arrows_counterclockwise arrows_clockwise musical_note notes heavy_plus_sign heavy_minus_sign heavy_division_sign heavy_multiplication_x heavy_dollar_sign currency_exchange tm copyright registered wavy_dash curly_loop loop end back on top soon heavy_check_mark ballot_box_with_check radio_button white_circle black_circle red_circle blue_circle small_red_triangle small_red_triangle_down small_orange_diamond small_blue_diamond large_orange_diamond large_blue_diamond white_square_button black_square_button black_small_square white_small_square black_medium_small_square white_medium_small_square black_medium_square white_medium_square black_large_square white_large_square speaker mute sound loud_sound bell no_bell mega loudspeaker speech_left eye_in_speech_bubble speech_balloon thought_balloon anger_right spades clubs hearts diamonds black_joker flower_playing_cards mahjong clock1 clock2 clock3 clock4 clock5 clock6 clock7 clock8 clock9 clock10 clock11 clock12 clock130 clock230 clock330 clock430 clock530 clock630 clock730 clock830 clock930 clock1030 clock1130 clock1230'
                },
                flags: {
                  icon: 'flag_gb',
                  title: 'Flags',
                  emoji:
                    'flag_white flag_black checkered_flag triangular_flag_on_post rainbow_flag flag_af flag_ax flag_al flag_dz flag_as flag_ad flag_ao flag_ai flag_aq flag_ag flag_ar flag_am flag_aw flag_au flag_at flag_az flag_bs flag_bh flag_bd flag_bb flag_by flag_be flag_bz flag_bj flag_bm flag_bt flag_bo flag_ba flag_bw flag_br flag_io flag_vg flag_bn flag_bg flag_bf flag_bi flag_kh flag_cm flag_ca flag_ic flag_cv flag_bq flag_ky flag_cf flag_td flag_cl flag_cn flag_cx flag_cc flag_co flag_km flag_cg flag_cd flag_ck flag_cr flag_ci flag_hr flag_cu flag_cw flag_cy flag_cz flag_dk flag_dj flag_dm flag_do flag_ec flag_eg flag_sv flag_gq flag_er flag_ee flag_et flag_eu flag_fk flag_fo flag_fj flag_fi flag_fr flag_gf flag_pf flag_tf flag_ga flag_gm flag_ge flag_de flag_gh flag_gi flag_gr flag_gl flag_gd flag_gp flag_gu flag_gt flag_gg flag_gn flag_gw flag_gy flag_ht flag_hn flag_hk flag_hu flag_is flag_in flag_id flag_ir flag_iq flag_ie flag_im flag_il flag_it flag_jm flag_jp crossed_flags flag_je flag_jo flag_kz flag_ke flag_ki flag_xk flag_kw flag_kg flag_la flag_lv flag_lb flag_ls flag_lr flag_ly flag_li flag_lt flag_lu flag_mo flag_mk flag_mg flag_mw flag_my flag_mv flag_ml flag_mt flag_mh flag_mq flag_mr flag_mu flag_yt flag_mx flag_fm flag_md flag_mc flag_mn flag_me flag_ms flag_ma flag_mz flag_mm flag_na flag_nr flag_np flag_nl flag_nc flag_nz flag_ni flag_ne flag_ng flag_nu flag_nf flag_kp flag_mp flag_no flag_om flag_pk flag_pw flag_ps flag_pa flag_pg flag_py flag_pe flag_ph flag_pn flag_pl flag_pt flag_pr flag_qa flag_re flag_ro flag_ru flag_rw flag_ws flag_sm flag_st flag_sa flag_sn flag_rs flag_sc flag_sl flag_sg flag_sx flag_sk flag_si flag_gs flag_sb flag_so flag_za flag_kr flag_ss flag_es flag_lk flag_bl flag_sh flag_kn flag_lc flag_pm flag_vc flag_sd flag_sr flag_sz flag_se flag_ch flag_sy flag_tw flag_tj flag_tz flag_th flag_tl flag_tg flag_tk flag_to flag_tt flag_tn flag_tr flag_tm flag_tc flag_tv flag_vi flag_ug flag_ua flag_ae flag_gb flag_us flag_uy flag_uz flag_vu flag_va flag_ve flag_vn flag_wf flag_eh flag_ye flag_zm flag_zw flag_ac flag_ta flag_bv flag_hm flag_sj flag_um flag_ea flag_cp flag_dg flag_mf united_nations england scotland wales'
                }
              }
            : {
                tones: {
                  title: 'Diversity',
                  emoji:
                    'santa runner surfer swimmer lifter ear nose point_up_2 point_down point_left point_right punch wave ok_hand thumbsup thumbsdown clap open_hands boy girl man woman cop bride_with_veil person_with_blond_hair man_with_gua_pi_mao man_with_turban older_man grandma baby construction_worker princess angel information_desk_person guardsman dancer nail_care massage haircut muscle spy hand_splayed middle_finger vulcan no_good ok_woman bow raising_hand raised_hands person_frowning person_with_pouting_face pray rowboat bicyclist mountain_bicyclist walking bath metal point_up basketball_player fist raised_hand v writing_hand'
                },
                recent: { icon: 'clock3', title: 'Recent', emoji: '' },
                smileys_people: {
                  icon: 'yum',
                  title: 'Smileys & People',
                  emoji:
                    'grinning grimacing grin joy smiley smile sweat_smile laughing innocent wink blush slight_smile upside_down relaxed yum relieved heart_eyes kissing_heart kissing kissing_smiling_eyes kissing_closed_eyes stuck_out_tongue_winking_eye stuck_out_tongue_closed_eyes stuck_out_tongue money_mouth nerd sunglasses hugging smirk no_mouth neutral_face expressionless unamused rolling_eyes thinking flushed disappointed worried angry rage pensive confused slight_frown frowning2 persevere confounded tired_face weary triumph open_mouth scream fearful cold_sweat hushed frowning anguished cry disappointed_relieved sleepy sweat sob dizzy_face astonished zipper_mouth mask thermometer_face head_bandage sleeping zzz poop smiling_imp imp japanese_ogre japanese_goblin skull ghost alien robot smiley_cat smile_cat joy_cat heart_eyes_cat smirk_cat kissing_cat scream_cat crying_cat_face pouting_cat raised_hands clap wave thumbsup thumbsdown punch fist v ok_hand raised_hand open_hands muscle pray point_up point_up_2 point_down point_left point_right middle_finger hand_splayed metal vulcan writing_hand nail_care lips tongue ear nose eye eyes bust_in_silhouette busts_in_silhouette speaking_head baby boy girl man woman person_with_blond_hair older_man older_woman man_with_gua_pi_mao man_with_turban cop construction_worker guardsman spy santa angel princess bride_with_veil walking runner dancer dancers couple two_men_holding_hands two_women_holding_hands bow information_desk_person no_good ok_woman raising_hand person_with_pouting_face person_frowning haircut massage couple_with_heart couple_ww couple_mm couplekiss kiss_ww kiss_mm family family_mwg family_mwgb family_mwbb family_mwgg family_wwb family_wwg family_wwgb family_wwbb family_wwgg family_mmb family_mmg family_mmgb family_mmbb family_mmgg womans_clothes shirt jeans necktie dress bikini kimono lipstick kiss footprints high_heel sandal boot mans_shoe athletic_shoe womans_hat tophat helmet_with_cross mortar_board crown school_satchel pouch purse handbag briefcase eyeglasses dark_sunglasses ring closed_umbrella'
                },
                animals_nature: {
                  icon: 'hamster',
                  title: 'Animals & Nature',
                  emoji:
                    'dog cat mouse hamster rabbit bear panda_face koala tiger lion_face cow pig pig_nose frog octopus monkey_face see_no_evil hear_no_evil speak_no_evil monkey chicken penguin bird baby_chick hatching_chick hatched_chick wolf boar horse unicorn bee bug snail beetle ant spider scorpion crab snake turtle tropical_fish fish blowfish dolphin whale whale2 crocodile leopard tiger2 water_buffalo ox cow2 dromedary_camel camel elephant goat ram sheep racehorse pig2 rat mouse2 rooster turkey dove dog2 poodle cat2 rabbit2 chipmunk feet dragon dragon_face cactus christmas_tree evergreen_tree deciduous_tree palm_tree seedling herb shamrock four_leaf_clover bamboo tanabata_tree leaves fallen_leaf maple_leaf ear_of_rice hibiscus sunflower rose tulip blossom cherry_blossom bouquet mushroom chestnut jack_o_lantern shell spider_web earth_americas earth_africa earth_asia full_moon waning_gibbous_moon last_quarter_moon waning_crescent_moon new_moon waxing_crescent_moon first_quarter_moon waxing_gibbous_moon new_moon_with_face full_moon_with_face first_quarter_moon_with_face last_quarter_moon_with_face sun_with_face crescent_moon star star2 dizzy sparkles comet sunny white_sun_small_cloud partly_sunny white_sun_cloud white_sun_rain_cloud cloud cloud_rain thunder_cloud_rain cloud_lightning zap fire boom snowflake cloud_snow snowman2 snowman wind_blowing_face dash cloud_tornado fog umbrella2 umbrella droplet sweat_drops ocean'
                },
                food_drink: {
                  icon: 'pizza',
                  title: 'Food & Drink',
                  emoji:
                    'green_apple apple pear tangerine lemon banana watermelon grapes strawberry melon cherries peach pineapple tomato eggplant hot_pepper corn sweet_potato honey_pot bread cheese poultry_leg meat_on_bone fried_shrimp egg hamburger fries hotdog pizza spaghetti taco burrito ramen stew fish_cake sushi bento curry rice_ball rice rice_cracker oden dango shaved_ice ice_cream icecream cake birthday custard candy lollipop chocolate_bar popcorn doughnut cookie beer beers wine_glass cocktail tropical_drink champagne sake tea coffee baby_bottle fork_and_knife fork_knife_plate'
                },
                activity: {
                  icon: 'basketball',
                  title: 'Activity',
                  emoji:
                    'soccer basketball football baseball tennis volleyball rugby_football 8ball golf golfer ping_pong badminton hockey field_hockey cricket ski skier snowboarder ice_skate bow_and_arrow fishing_pole_and_fish rowboat swimmer surfer bath basketball_player lifter bicyclist mountain_bicyclist horse_racing levitate trophy running_shirt_with_sash medal military_medal reminder_ribbon rosette ticket tickets performing_arts art circus_tent microphone headphones musical_score musical_keyboard saxophone trumpet guitar violin clapper video_game space_invader dart game_die slot_machine bowling'
                },
                travel_places: {
                  icon: 'rocket',
                  title: 'Travel & Places',
                  emoji:
                    'red_car taxi blue_car bus trolleybus race_car police_car ambulance fire_engine minibus truck articulated_lorry tractor motorcycle bike rotating_light oncoming_police_car oncoming_bus oncoming_automobile oncoming_taxi aerial_tramway mountain_cableway suspension_railway railway_car train monorail bullettrain_side bullettrain_front light_rail mountain_railway steam_locomotive train2 metro tram station helicopter airplane_small airplane airplane_departure airplane_arriving sailboat motorboat speedboat ferry cruise_ship rocket satellite_orbital seat anchor construction fuelpump busstop vertical_traffic_light traffic_light checkered_flag ship ferris_wheel roller_coaster carousel_horse construction_site foggy tokyo_tower factory fountain rice_scene mountain mountain_snow mount_fuji volcano japan camping tent park motorway railway_track sunrise sunrise_over_mountains desert beach island city_sunset city_dusk cityscape night_with_stars bridge_at_night milky_way stars sparkler fireworks rainbow homes european_castle japanese_castle stadium statue_of_liberty house house_with_garden house_abandoned office department_store post_office european_post_office hospital bank hotel convenience_store school love_hotel wedding classical_building church mosque synagogue kaaba shinto_shrine'
                },
                objects: {
                  icon: 'bulb',
                  title: 'Objects',
                  emoji:
                    'watch iphone calling computer keyboard desktop printer mouse_three_button trackball joystick compression minidisc floppy_disk cd dvd vhs camera camera_with_flash video_camera movie_camera projector film_frames telephone_receiver telephone pager fax tv radio microphone2 level_slider control_knobs stopwatch timer alarm_clock clock hourglass_flowing_sand hourglass satellite battery electric_plug bulb flashlight candle wastebasket oil money_with_wings dollar yen euro pound moneybag credit_card gem scales wrench hammer hammer_pick tools pick nut_and_bolt gear chains gun bomb knife dagger crossed_swords shield smoking skull_crossbones coffin urn amphora crystal_ball prayer_beads barber alembic telescope microscope hole pill syringe thermometer label bookmark toilet shower bathtub key key2 couch sleeping_accommodation bed door bellhop frame_photo map beach_umbrella moyai shopping_bags balloon flags ribbon gift confetti_ball tada dolls wind_chime crossed_flags izakaya_lantern envelope envelope_with_arrow incoming_envelope e-mail love_letter postbox mailbox_closed mailbox mailbox_with_mail mailbox_with_no_mail package postal_horn inbox_tray outbox_tray scroll page_with_curl bookmark_tabs bar_chart chart_with_upwards_trend chart_with_downwards_trend page_facing_up date calendar calendar_spiral card_index card_box ballot_box file_cabinet clipboard notepad_spiral file_folder open_file_folder dividers newspaper2 newspaper notebook closed_book green_book blue_book orange_book notebook_with_decorative_cover ledger books book link paperclip paperclips scissors triangular_ruler straight_ruler pushpin round_pushpin triangular_flag_on_post flag_white flag_black closed_lock_with_key lock unlock lock_with_ink_pen pen_ballpoint pen_fountain black_nib pencil pencil2 crayon paintbrush mag mag_right'
                },
                symbols: {
                  icon: 'heartpulse',
                  title: 'Symbols',
                  emoji:
                    'heart yellow_heart green_heart blue_heart purple_heart broken_heart heart_exclamation two_hearts revolving_hearts heartbeat heartpulse sparkling_heart cupid gift_heart heart_decoration peace cross star_and_crescent om_symbol wheel_of_dharma star_of_david six_pointed_star menorah yin_yang orthodox_cross place_of_worship ophiuchus aries taurus gemini cancer leo virgo libra scorpius sagittarius capricorn aquarius pisces id atom u7a7a u5272 radioactive biohazard mobile_phone_off vibration_mode u6709 u7121 u7533 u55b6 u6708 eight_pointed_black_star vs accept white_flower ideograph_advantage secret congratulations u5408 u6e80 u7981 a b ab cl o2 sos no_entry name_badge no_entry_sign x o anger hotsprings no_pedestrians do_not_litter no_bicycles non-potable_water underage no_mobile_phones exclamation grey_exclamation question grey_question bangbang interrobang 100 low_brightness high_brightness trident fleur-de-lis part_alternation_mark warning children_crossing beginner recycle u6307 chart sparkle eight_spoked_asterisk negative_squared_cross_mark white_check_mark diamond_shape_with_a_dot_inside cyclone loop globe_with_meridians m atm sa passport_control customs baggage_claim left_luggage wheelchair no_smoking wc parking potable_water mens womens baby_symbol restroom put_litter_in_its_place cinema signal_strength koko ng ok up cool new free zero one two three four five six seven eight nine ten 1234 arrow_forward pause_button play_pause stop_button record_button track_next track_previous fast_forward rewind twisted_rightwards_arrows repeat repeat_one arrow_backward arrow_up_small arrow_down_small arrow_double_up arrow_double_down arrow_right arrow_left arrow_up arrow_down arrow_upper_right arrow_lower_right arrow_lower_left arrow_upper_left arrow_up_down left_right_arrow arrows_counterclockwise arrow_right_hook leftwards_arrow_with_hook arrow_heading_up arrow_heading_down hash asterisk information_source abc abcd capital_abcd symbols musical_note notes wavy_dash curly_loop heavy_check_mark arrows_clockwise heavy_plus_sign heavy_minus_sign heavy_division_sign heavy_multiplication_x heavy_dollar_sign currency_exchange copyright registered tm end back on top soon ballot_box_with_check radio_button white_circle black_circle red_circle large_blue_circle small_orange_diamond small_blue_diamond large_orange_diamond large_blue_diamond small_red_triangle black_small_square white_small_square black_large_square white_large_square small_red_triangle_down black_medium_square white_medium_square black_medium_small_square white_medium_small_square black_square_button white_square_button speaker sound loud_sound mute mega loudspeaker bell no_bell black_joker mahjong spades clubs hearts diamonds flower_playing_cards thought_balloon anger_right speech_balloon clock1 clock2 clock3 clock4 clock5 clock6 clock7 clock8 clock9 clock10 clock11 clock12 clock130 clock230 clock330 clock430 clock530 clock630 clock730 clock830 clock930 clock1030 clock1130 clock1230 eye_in_speech_bubble'
                },
                flags: {
                  icon: 'flag_gb',
                  title: 'Flags',
                  emoji:
                    'ac af al dz ad ao ai ag ar am aw au at az bs bh bd bb by be bz bj bm bt bo ba bw br bn bg bf bi cv kh cm ca ky cf td flag_cl cn co km cg flag_cd cr hr cu cy cz dk dj dm do ec eg sv gq er ee et fk fo fj fi fr pf ga gm ge de gh gi gr gl gd gu gt gn gw gy ht hn hk hu is in flag_id ir iq ie il it ci jm jp je jo kz ke ki xk kw kg la lv lb ls lr ly li lt lu mo mk mg mw my mv ml mt mh mr mu mx fm md mc mn me ms ma mz mm na nr np nl nc nz ni ne flag_ng nu kp no om pk pw ps pa pg py pe ph pl pt pr qa ro ru rw sh kn lc vc ws sm st flag_sa sn rs sc sl sg sk si sb so za kr es lk sd sr sz se ch sy tw tj tz th tl tg to tt tn tr flag_tm flag_tm ug ua ae gb us vi uy uz vu va ve vn wf eh ye zm zw re ax ta io bq cx cc gg im yt nf pn bl pm gs tk bv hm sj um ic ea cp dg as aq vg ck cw eu gf tf gp mq mp sx ss tc '
                }
              }),
        t
      )
    }
    function C (t) {
      var n = x()
      if (t && t.filters) {
        var i = n.filters
        e.each(t.filters, function (t, n) {
          return !w(n) || e.isEmptyObject(n)
            ? void delete i[t]
            : void e.each(n, function (e, n) {
                i[t][e] = n
              })
        }),
          (t.filters = i)
      }
      return e.extend({}, n, t)
    }
    function S (e, t) {
      return e.replace(c, function (e) {
        var n = o[0 === f ? 'jsecapeMap' : 'jsEscapeMap']
        return void 0 !== e && e in n ? _(t, n[e]) : e
      })
    }
    function E (e, t) {
      return (
        (e = e
          .replace(/&/g, '&amp;')
          .replace(/</g, '&lt;')
          .replace(/>/g, '&gt;')
          .replace(/"/g, '&quot;')
          .replace(/'/g, '&#x27;')
          .replace(/`/g, '&#x60;')
          .replace(/(?:\r\n|\r|\n)/g, '\n')
          .replace(/(\n+)/g, '<div>$1</div>')
          .replace(/\n/g, '<br/>')
          .replace(/<br\/><\/div>/g, '</div>')),
        t.shortnames && (e = o.shortnameToUnicode(e)),
        S(e, t.emojiTemplate)
          .replace(/\t/g, '&nbsp;&nbsp;&nbsp;&nbsp;')
          .replace(/  /g, '&nbsp;&nbsp;')
      )
    }
    function A (e, t) {
      switch (
        ((e = e
          .replace(/&#10;/g, '\n')
          .replace(/&#09;/g, '\t')
          .replace(/<img[^>]*alt="([^"]+)"[^>]*>/gi, '$1')
          .replace(/\n|\r/g, '')
          .replace(/<br[^>]*>/gi, '\n')
          .replace(/(?:<(?:div|p|ol|ul|li|pre|code|object)[^>]*>)+/gi, '<div>')
          .replace(/(?:<\/(?:div|p|ol|ul|li|pre|code|object)>)+/gi, '</div>')
          .replace(/\n<div><\/div>/gi, '\n')
          .replace(/<div><\/div>\n/gi, '\n')
          .replace(/(?:<div>)+<\/div>/gi, '\n')
          .replace(/([^\n])<\/div><div>/gi, '$1\n')
          .replace(/(?:<\/div>)+/gi, '</div>')
          .replace(/([^\n])<\/div>([^\n])/gi, '$1\n$2')
          .replace(/<\/div>/gi, '')
          .replace(/([^\n])<div>/gi, '$1\n')
          .replace(/\n<div>/gi, '\n')
          .replace(/<div>\n/gi, '\n\n')
          .replace(/<(?:[^>]+)?>/g, '')
          .replace(new RegExp(h, 'g'), '')
          .replace(/&nbsp;/g, ' ')
          .replace(/&lt;/g, '<')
          .replace(/&gt;/g, '>')
          .replace(/&quot;/g, '"')
          .replace(/&#x27;/g, "'")
          .replace(/&#x60;/g, '`')
          .replace(/&#60;/g, '<')
          .replace(/&#62;/g, '>')
          .replace(/&amp;/g, '&')),
        t.saveEmojisAs)
      ) {
        case 'image':
          e = S(e, t.emojiTemplate)
          break
        case 'shortname':
          e = o.toShort(e)
      }
      return e
    }
    function j () {
      var e = this,
        t = e.editor[0].offsetWidth - e.editor[0].clientWidth,
        n = parseInt(e.button.css('marginRight'))
      n !== t &&
        (e.button.css({ marginRight: t }),
        e.floatingPicker &&
          e.picker.css({ right: parseInt(e.picker.css('right')) - n + t }))
    }
    function D () {
      var t = this
      if (!t.sprite && t.lasyEmoji[0] && t.lasyEmoji.eq(0).is('.lazy-emoji')) {
        var n = t.picker.offset().top,
          i = n + t.picker.height() + 20
        t.lasyEmoji.each(function () {
          var t = e(this),
            o = t.offset().top
          if (
            (o > n &&
              o < i &&
              t.attr('src', t.data('src')).removeClass('lazy-emoji'),
            o > i)
          )
            return !1
        }),
          (t.lasyEmoji = t.lasyEmoji.filter('.lazy-emoji'))
      }
    }
    function $ (e, t) {
      return (t ? '' : '.') + p + (e ? '-' + e : '')
    }
    function N (t) {
      var n = e('<div/>', w(t) ? t : { class: $(t, !0) })
      return (
        e.each(d.call(arguments).slice(1), function (t, i) {
          e.isFunction(i) && (i = i.call(n)), i && e(i).appendTo(n)
        }),
        n
      )
    }
    function O () {
      return localStorage.getItem('recent_emojis') || ''
    }
    function I (t, n) {
      var i = O()
      if (!t.recent || t.recent !== i || n) {
        if (i.length) {
          var o,
            r,
            a = t.scrollArea.is('.skinnable')
          a ||
            ((o = t.scrollArea.scrollTop()),
            n && t.recentCategory.show(),
            (r = t.recentCategory.is(':visible')
              ? t.recentCategory.height()
              : 0))
          var s = v(i, t.emojiBtnTemplate, !0)
            .split('|')
            .join('')
          if (
            (t.recentCategory.children('.emojibtn').remove(),
            e(s).insertAfter(
              t.recentCategory.children('.emojionearea-category-title')
            ),
            t.recentCategory.children('.emojibtn').on('click', function () {
              t.trigger('emojibtn.click', e(this))
            }),
            t.recentFilter.show(),
            !a)
          ) {
            t.recentCategory.show()
            var l = t.recentCategory.height()
            r !== l && t.scrollArea.scrollTop(o + l - r)
          }
        } else
          t.recentFilter.hasClass('active') &&
            t.recentFilter
              .removeClass('active')
              .next()
              .addClass('active'),
            t.recentCategory.hide(),
            t.recentFilter.hide()
        t.recent = i
      }
    }
    function P (t, n, i) {
      ;(t.options = i = C(i)),
        (t.sprite = i.sprite && f < 3),
        (t.inline = null === i.inline ? n.is('INPUT') : i.inline),
        (t.shortnames = i.shortnames),
        (t.saveEmojisAs = i.saveEmojisAs),
        (t.standalone = i.standalone),
        (t.emojiTemplate =
          '<img alt="{alt}" class="emojione' +
          (t.sprite ? '-{uni}" src="' + u + '"/>' : 'emoji" src="{img}"/>')),
        (t.emojiTemplateAlt = t.sprite
          ? '<i class="emojione-{uni}"/>'
          : '<img class="emojioneemoji" src="{img}"/>'),
        (t.emojiBtnTemplate =
          '<i class="emojibtn" role="button" data-name="{name}" title="{friendlyName}">' +
          t.emojiTemplateAlt +
          '</i>'),
        (t.recentEmojis =
          i.recentEmojis &&
          (function () {
            var e = 'test'
            try {
              return localStorage.setItem(e, e), localStorage.removeItem(e), !0
            } catch (e) {
              return !1
            }
          })())
      var r = i.pickerPosition
      ;(t.floatingPicker = 'top' === r || 'bottom' === r),
        (t.source = n),
        (n.is(':disabled') || n.is('.disabled')) && t.disable()
      var a,
        c,
        d,
        _,
        b,
        k,
        T,
        x,
        S,
        P,
        L = n.is('TEXTAREA') || n.is('INPUT') ? 'val' : 'text',
        q = N(
          'tones',
          i.tones
            ? function () {
                this.addClass($('tones-' + i.tonesStyle, !0))
                for (var t = 0; t <= 5; t++)
                  this.append(
                    e('<i/>', {
                      class: 'btn-tone btn-tone-' + t + (t ? '' : ' active'),
                      'data-skin': t,
                      role: 'button'
                    })
                  )
              }
            : null
        ),
        H = N(
          {
            class:
              p +
              (t.standalone ? ' ' + p + '-standalone ' : ' ') +
              (n.attr('class') || ''),
            role: 'application'
          },
          (a = t.editor = N('editor').attr({
            contenteditable: !t.standalone,
            placeholder:
              i.placeholder ||
              n.data('placeholder') ||
              n.attr('placeholder') ||
              '',
            tabindex: 0
          })),
          (c = t.button = N('button', N('button-open'), N('button-close')).attr(
            'title',
            i.buttonTitle
          )),
          (d = t.picker = N(
            'picker',
            N(
              'wrapper',
              (_ = N('filters')),
              i.search
                ? (k = N(
                    'search-panel',
                    N(
                      'search',
                      i.search
                        ? function () {
                            ;(t.search = e('<input/>', {
                              placeholder: i.searchPlaceholder || '',
                              type: 'text',
                              class: 'search'
                            })),
                              this.append(t.search)
                          }
                        : null
                    ),
                    q
                  ))
                : null,
              (P = N(
                'scroll-area',
                i.tones && !i.search ? N('tones-panel', q) : null,
                (T = N('emojis-list'))
              ))
            )
          )
            .addClass($('picker-position-' + i.pickerPosition, !0))
            .addClass($('filters-position-' + i.filtersPosition, !0))
            .addClass($('search-position-' + i.searchPosition, !0))
            .addClass('hidden'))
        )
      i.search && k.addClass($('with-search', !0)),
        (t.searchSel = null),
        a.data(n.data()),
        e.each(i.attributes, function (e, t) {
          a.attr(e, t)
        })
      var M = N('category-block')
        .attr({ 'data-tone': 0 })
        .prependTo(T)
      if (
        (e.each(i.filters, function (n, o) {
          var r = 0
          if ('recent' !== n || t.recentEmojis) {
            if ('tones' !== n)
              e('<i/>', {
                class: $('filter', !0) + ' ' + $('filter-' + n, !0),
                'data-filter': n,
                title: o.title
              })
                .wrapInner(v(o.icon, t.emojiTemplateAlt))
                .appendTo(_)
            else {
              if (!i.tones) return
              r = 5
            }
            do {
              var a,
                s = o.emoji.replace(/[\s,;]+/g, '|')
              ;(a =
                0 === r
                  ? N('category')
                      .attr({ name: n, 'data-tone': r })
                      .appendTo(M)
                  : N('category-block')
                      .attr({ name: n, 'data-tone': r })
                      .appendTo(T)),
                r > 0 &&
                  (a.hide(),
                  (s = s.split('|').join('_tone' + r + '|') + '_tone' + r)),
                'recent' === n && (s = O()),
                (s = v(
                  s,
                  t.sprite
                    ? '<i class="emojibtn" role="button" data-name="{name}" title="{friendlyName}"><i class="emojione-{uni}"></i></i>'
                    : '<i class="emojibtn" role="button" data-name="{name}" title="{friendlyName}"><img class="emojioneemoji lazy-emoji" data-src="{img}"/></i>',
                  !0
                )
                  .split('|')
                  .join('')),
                a.html(s),
                e('<div class="emojionearea-category-title"/>')
                  .text(o.title)
                  .prependTo(a)
            } while (--r > 0)
          }
        }),
        (i.filters = null),
        t.sprite || (t.lasyEmoji = T.find('.lazy-emoji')),
        (b = _.find($('filter'))).eq(0).addClass('active'),
        (S = T.find($('category-block'))),
        (x = T.find($('category'))),
        (t.recentFilter = b.filter('[data-filter="recent"]')),
        (t.recentCategory = x.filter('[name=recent]')),
        (t.scrollArea = P),
        i.container ? e(i.container).wrapInner(H) : H.insertAfter(n),
        i.hideSource && n.hide(),
        t.setText(n[L]()),
        n[L](t.getText()),
        j.apply(t),
        t.standalone && !t.getText().length)
      ) {
        var R = e(n).data('emoji-placeholder') || i.emojiPlaceholder
        t.setText(R), a.addClass('has-placeholder')
      }
      m(t, T.find('.emojibtn'), { click: 'emojibtn.click' }),
        m(t, window, { resize: '!resize' }),
        m(t, q.children(), { click: 'tone.click' }),
        m(t, [d, c], { mousedown: '!mousedown' }, a),
        m(t, c, { click: 'button.click' }),
        m(t, a, { paste: '!paste' }, a),
        m(t, a, ['focus', 'blur'], function () {
          return !t.stayFocused && a
        }),
        m(t, d, {
          mousedown: 'picker.mousedown',
          mouseup: 'picker.mouseup',
          click: 'picker.click',
          keyup: 'picker.keyup',
          keydown: 'picker.keydown',
          keypress: 'picker.keypress'
        }),
        m(t, a, [
          'mousedown',
          'mouseup',
          'click',
          'keyup',
          'keydown',
          'keypress'
        ]),
        m(t, d.find('.emojionearea-filter'), { click: 'filter.click' }),
        m(t, n, { change: 'source.change' }),
        i.search &&
          m(t, t.search, {
            keyup: 'search.keypress',
            focus: 'search.focus',
            blur: 'search.blur'
          })
      var z = !1
      if (
        (P.on('scroll', function () {
          if (!z && (D.call(t), P.is(':not(.skinnable)'))) {
            var n = x.eq(0),
              i = P.offset().top
            x.each(function (t, o) {
              return !(e(o).offset().top - i >= 10) && void (n = e(o))
            })
            var o = b.filter('[data-filter="' + n.attr('name') + '"]')
            o[0] &&
              !o.is('.active') &&
              (b.removeClass('active'), o.addClass('active'))
          }
        }),
        t
          .on('@filter.click', function (e) {
            var n = e.is('.active')
            if (P.is('.skinnable')) {
              if (n) return
              q.children()
                .eq(0)
                .click()
            }
            ;(z = !0),
              n ||
                (b.filter('.active').removeClass('active'),
                e.addClass('active'))
            var i = x.filter('[name="' + e.data('filter') + '"]').offset().top,
              o = P.scrollTop(),
              r = P.offset().top
            P.stop().animate(
              { scrollTop: i + o - r - 2 },
              200,
              'swing',
              function () {
                D.call(t), (z = !1)
              }
            )
          })
          .on('@picker.show', function () {
            t.recentEmojis && I(t), D.call(t)
          })
          .on('@tone.click', function (e) {
            q.children().removeClass('active')
            var n = e.addClass('active').data('skin')
            n
              ? (P.addClass('skinnable'),
                S.hide()
                  .filter('[data-tone=' + n + ']')
                  .show(),
                b.removeClass('active'))
              : (P.removeClass('skinnable'),
                S.hide()
                  .filter('[data-tone=0]')
                  .show(),
                b.eq(0).click()),
              D.call(t),
              i.search && t.trigger('search.keypress')
          })
          .on('@button.click', function (e) {
            e.is('.active')
              ? t.hidePicker()
              : (t.showPicker(), (t.searchSel = null))
          })
          .on('@!paste', function (n, i) {
            var o = function (i) {
              var o = 'caret-' + new Date().getTime(),
                r = E(i, t)
              y(r), y('<i id="' + o + '"></i>'), n.scrollTop(c)
              var a = e('#' + o),
                s = a.offset().top - n.offset().top,
                l = n.height()
              ;(c + s >= l || c > s) && n.scrollTop(c + s - (2 * l) / 3),
                a.remove(),
                (t.stayFocused = !1),
                j.apply(t),
                g(t, 'paste', [n, i, r])
            }
            if (i.originalEvent.clipboardData) {
              var r = i.originalEvent.clipboardData.getData('text/plain')
              return (
                o(r),
                i.preventDefault ? i.preventDefault() : i.stop(),
                (i.returnValue = !1),
                i.stopPropagation(),
                !1
              )
            }
            ;(t.stayFocused = !0), y('<span>' + h + '</span>')
            var a = s(n[0]),
              c = n.scrollTop(),
              u = e('<div/>', { contenteditable: !0 })
                .css({
                  position: 'fixed',
                  left: '-999px',
                  width: '1px',
                  height: '1px',
                  top: '20px',
                  overflow: 'hidden'
                })
                .appendTo(e('BODY'))
                .focus()
            window.setTimeout(function () {
              n.focus(), l(n[0], a)
              var e = A(u.html().replace(/\r\n|\n|\r/g, '<br>'), t)
              u.remove(), o(e)
            }, 200)
          })
          .on('@emojibtn.click', function (e) {
            a.removeClass('has-placeholder'),
              null !== t.searchSel &&
                (a.focus(), l(a[0], t.searchSel), (t.searchSel = null)),
              t.standalone
                ? (a.html(v(e.data('name'), t.emojiTemplate)),
                  t.trigger('blur'))
                : (s(a[0]), y(v(e.data('name'), t.emojiTemplate))),
              t.recentEmojis &&
                (function (e, t) {
                  var n = O().split('|'),
                    i = n.indexOf(t)
                  ;-1 !== i && n.splice(i, 1),
                    n.unshift(t),
                    n.length > 9 && n.pop(),
                    localStorage.setItem('recent_emojis', n.join('|')),
                    I(e)
                })(t, e.data('name')),
              t.trigger('search.keypress')
          })
          .on('@!resize @keyup @emojibtn.click', j)
          .on('@!mousedown', function (n, i) {
            return (
              e(i.target).hasClass('search')
                ? ((t.stayFocused = !0),
                  null === t.searchSel && (t.searchSel = s(n[0])))
                : (H.is('.focused') || n.trigger('focus'), i.preventDefault()),
              !1
            )
          })
          .on('@change', function () {
            var e = t.editor.html().replace(/<\/?(?:div|span|p)[^>]*>/gi, '')
            ;(e.length && !/^<br[^>]*>$/i.test(e)) ||
              t.editor.html((t.content = '')),
              n[L](t.getText())
          })
          .on('@source.change', function () {
            t.setText(n[L]()), g('change')
          })
          .on('@focus', function () {
            H.addClass('focused')
          })
          .on('@blur', function () {
            H.removeClass('focused'), i.hidePickerOnBlur && t.hidePicker()
            var e = t.editor.html()
            t.content !== e
              ? ((t.content = e),
                g(t, 'change', [t.editor]),
                n.trigger('blur').trigger('change'))
              : n.trigger('blur'),
              i.search && (t.search.val(''), t.trigger('search.keypress', !0))
          }),
        i.search &&
          t
            .on('@search.focus', function () {
              ;(t.stayFocused = !0), t.search.addClass('focused')
            })
            .on('@search.keypress', function (n) {
              var o = d.find('.emojionearea-filter'),
                r = i.tones ? q.find('i.active').data('skin') : 0,
                a = t.search
                  .val()
                  .replace(/ /g, '_')
                  .replace(/"/g, '\\"')
              a && a.length
                ? (t.recentFilter.hasClass('active') &&
                    t.recentFilter
                      .removeClass('active')
                      .next()
                      .addClass('active'),
                  t.recentCategory.hide(),
                  t.recentFilter.hide(),
                  S.each(function () {
                    var t = function (e, t) {
                        var n = e.find('.emojibtn[data-name*="' + a + '"]')
                        0 === n.length
                          ? (e.data('tone') === t && e.hide(),
                            o
                              .filter('[data-filter="' + e.attr('name') + '"]')
                              .hide())
                          : (e
                              .find('.emojibtn:not([data-name*="' + a + '"])')
                              .hide(),
                            n.show(),
                            e.data('tone') === t && e.show(),
                            o
                              .filter('[data-filter="' + e.attr('name') + '"]')
                              .show())
                      },
                      n = e(this)
                    0 === n.data('tone')
                      ? x.filter(':not([name="recent"])').each(function () {
                          t(e(this), 0)
                        })
                      : t(n, r)
                  }),
                  z ? D.call(t) : P.trigger('scroll'))
                : (I(t, !0),
                  S.filter(
                    '[data-tone="' +
                      q.find('i.active').data('skin') +
                      '"]:not([name="recent"])'
                  ).show(),
                  e('.emojibtn', S).show(),
                  o.show(),
                  D.call(t))
            })
            .on('@search.blur', function () {
              ;(t.stayFocused = !1),
                t.search.removeClass('focused'),
                t.trigger('blur')
            }),
        i.shortcuts &&
          t.on('@keydown', function (e, n) {
            n.ctrlKey ||
              (9 == n.which
                ? (n.preventDefault(), c.click())
                : 27 == n.which &&
                  (n.preventDefault(), c.is('.active') && t.hidePicker()))
          }),
        w(i.events) &&
          !e.isEmptyObject(i.events) &&
          e.each(i.events, function (e, n) {
            t.on(e.replace(/_/g, '.'), n)
          }),
        i.autocomplete)
      ) {
        var F = function () {
            var n = {
              maxCount: i.textcomplete.maxCount,
              placement: i.textcomplete.placement
            }
            i.shortcuts &&
              (n.onKeydown = function (e, t) {
                if (!e.ctrlKey && 13 == e.which) return t.KEY_ENTER
              })
            var r = e.map(o.emojioneList, function (e, t) {
              return i.autocompleteTones ? t : /_tone[12345]/.test(t) ? null : t
            })
            r.sort(),
              a.textcomplete(
                [
                  {
                    id: p,
                    match: /\B(:[\-+\w]*)$/,
                    search: function (t, n) {
                      n(
                        e.map(r, function (e) {
                          return 0 === e.indexOf(t) ? e : null
                        })
                      )
                    },
                    template: function (e) {
                      return v(e, t.emojiTemplate) + ' ' + e.replace(/:/g, '')
                    },
                    replace: function (e) {
                      return v(e, t.emojiTemplate)
                    },
                    cache: !0,
                    index: 1
                  }
                ],
                n
              ),
              i.textcomplete.placement &&
                'static' ==
                  e(a.data('textComplete').option.appendTo).css('position') &&
                e(a.data('textComplete').option.appendTo).css(
                  'position',
                  'relative'
                )
          },
          W = function () {
            if (t.disabled) {
              var e = function () {
                t.off('enabled', e), F()
              }
              t.on('enabled', e)
            } else F()
          }
        e.fn.textcomplete
          ? W()
          : e.ajax({
              url:
                'https://cdn.rawgit.com/yuku-t/jquery-textcomplete/v1.3.4/dist/jquery.textcomplete.js',
              dataType: 'script',
              cache: !0,
              success: W
            })
      }
      t.inline &&
        (H.addClass($('inline', !0)),
        t.on('@keydown', function (e, t) {
          13 == t.which && t.preventDefault()
        })),
        /firefox/i.test(navigator.userAgent) &&
          document.execCommand('enableObjectResizing', !1, !1),
        (t.isReady = !0),
        t.trigger('onLoad', a),
        t.trigger('ready', a)
    }
    window.getSelection && document.createRange
      ? ((s = function (e) {
          var t = window.getSelection && window.getSelection()
          if (t && t.rangeCount > 0) return t.getRangeAt(0)
        }),
        (l = function (e, t) {
          var n = document.createRange()
          n.setStart(t.startContainer, t.startOffset),
            n.setEnd(t.endContainer, t.endOffset),
            (t = window.getSelection()).removeAllRanges(),
            t.addRange(n)
        }))
      : document.selection &&
        document.body.createTextRange &&
        ((s = function (e) {
          return document.selection.createRange()
        }),
        (l = function (e, t) {
          var n = document.body.createTextRange()
          n.moveToElementText(e),
            n.setStart(t.startContanier, t.startOffset),
            n.setEnd(t.endContainer, t.endOffset),
            n.select()
        }))
    var L = {
      defaultBase: 'https://cdnjs.cloudflare.com/ajax/libs/emojione/',
      defaultBase3: 'https://cdn.jsdelivr.net/',
      base: null,
      isLoading: !1
    }
    function q (t) {
      var n = b()
      if (((t = C(t)), !L.isLoading))
        if (!o || T(k(o)) < 2) {
          var i
          ;(L.isLoading = !0),
            (i =
              T(n) > 5
                ? L.defaultBase3 + 'npm/emojione@' + n
                : T(n) > 4
                ? L.defaultBase3 + 'emojione/' + n
                : L.defaultBase + '/' + n),
            e.ajax({
              url: i + '/lib/js/emojione.min.js',
              dataType: 'script',
              cache: !0,
              success: function () {
                var i
                for (
                  o = window.emojione,
                    n = k(o),
                    (f = T(n)) > 4
                      ? ((L.base = L.defaultBase3 + 'emojione/assets/' + n),
                        (i =
                          L.base +
                          '/sprites/emojione-sprite-' +
                          o.emojiSize +
                          '.css'))
                      : ((L.base = L.defaultBase + n + '/assets'),
                        (i = L.base + '/sprites/emojione.sprites.css')),
                    t.sprite &&
                      (document.createStyleSheet
                        ? document.createStyleSheet(i)
                        : e('<link/>', { rel: 'stylesheet', href: i }).appendTo(
                            'head'
                          ));
                  r.length;

                )
                  r.shift().call()
                L.isLoading = !1
              }
            })
        } else
          (n = k(o)),
            (f = T(n)),
            (L.base =
              f > 4
                ? L.defaultBase3 + 'emojione/assets/' + n
                : L.defaultBase + n + '/assets')
      a(function () {
        var e = ''
        t.useInternalCDN &&
          (f > 4 && (e = o.emojiSize + '/'),
          (o.imagePathPNG = L.base + '/png/' + e),
          (o.imagePathSVG = L.base + '/svg/' + e),
          (o.imagePathSVGSprites = L.base + '/sprites/emojione.sprites.svg'),
          (o.imageType = t.imageType)),
          T(n) > 4
            ? ((c = o.regUnicode), (o.imageType = t.imageType || 'png'))
            : (c = new RegExp(
                '<object[^>]*>.*?</object>|<span[^>]*>.*?</span>|<(?:object|embed|svg|img|div|span|p|a)[^>]*>|(' +
                  o.unicodeRegexp +
                  ')',
                'gi'
              ))
      })
    }
    var H = function (e, o) {
      var r = this
      q(o),
        (n[(r.id = ++t)] = {}),
        (i[r.id] = {}),
        a(function () {
          P(r, e, o)
        })
    }
    function M (t, n) {
      n = n.replace(/^@/, '')
      var o = t.id
      i[o][n] &&
        (e.each(i[o][n], function (i, o) {
          e.each(e.isArray(o[0]) ? o[0] : [o[0]], function (i, r) {
            e(r).on(o[1], function () {
              var i = d.call(arguments),
                r = e.isFunction(o[2]) ? o[2].apply(t, [n].concat(i)) : o[2]
              r && g(t, n, [r].concat(i))
            })
          })
        }),
        (i[o][n] = null))
    }
    ;(H.prototype.on = function (t, i) {
      if (t && e.isFunction(i)) {
        var o = this
        e.each(t.toLowerCase().split(' '), function (e, t) {
          M(o, t), (n[o.id][t] || (n[o.id][t] = [])).push(i)
        })
      }
      return this
    }),
      (H.prototype.off = function (t, i) {
        if (t) {
          var o = this.id
          e.each(
            t
              .toLowerCase()
              .replace(/_/g, '.')
              .split(' '),
            function (t, r) {
              n[o][r] &&
                !/^@/.test(r) &&
                (i
                  ? e.each(n[o][r], function (e, t) {
                      t === i && (n[o][r] = n[o][r].splice(e, 1))
                    })
                  : (n[o][r] = []))
            }
          )
        }
        return this
      }),
      (H.prototype.trigger = function () {
        var e = d.call(arguments),
          t = [this].concat(e.slice(0, 1))
        return t.push(e.slice(1)), g.apply(this, t)
      }),
      (H.prototype.setFocus = function () {
        var e = this
        return (
          a(function () {
            e.editor.focus()
          }),
          e
        )
      }),
      (H.prototype.setText = function (e) {
        var t = this
        return (
          a(function () {
            t.editor.html(E(e, t)),
              (t.content = t.editor.html()),
              g(t, 'change', [t.editor]),
              j.apply(t)
          }),
          t
        )
      }),
      (H.prototype.getText = function () {
        return A(this.editor.html(), this)
      }),
      (H.prototype.showPicker = function () {
        var e = this
        return (
          e._sh_timer && window.clearTimeout(e._sh_timer),
          e.picker.removeClass('hidden'),
          (e._sh_timer = window.setTimeout(function () {
            e.button.addClass('active')
          }, 50)),
          g(e, 'picker.show', [e.picker]),
          e
        )
      }),
      (H.prototype.hidePicker = function () {
        var e = this
        return (
          e._sh_timer && window.clearTimeout(e._sh_timer),
          e.button.removeClass('active'),
          (e._sh_timer = window.setTimeout(function () {
            e.picker.addClass('hidden')
          }, 500)),
          g(e, 'picker.hide', [e.picker]),
          e
        )
      }),
      (H.prototype.enable = function () {
        var e = this,
          t = function () {
            ;(e.disabled = !1),
              e.editor.prop('contenteditable', !0),
              e.button.show()
            var t = e[e.standalone ? 'button' : 'editor']
            t.parent().removeClass('emojionearea-disable'), g(e, 'enabled', [t])
          }
        return e.isReady ? t() : e.on('ready', t), e
      }),
      (H.prototype.disable = function () {
        var e = this
        e.disabled = !0
        var t = function () {
          e.editor.prop('contenteditable', !1), e.hidePicker(), e.button.hide()
          var t = e[e.standalone ? 'button' : 'editor']
          t.parent().addClass('emojionearea-disable'), g(e, 'disabled', [t])
        }
        return e.isReady ? t() : e.on('ready', t), e
      }),
      (e.fn.emojioneArea = function (t) {
        return this.each(function () {
          return (
            this.emojioneArea ||
              e.data(
                this,
                'emojioneArea',
                (this.emojioneArea = new H(e(this), t))
              ),
            this.emojioneArea
          )
        })
      }),
      (e.fn.emojioneArea.defaults = x()),
      (e.fn.emojioneAreaText = function (t) {
        t = C(t)
        var n = this,
          i = {
            shortnames: !t || void 0 === t.shortnames || t.shortnames,
            emojiTemplate:
              '<img alt="{alt}" class="emojione' +
              (t && t.sprite && f < 3
                ? '-{uni}" src="' + u
                : 'emoji" src="{img}') +
              '"/>'
          }
        return (
          q(t),
          a(function () {
            n.each(function () {
              var t = e(this)
              return (
                t.hasClass('emojionearea-text') ||
                  t
                    .addClass('emojionearea-text')
                    .html(
                      E(
                        t.is('TEXTAREA') || t.is('INPUT') ? t.val() : t.text(),
                        i
                      )
                    ),
                t
              )
            })
          }),
          this
        )
      })
  }, window)
