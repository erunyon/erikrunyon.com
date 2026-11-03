# Feed readers don't resolve root-relative URLs. `absolute_urls` makes
# src="/…" and href="/…" absolute, but only inside real HTML tags, so code
# samples (escaped as &lt;…) and protocol-relative URLs (//host/…) are left as is.
module AbsoluteUrls
  TAG = /<[a-z][^>]*>/i
  ATTR = %r{(\s(?:src|href)=")/(?!/)}

  def absolute_urls(html)
    config = @context.registers[:site].config
    root = "#{config['url']}#{config['baseurl']}/"
    html.to_s.gsub(TAG) { |tag| tag.gsub(ATTR) { "#{Regexp.last_match(1)}#{root}" } }
  end
end

Liquid::Template.register_filter(AbsoluteUrls)
