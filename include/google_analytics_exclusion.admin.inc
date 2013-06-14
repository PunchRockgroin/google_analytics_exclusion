<?php
/**
	* Main settings and review administration screen.
	*/
function google_analytics_exclusion_settings_form($form, &$form_state) {
		$form = array();

		$form['google_analytics_exclusion_key'] = array(
				'#type' => 'textfield',
				'#title' => t('Keyword'),
				'#default_value' => variable_get('google_analytics_exclusion_key', ''),
				'#description' => t('Set a keyword variable to filter against.'),
		);
		
		$form['google_analytics_exclusion_ipv4'] = array(
				'#type' => 'textarea',
				'#title' => t('IPv4 Addresses'),
				'#default_value' => variable_get('google_analytics_exclusion_ipv4', false),
				'#description' => t('Enter in IPv4 addresses. One per line.'),
		);
		
//		$form['google_analytics_exclusion_ipv6'] = array(
//				'#type' => 'textarea',
//				'#title' => t('IPv6 Addresses'),
//				'#default_value' => variable_get('google_analytics_exclusion_ipv6', false),
//				'#description' => t('Enter in IPv6 addresses. One per line.'),
//		);

		// Magic function which will add submit button
		// and make us free from writing a submit handler
		return system_settings_form($form);
}